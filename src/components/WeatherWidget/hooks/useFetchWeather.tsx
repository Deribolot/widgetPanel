import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import find from 'lodash/find';
import { NotificationInstance } from 'antd/es/notification/interface';
import { DefaultOptionType } from 'antd/es/select';
import { IWeather } from '..';
import conditions from '../assets/conditions.json';

const getCurrentWeatherURL = (cityName: string) => `http://api.weatherapi.com/v1/current.json?q=${cityName}&key=${WEATHER_API_KEY}`;

interface IProps {
    activeCity?: DefaultOptionType,
    setWeather(weather: IWeather | null): void,
    api: NotificationInstance
}

export default ({ activeCity, setWeather, api }: IProps) => {
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        let timerId;
        let isActive = true;

        async function queryWeather() {
            if (activeCity) {
                setIsPending(true);
                try {
                    const response = await fetch(getCurrentWeatherURL(String(activeCity.value)))
                    const body = await response.json()
                    if (!body?.current) {
                        throw new Error();
                    }

                    const condition = find(conditions, ['code', body.current.condition.code]);
                    if (!condition) {
                        throw new Error();
                    }

                    const localizedConditionTexts = find(condition.languages, ['lang_iso', 'ru']);
                    if (!localizedConditionTexts) {
                        throw new Error();
                    }

                    const iconSrc = (await import('../assets/day/' + condition.icon + '.png'))?.default;
                    if (isActive) {
                        setWeather({
                            feelsLikeC: body.current.feelslike_c,
                            feelsLikeF: body.current.feelslike_f,
                            humidity: body.current.humidity,
                            wind: body.current.wind_kph,
                            localtime: dayjs(body.location.localtime),
                            conditionIconSrc: iconSrc,
                            conditionText: {
                                day: localizedConditionTexts.day_text,
                                night: localizedConditionTexts.night_text
                            },
                        });
                    }

                } catch (e) {
                    api.error({ message: `Возникла ошибка при получении данных о погоде в городе "${activeCity.label}"` })
                    if (isActive) {
                        setWeather(null);
                    }
                }
                setIsPending(false);
                if (isActive) {
                    timerId = setTimeout(queryWeather, 60000);
                }
            }
        };

        queryWeather();

        return () => {
            isActive = false;
            clearTimeout(timerId);
        }
    }, [activeCity, api.error, setWeather]);

    return { isPending };
}
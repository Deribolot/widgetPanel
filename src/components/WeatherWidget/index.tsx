import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Card, ConfigProvider, theme } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import classnames from 'classnames';
import find from 'lodash/find';
import ruRU from 'antd/locale/ru_RU';
import Body from './components/Body';
import SettingsButton from './components/SettingsButton';
import Settings from './components/Settings';
import useFetchWeather from './hooks/useFetchWeather';
import styles from './index.less';

const { useToken } = theme;

export interface IWeather {
    feelsLikeC: number,
    feelsLikeF: number,
    humidity: number,
    wind: number,
    localtime: dayjs.Dayjs,
    conditionIconSrc: string,
    conditionText: { day: string, night: string },
}

export const weatherAPIKey = 'b3d3cc323bfb484f809170534240603';
const cities = [
    { value: 'Paris', label: 'Париж' },
    { value: 'Smolensk', label: 'Смоленск' },
    { value: 'HongKong', label: 'Гонконг' },
];

export default ({ api }: { api: NotificationInstance }) => {
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);
    const [activeCityValue, setActiveCityValue] = useState<string | undefined>(cities[0].value);

    const [weather, setWeather] = useState<IWeather | null>(null);
    const [isTempatureUnitC, setIsTempatureUnitC] = useState(true);

    const activeCity = find(cities, ['value', activeCityValue])

    useFetchWeather({
        weatherAPIKey,
        activeCity,
        setWeather,
        api
    });

    const localHour = weather
        ? weather.localtime.hour()
        : 0;

    const isDay = weather
        ? localHour >= 6 && localHour < 22
        : true;

    const cardClassName = classnames(
        styles.card,
        { [isDay ? styles.day : styles.night]: weather && !isSettingMode }
    );

    const { token } = useToken();

    return weather && activeCity && (
        <ConfigProvider
            locale={ruRU}
            theme={{
                token: isDay
                    ? {}
                    : {
                        colorTextBase: token.colorBgBase,
                    },
            }}
        >
            <Card className={cardClassName} size="small">
                <Body
                    isTempatureUnitC={isTempatureUnitC}
                    isDay={isDay}
                    weather={weather}
                    cityName={activeCity.label}
                />
                {isSettingMode && (
                    <ConfigProvider
                        locale={ruRU}
                        theme={{
                            token: {
                                colorTextBase: token.colorTextBase,
                            },
                        }}
                    >
                        <Settings
                            className={styles.settings}
                            isTempatureUnitC={isTempatureUnitC}
                            setIsTempatureUnitC={setIsTempatureUnitC}
                            cities={cities}
                            activeCityValue={activeCityValue}
                            onCityChange={setActiveCityValue}
                        />
                    </ConfigProvider>
                )}
                <SettingsButton
                    className={styles.settingsButton}
                    isSettingMode={isSettingMode}
                    onClick={() => {
                        setIsSettingMode(isOldSettingMode => !isOldSettingMode)
                    }}
                />
            </Card>
        </ConfigProvider>
    );
}
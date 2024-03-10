import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Card, ConfigProvider, theme } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import classnames from 'classnames';
import find from 'lodash/find';
import ruRU from 'antd/locale/ru_RU';
import { useDraggable } from '@dnd-kit/core';
import { DefaultOptionType } from 'antd/es/select';
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

interface IProps {
    api: NotificationInstance,
    id: number,
    activeCityValue: string | undefined,
    isTempatureUnitC: boolean,
    setIsTempatureUnitC(isSettisTempatureUnitCingMode: boolean): void,
    setActiveCityValue(activeCityValue: string | undefined): void,
    cities: DefaultOptionType[],
}

export const weatherAPIKey = 'b3d3cc323bfb484f809170534240603';

export default ({
    api,
    id,
    activeCityValue,
    isTempatureUnitC,
    setIsTempatureUnitC,
    setActiveCityValue,
    cities
}: IProps) => {
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false);

    const [weather, setWeather] = useState<IWeather | null>(null);

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

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style = transform ? {
        zIndex: 100,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
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
            <Card className={cardClassName} size="small" ref={setNodeRef} style={style} {...listeners} {...attributes}>
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
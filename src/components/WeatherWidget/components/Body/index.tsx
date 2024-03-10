import React from 'react';
import { IWeather } from '../..';
import styles from './index.less';

interface IProps {
    weather: IWeather,
    isDay: boolean,
    isTempatureUnitC: boolean,
    cityName: React.ReactNode,
}

export default ({ weather, isDay, isTempatureUnitC, cityName }: IProps) => {
    return (
        <>
            <div className={styles.cityName}>{cityName}</div>
            <img className={styles.conditionIcon}
                alt="погодные условия"
                src={weather.conditionIconSrc}
            />
            <h2 className={styles.tempature}>
                {
                    isTempatureUnitC
                        ? weather.feelsLikeC
                        : weather.feelsLikeF
                }°{
                    isTempatureUnitC
                        ? 'C'
                        : 'F'
                }
            </h2>
            <div>{weather.conditionText[isDay ? 'day' : 'night']}</div>
            <div>Влажность: {weather.humidity}%</div>
            <div>Ветер: {weather.wind} м/с</div>
        </>
    );
}

import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';

interface IWeather {
    feelsLikeC: number,
    feelsLikeF: number,
    conditionCode: number,
}

const weatherAPIKey = 'b3d3cc323bfb484f809170534240603';
const getCurrentWeatherURL = (cityName: string) => `http://api.weatherapi.com/v1/current.json?q=${cityName}&key=${weatherAPIKey}`;

export default () => {
    const cityName = 'Paris';
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [isTempatureUnitC, setIsTempatureUnitC] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch(getCurrentWeatherURL(cityName))
            const body = await response.json()
            console.log(body);
            setWeather(
                body?.current
                    ? {
                        feelsLikeC: body.current.feelslike_c,
                        feelsLikeF: body.current.feelslike_f,
                        conditionCode: body.current.condition.code,
                    }
                    : null
            );
            /*
         
icon
        Вероятность осадков: 0%
        Влажность: 69%
        Ветер: 1 м/с
            
            */
        })();
    }, [cityName]);

    return weather && (
        <>
            <Radio.Group value={isTempatureUnitC} onChange={(e) => {
                setIsTempatureUnitC(e.target.value)
            }}>
                <Radio.Button value={true}>°C</Radio.Button>
                <Radio.Button value={false}>°F</Radio.Button>
            </Radio.Group>
            {
                isTempatureUnitC
                    ? weather.feelsLikeC
                    : weather.feelsLikeF
            }°{
                isTempatureUnitC
                    ? 'C'
                    : 'F'
            }
        </>
    );
}
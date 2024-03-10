import React, { useState, useRef, useReducer, useCallback, useMemo } from 'react';
import { DndContext, DragOverlay, useSensors, useSensor, PointerSensor } from '@dnd-kit/core';
import { ConfigProvider, notification, Row, Button } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';
import ruRU from 'antd/locale/ru_RU';
import map from 'lodash/map';
import remove from 'lodash/remove';
import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import noop from 'lodash/noop';
import { DefaultOptionType } from 'antd/es/select';
import Column from '@/components/Column';
import WeatherWidget from '@/components/WeatherWidget';
import styles from './index.less';
interface IWidgetData {
    id: number,
    activeCityValue?: string | undefined,
    isTempatureUnitC: boolean,
    columnId: number,
}

interface IWeaterWidgetHandlers {
    setActiveCityValue(activeCityValue: string): void,
    setIsTempatureUnitC(isTempatureUnitC: boolean): void,
}

function reducer(
    state: IWidgetData[],
    action: { type: 'setActiveCityValue', activeCityValue: string, id: number }
        | { type: 'setIsTempatureUnitC', isTempatureUnitC: boolean, id: number }
        | { type: 'setColimnId', columnId: number, id: number }
        | { type: 'addNew', id: number, activeCityValue: string }
): IWidgetData[] {
    if (action.type === 'addNew') {
        return [
            ...state,
            {
                id: action.id,
                isTempatureUnitC: true,
                columnId: 1,
                activeCityValue: action.activeCityValue,
            }
        ];
    }

    return map(state, widgetData => {
        if (action.type === 'setActiveCityValue' && widgetData.id === action.id) {
            return { ...widgetData, activeCityValue: action.activeCityValue }
        }
        if (action.type === 'setIsTempatureUnitC' && widgetData.id === action.id) {
            return { ...widgetData, isTempatureUnitC: action.isTempatureUnitC }
        }
        if (action.type === 'setColimnId' && widgetData.id === action.id) {
            return { ...widgetData, columnId: action.columnId }
        }
        return widgetData
    });
}

export default function () {
    const [api, contextHolder] = notification.useNotification();
    const [cities] = useState<DefaultOptionType[]>([
        { value: 'Paris', label: 'Париж' },
        { value: 'Smolensk', label: 'Смоленск' },
        { value: 'HongKong', label: 'Гонконг' },
    ]);

    const [widgetDatas, dispatch] = useReducer(reducer, []);

    const nextWidgetId = useRef<number>(0);

    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const onAdditionButtonClick = useCallback(() => {
        nextWidgetId.current = nextWidgetId.current + 1;
        const activeCityValue = cities.length > 0 ? String(cities[0].value) : undefined;
        if (!activeCityValue) {
            return;
        }
        dispatch({
            type: 'addNew',
            id: nextWidgetId.current,
            activeCityValue,
        });
    }, [cities, dispatch]);

    const weaterWidgetHandlers = useMemo(() => {
        return reduce<IWidgetData, { [key: number]: IWeaterWidgetHandlers }>(widgetDatas, (result, widgetData) => {
            result[widgetData.id] = {
                setActiveCityValue: (activeCityValue: string) => {
                    dispatch({
                        type: 'setActiveCityValue',
                        activeCityValue,
                        id: widgetData.id,
                    });
                },
                setIsTempatureUnitC: (isTempatureUnitC: boolean) => {
                    dispatch({
                        type: 'setIsTempatureUnitC',
                        isTempatureUnitC,
                        id: widgetData.id,
                    });
                }
            };
            return result;
        }, {});
    }, [dispatch, widgetDatas]);

    return (
        <>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
                <ConfigProvider locale={ruRU}>
                    {contextHolder}
                    <div className={styles.main}>
                        <Button
                            className={styles.addButton}
                            type="primary"
                            shape="circle"
                            icon={<PlusOutlined />}
                            ghost
                            onClick={onAdditionButtonClick}
                        />
                        <Row gutter={16} className={styles.row}>
                            {map([1, 2, 3], (columnId) => (
                                <Column key={columnId} id={columnId}>
                                    {map(filter(widgetDatas, ['columnId', columnId]), ({ id, activeCityValue, isTempatureUnitC }) => (
                                        <WeatherWidget
                                            cities={cities}
                                            api={api} id={id}
                                            key={id}
                                            activeCityValue={activeCityValue}
                                            isTempatureUnitC={isTempatureUnitC}
                                            setActiveCityValue={weaterWidgetHandlers[id].setActiveCityValue}
                                            setIsTempatureUnitC={weaterWidgetHandlers[id].setIsTempatureUnitC}
                                        />
                                    ))}
                                </Column>
                            ))}
                        </Row>
                    </div>
                    <DragOverlay>
                        {activeId ? (
                            map(filter(widgetDatas, ['id', activeId]), ({ id, activeCityValue, isTempatureUnitC }) => (
                                <WeatherWidget
                                    cities={cities}
                                    api={api} id={id}
                                    key={id}
                                    activeCityValue={activeCityValue}
                                    isTempatureUnitC={isTempatureUnitC}
                                    setActiveCityValue={noop}
                                    setIsTempatureUnitC={noop}
                                />
                            ))
                        ) : null}
                    </DragOverlay>
                </ConfigProvider>
            </DndContext>
        </>
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        setActiveId(null);
        if (event.active && event.active.id && event.over && event.over.id) {
            dispatch({
                type: 'setColimnId',
                id: event.active.id,
                columnId: event.over.id,

            });
        }
    }
}
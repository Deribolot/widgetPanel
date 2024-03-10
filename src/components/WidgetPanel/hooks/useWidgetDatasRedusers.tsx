import React, { useRef, useReducer, useCallback, useMemo } from 'react';
import map from 'lodash/map';
import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import { DefaultOptionType } from 'antd/es/select';

interface IProps {
    cities: DefaultOptionType[],
}

export interface IWidgetData {
    id: number,
    activeCityValue?: string | undefined,
    isTempatureUnitC: boolean,
    columnId: number,
}

interface IWeaterWidgetHandlers {
    setActiveCityValue(activeCityValue: string): void,
    setIsTempatureUnitC(isTempatureUnitC: boolean): void,
    delete(): void,
}

function reducer(
    state: [IWidgetData['id'][], IWidgetData[]],
    action: { type: 'setActiveCityValue', activeCityValue: string, id: number }
        | { type: 'setIsTempatureUnitC', isTempatureUnitC: boolean, id: number }
        | { type: 'setColimnId', columnId: number, id: number }
        | { type: 'addNew', id: number, activeCityValue: string }
        | { type: 'delete', id: number }
): [IWidgetData['id'][], IWidgetData[]] {
    if (action.type === 'addNew') {
        return [
            [...state[0], action.id],
            [
                ...state[1],
                {
                    id: action.id,
                    isTempatureUnitC: true,
                    columnId: 1,
                    activeCityValue: action.activeCityValue,
                }
            ]
        ];
    }

    if (action.type === 'delete') {
        return [
            filter(state[0], id => id !== action.id),
            filter(state[1], ({ id }) => id !== action.id),
        ];
    }

    return [state[0], map(state[1], widgetData => {
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
    })];
}

export default function ({ cities }: IProps) {
    const [[widgetDataIds, widgetDatas], dispatch] = useReducer(reducer, [[], []]);

    const nextWidgetId = useRef<number>(0);

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

    const changeColimnId = useCallback(({ id, columnId }: { id: number, columnId: number }) => {
        dispatch({
            type: 'setColimnId',
            id,
            columnId,
        });
    }, [dispatch]);

    const weaterWidgetHandlers = useMemo(() => {
        return reduce<IWidgetData['id'], { [key: number]: IWeaterWidgetHandlers }>(widgetDataIds, (result, widgetDataId) => {
            result[widgetDataId] = {
                setActiveCityValue(activeCityValue: string) {
                    dispatch({
                        type: 'setActiveCityValue',
                        activeCityValue,
                        id: widgetDataId,
                    });
                },
                setIsTempatureUnitC(isTempatureUnitC: boolean) {
                    dispatch({
                        type: 'setIsTempatureUnitC',
                        isTempatureUnitC,
                        id: widgetDataId,
                    });
                },
                delete() {
                    dispatch({
                        type: 'delete',
                        id: widgetDataId,
                    });
                }
            };
            return result;
        }, {});
    }, [dispatch, widgetDataIds]);

    return {
        onAdditionButtonClick,
        weaterWidgetHandlers,
        widgetDatas,
        changeColimnId
    };
}
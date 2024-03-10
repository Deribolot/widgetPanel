import React, { useState } from 'react';
import { DragEndEvent, DragStartEvent, DndContext, DragOverlay, useSensors, useSensor, PointerSensor } from '@dnd-kit/core';
import { notification, Row, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import map from 'lodash/map';
import filter from 'lodash/filter';
import noop from 'lodash/noop';
import { DefaultOptionType } from 'antd/es/select';
import Column from '@/components/Column';
import WeatherWidget from '@/components/WeatherWidget';
import styles from './index.less';
import useWidgetDatasRedusers from './hooks/useWidgetDatasRedusers';

const cities: DefaultOptionType[] = [
    { value: 'Paris', label: 'Париж' },
    { value: 'Smolensk', label: 'Смоленск' },
    { value: 'Ekaterinburg', label: 'Екатеринбург' },
    { value: 'HongKong', label: 'Гонконг' },
];

export default function () {
    const [api, contextHolder] = notification.useNotification();

    const {
        onAdditionButtonClick,
        widgetDatas,
        weaterWidgetHandlers,
        changeColimnId,
    } = useWidgetDatasRedusers({ cities });

    const [activeId, setActiveId] = useState<number | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(Number(event.active.id));
    }

    const handleDragEnd = (event: DragEndEvent) => {
        setActiveId(null);
        if (event.active && event.active.id && event.over && event.over.id) {

            changeColimnId({
                id: Number(event.active.id),
                columnId: Number(event.over.id),
            });
        }
    }

    return (
        <>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
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
                                        api={api}
                                        id={id}
                                        key={id}
                                        activeCityValue={activeCityValue}
                                        isTempatureUnitC={isTempatureUnitC}
                                        setActiveCityValue={weaterWidgetHandlers[id].setActiveCityValue}
                                        setIsTempatureUnitC={weaterWidgetHandlers[id].setIsTempatureUnitC}
                                        delete={weaterWidgetHandlers[id].delete}
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
                                delete={noop}
                            />
                        ))
                    ) : null}
                </DragOverlay>
            </DndContext>
        </>
    );
}
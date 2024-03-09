
import React from 'react';
import { Radio, Space, Select, theme } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import classnames from 'classnames';
import styles from './index.less';

const { useToken } = theme;

interface IProps {
    className?: string,
    isTempatureUnitC: boolean,
    setIsTempatureUnitC(isSettisTempatureUnitCingMode: boolean): void,
    cities: DefaultOptionType[],
    activeCityValue?: string,
    onCityChange(value: string): void,
}

const spaceClassNames = {
    item: styles.item,
};

export default function ({
    className: customClassName,
    isTempatureUnitC,
    setIsTempatureUnitC,
    cities,
    onCityChange,
    activeCityValue
}: React.PropsWithChildren<IProps>) {
    const className = classnames(
        styles.settings,
        { ...(customClassName ? { [customClassName]: true } : {}) }
    );

    const { token } = useToken();

    return (
        <Space
            className={className}
            direction="vertical"
            size="small"
            classNames={spaceClassNames}
            style={{ 'backgroundColor': token.colorBgBase  }}
        >
            <Radio.Group
                value={isTempatureUnitC}
                onChange={(e) => {
                    setIsTempatureUnitC(e.target.value)
                }}
            >
                <Radio.Button value={true}>°C</Radio.Button>
                <Radio.Button value={false}>°F</Radio.Button>
            </Radio.Group>
            <Select
                value={activeCityValue}
                className={styles.citySelect}
                onChange={onCityChange}
                options={cities}
            />
        </Space>
    );
}
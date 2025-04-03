import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals.js';

// utils
import { PieChartHolderProps, PieChartItemProps } from './utils/Models.ts';

// assets
import '../css/modules/pie-chart.css';
import '../js/modules/pie-chart.js';

const PieChart = function () {}

const PieChartHolder = function (props:PieChartHolderProps) {

    const { children, info, className, style } = props;

    useEffect(() => {

        // inits
        ui.pieChart.Init();

    });

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-pie-chart${setClassName} ui-ease-pie-chart`;

    return (
        <div className={classes} style={style} data-ui-info={info}>
            <ul>
                {children}
            </ul>
        </div>
    );

}

const PieChartItem = function (props:PieChartItemProps) {

    const { percent, fill, customName, title } = props;

    return (
        <li data-ui-percent={percent} data-ui-custom={customName} data-ui-fill={fill} data-ui-title={title}></li>
    );

}

export default Object.assign(PieChart, {
    Holder: PieChartHolder,
    Item: PieChartItem,
});
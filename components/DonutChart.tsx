import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { DonutChartHolderProps, DonutChartItemProps } from './utils/Models';

// assets
import '../less/modules/donut-chart';
import '../js/modules/donut-chart';

const DonutChart = function () {}

const DonutChartHolder = function (props:DonutChartHolderProps) {

    const { children, msg, className, style } = props;

    useEffect(() => {

        // inits
        ui.donutChart.Init();

    });

    // values
    const setMsg = msg ? msg : '';

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-donut-chart${setClassName} ui-ease-donut-chart`;

    const bgClasses = 'ui-donut-chart-bg';

    return (
        <div className={classes} style={style}>
            <strong>{setMsg}</strong>
            <svg viewBox="0 0 160 160">
                <circle r="69.85699" cy="80" cx="80" className={bgClasses} />
                {children}
            </svg>
        </div>
    );

}

const DonutChartItem = function (props:DonutChartItemProps) {

    const { stroke, percent, title } = props;

    return (
        <circle r="69.85699" cy="80" cx="80" stroke={stroke} data-ui-percent={percent} data-ui-title={title} />
    );

}

export default Object.assign(DonutChart, {
    Holder: DonutChartHolder,
    Item: DonutChartItem,
});
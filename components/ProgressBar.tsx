import * as React from 'react';

// utils
import { ProgressBarProps, ProgressBarItemProps } from './utils/Models.ts';

// assets
import '../css/modules/progress-bar.css';

const ProgressBar = function (props:ProgressBarProps) {

    const { children, size, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setSize = size ? ` ui-progress-${size}` : '';

    const classes = `ui-progress-bar${setSize}${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const ProgressBarItem = function (props:ProgressBarItemProps) {

    const { percent, prefix, suffix, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = setClassName;

    // styles
    let styles: {};

    if (style) {
        styles = {['width']: `${percent}%`, ...style};

    } else styles = {['width']: `${percent}%`};

    return (
        <span className={classes} style={styles}>
            {prefix && prefix}
            {percent}
            {suffix && suffix}
        </span>
    );

}

export default Object.assign(ProgressBar, {
    Item: ProgressBarItem,
});
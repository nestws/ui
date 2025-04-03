import * as React from 'react';

// utils
import { AvatarProps } from './utils/Models.ts';

// assets
import '../css/modules/avatars.css';

export default function Avatar(props:AvatarProps) {

    const { children, onClick, onMouseDown, onMouseUp, size, title, className, data, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const setSize = size ? ` ui-avatar-${size}` : '';

    const classes = `ui-avatar${setSize}${setClassName}`;

    // data attributes
    let setData = [];

    for (const name in data) {

        const attr = `data-ui-${name}`;
        setData[attr] = data[name];

    }

    return (
        <span className={classes} {...setData} style={style} title={title}
            onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                {children}
        </span>
    );

}
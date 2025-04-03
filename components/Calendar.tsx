import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals.js';

// utils
import Form from './Form.tsx';
import SvgIcon from './SvgIcon.tsx';

import { CalendarProps, CalendarPickerProps } from './utils/Models.ts';

// assets
import '../css/modules/calendar.css';
import '../js/modules/calendar.js';

const Calendar = function (props:CalendarProps) {

    const { className, style } = props;

    useEffect(() => {

        // init
        ui.calendar.Init();

    }, [className, style]);

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-calendar ui-ease-calendar${setClassName}`;

    return (
        <div className={classes} style={style}></div>
    );

}

const CalendarPicker = function (props:CalendarPickerProps) {

    const { onChange, onInput, onBlur, name, tabIndex, value, defaultValue, placeholder, disabled, autoComplete, number, numberFloat, required, minlength, maxlength, myRef, id, className, style } = props;

    useEffect(() => {

        // init
        ui.calendar.Init();

    }, [className, style]);

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-calendar-picker ui-form-icon-l${setClassName}`;

    return (
        <Form.Input id={id} myRef={myRef} name={name} tabIndex={tabIndex} value={value} defaultValue={defaultValue} placeholder={placeholder}
                autoComplete={autoComplete} required={required} className={classes} style={style} disabled={disabled}
                number={number} numberFloat={numberFloat} minlength={minlength} maxlength={maxlength}
                onChange={onChange} onInput={onInput} onBlur={onBlur}>
                <SvgIcon as='path' src={ui.assets('iconCalendar')} />
        </Form.Input>
    );

}

export default Object.assign(Calendar, {
    Picker: CalendarPicker,
});
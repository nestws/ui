import * as React from 'react';

// utils
import { CardProps } from './utils/Models.ts';

// assets
import '../css/modules/card.css';
import '../js/modules/card.js';

const Card = function (props:CardProps) {

    const { children, as, type, myRef, className, style } = props;

    // classes
    const setType = type ? ` ui-card-${type}` : '';
    const setClassName = className ? ` ${className}` : '';

    const classes = `ui-card${setType}${setClassName}`;

    // type
    const setAs = as ? as : 'div';

    return (
        <>
        {setAs === 'div' &&
            <div ref={myRef} className={classes} style={style}>
                {children}
            </div>
        }
        {setAs === 'span' &&
            <span ref={myRef} className={classes} style={style}>
                {children}
            </span>
        }
        </>
    );

}

const CardSide = function (props:CardProps) {

    const { children, myRef, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-card-side${setClassName}`;

    return (
        <div ref={myRef} className={classes} style={style}>
            {children}
        </div>
    );

}

export default Object.assign(Card, {
    Side: CardSide,
});
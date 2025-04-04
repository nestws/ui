import * as React from 'react';

// utils
import { TableProps, TableScrollProps, TableFluidProps } from './utils/Models';

// assets
import '../less/modules/tables';

const Table = function (props:TableProps) {

    const { children, bottomCaption, condensed, condensedMore, noSep, nowrap, sidebar, valign, striped, hover, border, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';

    const setBottomCaption = bottomCaption ? ' ui-table-caption-b' : '';
    const setCondensed = condensed ? ' ui-table-condensed' : '';
    const setCondensedMore = condensedMore ? ' ui-table-condensed-more' : '';
    const setNoSep = noSep ? ' ui-table-no-sep' : '';
    const setNowrap = nowrap ? ' ui-table-nowrap' : '';
    const setSidebar = sidebar ? ' ui-table-sidebar' : '';
    const setValign = valign ? ' ui-table-valign' : '';
    const setStriped = striped ? ' ui-table-striped' : '';
    const setHover = hover ? ' ui-table-hover' : '';
    const setBorder = border ? ' ui-table-border' : '';

    const setClasses = setBottomCaption + setCondensed + setCondensedMore + setNoSep + setNowrap + setSidebar + setValign + setStriped + setHover + setBorder;

    const classes = `ui-table${setClasses}${setClassName} ui-ease-table`;

    return (
        <table className={classes} style={style}>
            {children}
        </table>
    );

}

const TableScroll =  function (props:TableScrollProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-table-scroll${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const TableFluid =  function (props:TableFluidProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-table-fluid${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

export default Object.assign(Table, {
    Scroll: TableScroll,
    Fluid: TableFluid,
});
import { PropsWithChildren } from 'react';
import './card.component.scss';

const CardComponent = (props: PropsWithChildren<any>) => {
    const classes = `card ${props.className}`;

    return <div className={classes}>{props.children}</div>
}

export default CardComponent;
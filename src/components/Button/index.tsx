import React, { ButtonHTMLAttributes } from 'react';

import './index.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    isUpdate?: boolean;
    isDelete?: boolean;
};

export function Button(props: ButtonProps): JSX.Element {
    return (
        <button
            className={`button ${props.isUpdate ? 'update' : ''} ${
                props.isDelete ? 'delete' : ''
            }`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

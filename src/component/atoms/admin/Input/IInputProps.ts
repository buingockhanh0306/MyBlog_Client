import React from 'react';

export interface IInputProps{
    text?: string,
    value: string,
    placeholder?: string,
    error?: string,
    isDisabled?: boolean,
    onChange?: (e: React.FormEvent<HTMLInputElement>)=> void,
}

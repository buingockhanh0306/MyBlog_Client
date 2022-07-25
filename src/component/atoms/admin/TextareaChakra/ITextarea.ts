import React from "react";

export interface ITextareaProps{
    text: string,
    value: string,
    placeholder?: string,
    error: string,
    onChange?: (e: React.FormEvent<HTMLTextAreaElement>)=> void
}
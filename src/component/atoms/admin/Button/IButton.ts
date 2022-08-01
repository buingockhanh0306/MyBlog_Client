export interface IButton {
    isLoading?: boolean,
    leftIcon?: JSX.Element,
    text: string,
    onClick?: () => void,
    size?: string,
    width?: string
}

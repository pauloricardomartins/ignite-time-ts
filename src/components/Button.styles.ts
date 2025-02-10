import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-right: .5rem;
    margin: 8px;
    background-color: ${ props => props.theme["green-300"] };

    /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */
`


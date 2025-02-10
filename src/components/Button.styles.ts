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
    border-radius: 8px;
    margin-right: .5rem;
    background-color: ${ props => props.theme.primary };

    /* ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */
`


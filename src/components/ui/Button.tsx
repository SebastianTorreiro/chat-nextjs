import {FC } from 'react';
import {cva} from 'class-variance-authority'

interface ButtonProps {}

const buttonVariants = cva()

const Button: FC<ButtonProps> = ({}) => {
    return <div>Button</div>
}

export default Button;
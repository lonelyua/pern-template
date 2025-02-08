import React, { FC, JSX } from 'react';
import { Link } from 'react-router-dom';
import css from './styles.scss';

interface IButton {
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  link?: string;
  onClick?: (e: Event) => void;
  target?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'icon' | 'text';
}

const Button: FC<IButton> = ({
  className,
  disabled,
  icon = '',
  link,
  onClick,
  text = '',
  type = 'button',
  variant = 'primary',
  ...props
}) => {
  // TO DO: Fix any
  const handleClick = (e: any) => onClick && onClick(e);

  const classNamesList = `${css.button} ${css[`btn-${variant}`]} ${disabled ? css['btn-disabled'] : ''} ${className}`;

  return (
    <>
      {link ? (
        <Link className={classNamesList} to={link} {...props}>
          {icon}
          {text}
        </Link>
      ) : (
        <button
          className={classNamesList}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          {...props}
        >
          {icon}
          {text && <span>{text}</span>}
        </button>
      )}
    </>
  );
};

export default Button;

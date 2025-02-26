import { FC, JSX, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import * as css from './styles.scss';

interface IButton {
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  link?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
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
          onClick={onClick}
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

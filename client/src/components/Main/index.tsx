import React, { FC, ReactNode } from 'react';
import * as css from './styles.scss';

interface IMain {
  loading?: boolean;
  className?: string;
  children?: ReactNode;
}

const Main: FC<IMain> = ({ children, className = '' }) => {
  return <main className={`${css.main} ${className}`}>{children}</main>;
};

export default Main;

import React, { FC } from 'react';
import css from './styles.scss';
import packageJson from '../../../../package.json';

const { version, name, author } = packageJson;

const Footer: FC = () => {
  return (
    <div className={css.footer}>
      © {author} | {name} {version}
    </div>
  );
};

export default Footer;

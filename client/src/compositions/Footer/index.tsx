import { FC } from 'react';
import packageJson from '../../../../package.json';
import * as css from './styles.scss';

const { version, name, author } = packageJson;

const Footer: FC = () => {
  return (
    <div className={css.footer}>
      © {author} | {name} {version}
    </div>
  );
};

export default Footer;

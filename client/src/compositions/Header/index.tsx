import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as css from './styles.scss';
import { URLS } from 'routes';

const Header: FC = () => {
  return (
    <div className={css.header}>
      <Link to={URLS.HOME_PAGE} className={css.logo}>
        PERN
      </Link>
    </div>
  );
};

export default Header;

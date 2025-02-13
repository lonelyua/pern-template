import { FC } from 'react';
import { Button, Main } from 'components';
import { URLS } from 'routes';
import * as css from './styles.scss';

const HomePage: FC = () => {
  return (
    <Main className={css.page}>
      <Button text="Get Started" link={URLS.HOME_PAGE} />
    </Main>
  );
};

export default HomePage;

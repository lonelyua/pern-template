import { FC } from 'react';
import routes, { URLS } from 'routes';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from 'compositions';

import 'styles/reset.scss';
import 'styles/fonts.scss';
import 'styles/common.scss';

const App: FC = () => {
  return (
    <>
      <Routes>
        {routes.map(({ Component, path }, idx) => {
          return (
            <Route
              key={idx}
              index={path === URLS.ROOT}
              path={path}
              element={
                <>
                  <Header />
                  <Component />
                  <Footer />
                </>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;

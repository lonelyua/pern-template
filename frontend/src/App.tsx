// sort-imports-ignore
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toast } from 'components';
import { Footer, Header } from 'compositions';
import routes, { URLS } from 'routes';

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
      <Toast />
    </>
  );
};

export default App;

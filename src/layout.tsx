import { Fragment, FunctionComponent } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

export const Layout: FunctionComponent = () => {
  return (
    <Fragment>
      <Helmet></Helmet>
      {/* <ThemeProvider theme={createTheme({ palette: { primary: { main: themeColor } } })}>
        <Outlet />
      </ThemeProvider> */}
    </Fragment>
  );
};

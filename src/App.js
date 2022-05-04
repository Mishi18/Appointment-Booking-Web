import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from './routes';
import AUTH from './utils/constants';

const App = () => {

  const routing = useRoutes(routes(authStatus()));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );

};

export default App;

function authStatus() {
  let token = sessionStorage.getItem(AUTH.TOKEN);
  // return token == null ? false : true;
  return true;
}

import {ThemeProvider} from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import {Authenticated} from './authenticated/authenticated';
import {Center} from './center/center';
import {parlaTheme} from './common-style';
import {initStore} from './state/store';

const epicMiddleware = createEpicMiddleware();
export const store = initStore(epicMiddleware);
/**
 * Our Application main DOM
 */
const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={parlaTheme}>
      <Authenticated>
        <Center />
      </Authenticated>
    </ThemeProvider>
  </Provider>
);

/**
 * Mount our App DOM to the given element in our index.html file.
 * It links our React code to the HTML file.
 */
ReactDOM.render(<App />, document.getElementById('app'));

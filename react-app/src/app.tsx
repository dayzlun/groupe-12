import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hikes} from './components/hikes';
import {createStore, initialState} from './state/store';
import {reducer} from './state/reducer';

export const {StateProvider, useAppState} = createStore(reducer, initialState);

/**
 * Our Application main DOM
 */
const App: React.FC = () => (
  <StateProvider>
    <Hikes />
  </StateProvider>
);

/**
 * Mount our App DOM to the given element in our index.html file.
 * It links our React code to the HTML file.
 */
ReactDOM.render(<App />, document.getElementById('app'));

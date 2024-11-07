/*
  Codecademy Store
  
  In this project, you’ll build a program that mimics Codecademy’s own online store! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.


*/

import { createRoot } from 'react-dom/client'
import { App } from './app/App';
import './main.css'

const root = createRoot(document.getElementById('root'))

// Import the store here.
import { store } from './app/store';

// Pass state and dispatch props to the <App /> component.

const render = () => {
    root.render(
      <App state={store.getState()} dispatch={store.dispatch}/>
    )
}

render();

// Subscribe render to the store.
store.subscribe(render);


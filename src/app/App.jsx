import React from 'react';

import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};

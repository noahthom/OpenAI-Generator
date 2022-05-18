import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import OpenAIGenerator from './components/OpenAIGenerator';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import promptsReducer from './redux/reducer';
import { readLocalStore } from './redux/actions';



const store = createStore(promptsReducer) 

const palette = extendTheme({
  colors: {
    customDarkRed: {
      100: "#e27d60"
    },
    customTeal: {
      100: "#2AE1DA"
    },
    customBrown: {
      100: "#e8a87c"
    },
    customReddishPurple: {
      100: "#c38d9e"
    },
    customGreen: {
      100: "#41b3a3"
    }
  }
})

let local = localStorage.getItem("saved")
if(local !== null){
  local = JSON.parse(local)
  store.dispatch(readLocalStore(local))
}

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={palette}>
        <OpenAIGenerator />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

export default store
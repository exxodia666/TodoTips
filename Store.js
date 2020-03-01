import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer'
//import { loadState, saveState } from './sessionStorage';

//export const persistedState = loadState();

const initialState = [
    
]


export const Store = createStore(rootReducer, initialState);

//Store.subscribe( () => { saveState(Store.getState())});
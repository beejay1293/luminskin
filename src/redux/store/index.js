import localforage from 'localforage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

localforage.config({
	driver: localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
	name: 'luminskin',
	storeName: 'lumin',
	version: 1.0,
	description: 'luminskin'
});

const persistConfig = {
	key: 'LUMIN',
	storage: localforage
};

let initStore;

initStore = createStore(
	persistReducer(persistConfig, rootReducer),
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

initStore.__PERSISTOR = persistStore(initStore);
export const store = initStore;


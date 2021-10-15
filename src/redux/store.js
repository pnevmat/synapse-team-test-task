import {configureStore, getDefaultMiddleware,} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
  
import registrationReducer from './redusers/registrationReducer';
import authorisationReducer from './redusers/authorisationReducer';
  
import logger from 'redux-logger';
  
  
const userDataPersistConfig = {
    key: 'userData',
    storage,
    whitelist: ['registrationData'],
};

const isAuthPersistConfig = {
    key: 'isAuth',
    storage,
    whitelist: ['isAuth'],
};
  
const store = configureStore({
    reducer: {
        registrationData: persistReducer(userDataPersistConfig, registrationReducer.registrationReducer),
        isAuth: persistReducer(isAuthPersistConfig, authorisationReducer.authorisationReducer),
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), logger],
    //   [...getDefaultMiddleware({ serializableCheck: false })],
    devTools: process.env.NODE_ENV === 'development'
});
  
const persistor = persistStore(store);
  
export default { store, persistor };
import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
  
import registrationReducer from './redusers/registrationReducer';
import authorisationReducer from './redusers/authorisationReducer';
import regInterraptedReducer from './redusers/regInterraptedReducer';
  
import logger from 'redux-logger';
  
  
const rootReducerPersistConfig = {
    key: 'rootReducer',
    storage
};

const rootReducer = combineReducers({
    registrationData: registrationReducer.registrationReducer,
    isAuth: authorisationReducer.authorisationReducer,
    isRegInterrapted: regInterraptedReducer.regInterraptedReducer,
});

const persistedReducer = persistReducer(rootReducerPersistConfig, rootReducer);
  
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false }), logger],
    //   [...getDefaultMiddleware({ serializableCheck: false })],
    devTools: process.env.NODE_ENV === 'development'
});
  
const persistor = persistStore(store);
  
export default { store, persistor };
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Wrap the task reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
    reducer: {
        task: persistedReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
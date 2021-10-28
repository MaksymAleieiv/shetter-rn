import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './reducers/user-reducer/userReducer'
import { changedPostsReducer } from './reducers/changed-posts-reducer/changedPostsReducer'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    user : persistReducer(persistConfig, userReducer),
    changedPosts : changedPostsReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))
let persistor = persistStore(store)
export { store, persistor }

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generator from '../middlewares/generator'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(logger)
const enhancer2 = applyMiddleware(generator)
const store = createStore(reducer, {}, composeEnhancers(enhancer,enhancer2))


window.store = store

export default store
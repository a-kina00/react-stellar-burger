import { combineReducers } from 'redux';

import { dataList } from './ingredients.js';
import constructorList from '../reducers/constructor.js'
import modalList from './modal.js';
import orderList from './order.js';

const rootReducer = combineReducers({
  data: dataList,
  builder: constructorList,
  modal: modalList,
  order: orderList
})

export { rootReducer }
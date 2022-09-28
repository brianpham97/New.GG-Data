import {loadData} from '../db/models';
import {data} from './insert'
const db = require('../db')
// console.log(data);

// Please only run this script once so there no unnecessary duplicate data in the database

db.once('open', () => {
  loadData(data);
});

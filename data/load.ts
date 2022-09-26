import {loadData} from '../db/models';
const db = require('../db')
const data = require('./insert.js');

//Please only run this script once so there no unnecessary duplicate data in the database

db.once('open', () => {
  loadData(data);
});

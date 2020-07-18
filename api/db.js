const mongoose = require('mongoose');
const consola = require('consola');
const url = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

let db = mongoose.connection;
db.on('connected', () => {
  consola.ready({
    message: `Connected to db: ${url}`,
    badge: true
  });
});

db.on('reconnected', () => {
  consola.info({ message: 'Connection re-established', badge: true });
});

db.on('disconnected', () => {
  consola.info({ message: 'Connection disconnected', badge: true });
});

db.on('close', () => {
  consola.info({ message: 'Connection disconnected', badge: true });
});

db.on('error', (error) => {
  consola.error({ message: 'Mongo ERROR: ' + error, badge: true })
});
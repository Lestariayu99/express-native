// Koneksi database sudah berhasil

const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'mongodb';
const client = new MongoClient(uri);

// const client = new MongoClient(uri, {
//     userNewUrlParser: true,
//     useUnifiedTopology: true,
// });

(async () => {
  try {
   await client.connect();
   console.log('Koneksi berhasil !!!');
}catch(e) {
  console.log(e)
}
})();

const db = client.db('product');
module.exports = db;






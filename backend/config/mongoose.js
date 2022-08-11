
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/to_do_list');
  console.log('Database connected');
}

const db=mongoose.connection;
module.exports=db;
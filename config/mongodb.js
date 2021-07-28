const mongoose = require('mongoose');

const dbConect = async () => {
    const db_uri = process.env.DB_URI;
    await mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err, res) => {
        if (!err) {
            console.log('************ CONNECTED TO MONGODB ************');
        }else{
            console.log('************ ERROR CONNECTION TO MONGODB ************', err);
        }
    });
}

module.exports = {
    dbConect
}

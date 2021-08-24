const mongoose = require("mongoose");

mongoose.connect("mongodb://ufldqtnfeky4mgmpcwvy:2UkzeZn5il72QBWHPXbA@blem6vatsrzkovc-mongodb.services.clever-cloud.com:27017/blem6vatsrzkovc", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(db => console.log("DB is connected") + db)
    .catch(err => console.error(err));
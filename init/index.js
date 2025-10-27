const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

main()
    .then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log(err);
    });

const initDb = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, owner: "68fb9c5cfb27f1152d778c33"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDb();

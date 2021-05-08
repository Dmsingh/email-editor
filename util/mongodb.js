// import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';



const connection = {};
const { MONGODB_URI, MONGODB_DB } = process.env

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
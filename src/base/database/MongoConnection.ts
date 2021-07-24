import { singleton } from "tsyringe";
import { Connection, createConnection } from 'mongoose';
import * as config from '../config/config.json';

@singleton()
export default class MongoConnection {
     public db: Connection;
     constructor() {
          const uri = `${config.mongo.protocol}://${config.mongo.hostname}:${config.mongo.port}/${config.mongo.db}`;
          this.db = createConnection(uri, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               authSource: "admin",
               auth: {
                    user: config.mongo.user,
                    password: config.mongo.password
               },
          });
     }
}
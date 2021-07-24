import * as mongoose from "mongoose";

export interface DbEntity {
     _id?: any;
     created?: number;
     updated?: number;
}

export const DbSchema = {
     _id: {
          type: mongoose.Schema.Types.ObjectId,
          auto: true,
     },
     created: {
          type: mongoose.Schema.Types.Number,
          require: false,
          default: Date.now,
     },
     updated: {
          type: mongoose.Schema.Types.Number,
          require: false,
          default: Date.now
     }
}
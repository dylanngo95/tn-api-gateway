import { Model, Document, Schema, SchemaDefinition, Mongoose } from 'mongoose';
import MongoConnection from '../database/MongoConnection';
import { IBaseRepository } from './IBaseRepository';

export class BaseRepository<EntityType> implements IBaseRepository<EntityType> {

     protected mongoConnection: MongoConnection;
     protected modelName: string;
     protected dbSchema: SchemaDefinition;
     protected documentModel: Model<Document>;
     protected formatter: any = Object;

     constructor(
          mongoConnection: MongoConnection,
          modelName: string,
          dbSchema: SchemaDefinition,
     ) {
          this.mongoConnection = mongoConnection;
          this.modelName = modelName;
          this.dbSchema = dbSchema;

          this.documentModel = this.mongoConnection.db.model(
               this.modelName,
               new Schema(dbSchema, { collection: this.modelName })
          );
     }

     /**
      * Create a new entity.
      *
      * @param entity
      * @returns EntityType
      */
     public async create(entity: EntityType): Promise<EntityType> {
          const documentModel = await this.documentModel.create(entity);
          return documentModel as any;
     }

     /**
      * The way to find a entity.
      *
      * @param _id
      * @returns
      */
     public async findOnce(_id: string): Promise<EntityType> {
          const documentModel = await this.documentModel.findOne({
               _id
          });
          return documentModel as any;
     }

     /**
      *  The way to update a entity.
      *
      * @param _id
      * @param entity
      * @returns
      */
     public async update(_id: string, entity: EntityType): Promise<void> {
          await this.documentModel.updateOne({ _id }, { $set: entity });
     }

     /**
      * Inset many an entity.
      *
      * @param entity
      * @returns EntityType
      */
     public async insertMany(entities: Array<EntityType>): Promise<EntityType> {
          const documentModel = await this.documentModel.insertMany(entities);
          return documentModel as any;
     }

}
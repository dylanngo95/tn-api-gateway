export interface IBaseRepository<EntityType> {
     create(entity: EntityType): Promise<EntityType>;
     findOnce(_id: string): Promise<EntityType>;
     update(_id: string, entity: EntityType): Promise<void>;
     insertMany(entities: Array<EntityType>): Promise<EntityType>;
}
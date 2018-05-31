export default function deleteEntity({
    stateEntitiesProp = "entities",
    entityIdentifier = "id"
} = {}) {
    return (state, { payload }) => {
        const entitiesToDelete = Array.isArray(payload) ? payload : [payload],
              entities = stateEntitiesProp ? state[stateEntitiesProp] : state,
              isArray = Array.isArray(entities)
        
        if(isArray) {
            const updatedEntities = entities.filter(entity => !entitiesToDelete.includes(entity[entityIdentifier]))
            return stateEntitiesProp ?
                        Object.assign({}, state, { [stateEntitiesProp]: updatedEntities }) :
                        updatedEntities
        }
        
        entitiesToDelete.forEach(key => delete entities[key])
        return stateEntitiesProp ?
            Object.assign({}, state, { [stateEntitiesProp]: entities }) :
            entities
    }
}
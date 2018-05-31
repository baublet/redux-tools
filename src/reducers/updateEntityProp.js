export default function updateEntityProp(
    entityProp,
    {
        actionPayloadEntityIdentifier = "id",
        stateEntitiesProp = "entities",
        actionPayloadProp = "value",
        entityIdentifier = "id"
    } = {}
) {
    return (state, action) => {
        const entities = !stateEntitiesProp ? state : state[stateEntitiesProp],
              isArray = Array.isArray(entities),
              newValue = action.payload[actionPayloadProp],
              entityIdToUpdate = action.payload[actionPayloadEntityIdentifier]
        
        if(isArray) {
            const updatedEntities = state[stateEntitiesProp].map(entity => {
                if(entity[entityIdentifier] == entityIdToUpdate) {
                    entity[entityProp] = newValue
                }
                return entity
            })

            return !stateEntitiesProp ?
                        updatedEntities :
                        Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
        }
        
        entities[entityIdToUpdate][entityProp] = newValue
        return !stateEntitiesProp ?
                    entities :
                    Object.assign({}, state, { [stateEntitiesProp]: entities })
    }
}

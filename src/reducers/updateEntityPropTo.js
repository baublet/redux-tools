export default function updateEntityPropTo(
    entityProp,
    value,
    {
        actionPayloadEntityIdentifier = null,
        stateEntitiesProp = "entities",
        entityIdentifier = "id"
    } = {}
) {
    return (state, action) => {
        const entities = !stateEntitiesProp ? state : state[stateEntitiesProp],
              isArray = Array.isArray(entities),
              entityIdToUpdate = actionPayloadEntityIdentifier ?
                                    action.payload[actionPayloadEntityIdentifier] :
                                    action.payload
        
        if(isArray) {
            const updatedEntities = state[stateEntitiesProp].map(entity => {
                if(entity[entityIdentifier] == entityIdToUpdate) {
                    entity[entityProp] = value
                }
                return entity
            })

            return !stateEntitiesProp ?
                        updatedEntities :
                        Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
        }
        
        entities[entityIdToUpdate][entityProp] = value
        return !stateEntitiesProp ?
                    entities :
                    Object.assign({}, state, { [stateEntitiesProp]: entities })
    }
}

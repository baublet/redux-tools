export default function updateEntityPropToArray(
    entityProp,
    value,
    {
        actionPayloadEntityIdentifier = null,
        stateEntitiesProp = "entities",
        entityIdentifier = "id"
    } = {}
) {
    return (state, action) => {
        const entityIdToUpdate = action.payload[actionPayloadEntityIdentifier] || action.payload,
            updatedEntities = state[stateEntitiesProp].map(entity => {
                if(entity[entityIdentifier] == entityIdToUpdate) {
                    entity[entityProp] = value
                }
                return entity
            })

        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}
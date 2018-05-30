export default function updateEntityPropArray(
    entityProp,
    {
        actionPayloadEntityIdentifier = "id",
        stateEntitiesProp = "entities",
        actionPayloadProp = "value",
        entityIdentifier = "id"
    } = {}
) {
    return (state, action) => {
        const newValue = action.payload[actionPayloadProp],
            entityIdToUpdate = action.payload[actionPayloadEntityIdentifier],
            updatedEntities = state[stateEntitiesProp].map(entity => {
                if(entity[entityIdentifier] == entityIdToUpdate) {
                    entity[entityProp] = newValue
                }
                return entity
            })

        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}
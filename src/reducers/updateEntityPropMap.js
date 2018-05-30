export default function updateEntityPropMap(
    entityProp,
    {
        actionPayloadEntityIdentifier = "id",
        stateEntitiesProp = "entities",
        actionPayloadProp = "value"
    } = {}
) {
    return (state, action) => {
        const newValue = action.payload[actionPayloadProp],
            entityIdToUpdate = action.payload[actionPayloadEntityIdentifier],
            updatedEntities = Object.assign({}, state[stateEntitiesProp])
        
        updatedEntities[entityIdToUpdate][entityProp] = newValue

        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}
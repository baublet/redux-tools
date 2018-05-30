export default function updateEntityPropMap(
    entityProp,
    value,
    actionPayloadEntityIdentifier = null,
    stateEntitiesProp = "entities"
) {
    return (state, action) => {
        const entityIdToUpdate = action.payload[actionPayloadEntityIdentifier] || action.payload,
            updatedEntities = Object.assign({}, state[stateEntitiesProp])
        
        updatedEntities[entityIdToUpdate][entityProp] = value

        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}
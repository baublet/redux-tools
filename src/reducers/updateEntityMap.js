export default function updateEntityMap({
    stateEntitiesProp = "entities",
    actionPayloadProp = "entities",
    entityIdentifier = "id",
} = {}) {
    return (state, action) => {
        const payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUpdate = payload,
            updatedEntities = Object.assign({}, state[stateEntitiesProp], entitiesToUpdate)
        
        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

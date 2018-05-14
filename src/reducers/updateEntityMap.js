export default function updateEntityMap(
    stateEntitiesProp = "entities",
    actionPayloadProp = "entities",
    entityIdentifier = "id",
) {
    return (state, action) => {
        const payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUpdate = Array.isArray(payload) ? payload : [payload],
            entitiesToUpdateMap = entitiesToUpdate.reduce((map, current) => {
                map[current[entityIdentifier]] = current
                return map
            }, {}),
            updatedEntities = Object.assign({}, state[stateEntitiesProp], entitiesToUpdateMap)
        
        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

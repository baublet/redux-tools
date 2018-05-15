export default function unsetEntityMap(
    stateEntitiesProp = "entities",
    actionPayloadProp = false
) {
    return (state, action) => {
        const payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUnset = Array.isArray(payload) ? payload : [payload]

        const updatedEntities = {}
        Object.keys(state[stateEntitiesProp]).forEach(entityHashKey => {
            if (entitiesToUnset.includes(entityHashKey)) {
                return
            }
            updatedEntities[entityHashKey] = typeof state[stateEntitiesProp][entityHashKey] == "object" ?
                                                Object.assign({}, state[stateEntitiesProp][entityHashKey]) :
                                                state[stateEntitiesProp][entityHashKey]
        })

        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

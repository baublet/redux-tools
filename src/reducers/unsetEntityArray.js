export default function unsetEntityArray({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id",
} = {}) {
    return (state, action) => {
        const payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUnset = Array.isArray(payload) ? payload : [payload]

        const updatedEntities = state[stateEntitiesProp].
                                    slice(0).
                                    filter(entity => !entitiesToUnset.includes(entity[entityIdentifier]))
        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

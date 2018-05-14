import unionBy from "lodash.unionby"

export default function updateEntityArray(
    stateEntitiesProp = "entities",
    actionPayloadProp = "entities",
    entityIdentifier = "id",
) {
    return (state, action) => {
        const payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUpdate = Array.isArray(payload) ? payload : [payload]

        const updatedEntities = unionBy(
            state[stateEntitiesProp].slice(0),
            entitiesToUpdate,
            entityIdentifier
        )
        return Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

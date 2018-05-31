import unionBy from "lodash.unionby"
import copyArrayOrObject from "../helpers/copyArrayOrObject"

export default function updateEntity({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id",
} = {}) {
    return (state, action) => {
        
        const entities = !stateEntitiesProp ?
                            copyArrayOrObject(state) :
                            copyArrayOrObject(state[stateEntitiesProp]),
            isArray = Array.isArray(entities),
            payload = actionPayloadProp ? action.payload[actionPayloadProp] : action.payload,
            entitiesToUpdate = isArray ? (Array.isArray(payload) ? payload : [payload]) : payload,
            updatedEntities = isArray ? unionBy(
                entitiesToUpdate.concat(entities),
                entityIdentifier
            ) : Object.assign({}, entities, entitiesToUpdate)
        
        return !stateEntitiesProp ?
                    updatedEntities :
                    Object.assign({}, state, { [stateEntitiesProp]: updatedEntities })
    }
}

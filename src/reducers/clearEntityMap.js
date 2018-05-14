export default function clearEntityMap(stateEntitiesProp = "entities") {
    return state => Object.assign({}, state, { [stateEntitiesProp]: {} })
}
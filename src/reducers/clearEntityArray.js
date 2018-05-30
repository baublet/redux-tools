export default function clearEntityArray({ stateEntitiesProp = "entities" } = {}) {
    return state => Object.assign({}, state, { [stateEntitiesProp]: [] })
}
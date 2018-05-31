export default function clearEntities({ stateEntitiesProp = "entities" } = {}) {
    return state => {
        return !stateEntitiesProp ?
            (Array.isArray(state) ? [] : {}) :
            (Array.isArray(state[stateEntitiesProp]) ?
                Object.assign({}, state, { [stateEntitiesProp]: [] }) :
                Object.assign({}, state, { [stateEntitiesProp]: {} })
            )
    }
}

export default function unsetProperty(prop) {
    return state => {
        const newState = Object.assign({}, state)
        delete state[prop]
        return state
    }
}
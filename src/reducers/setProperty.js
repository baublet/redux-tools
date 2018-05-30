export default function setProperty(prop, { actionPayloadProp = null } = {}) {
    return (state, { payload }) => {
        const valueToSet = actionPayloadProp ? payload[actionPayloadProp] : payload
        return Object.assign({}, state, { [prop]: valueToSet })
    }
}
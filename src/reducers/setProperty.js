export default function setProperty(prop, actionPayloadProp = null) {
    return (state, { payload }) => {
        const valueToSet = actionPayloadProp ? payload : payload[actionPayloadProp]
        return Object.assign({}, state, { [prop]: valueToSet })
    }
}
export default function setRoot(actionPayloadProp = null) {
    return (state, { payload }) => {
        const valueToSet = actionPayloadProp ? payload[actionPayloadProp] : payload
        return valueToSet
    }
}
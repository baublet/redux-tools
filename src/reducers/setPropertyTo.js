export default function setPropertyTo(prop, value) {
    return (state) => {
        return Object.assign({}, state, { [prop]: value })
    }
}
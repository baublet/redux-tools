export default function combineSelectors(selectors) {
    const keys = Object.keys(selectors)
    return (state) => {
        const props = {}
        keys.forEach(prop => props[prop] = selectors[prop](state))
        return props
    }
}
import combineSelectors from "./combineSelectors"

export default function combineConnectSelect() {
    const connect = arguments[0],
        totalArguments = arguments.length,
        selectors = []
    for(let i = 1; i < totalArguments; i++) {
        selectors.push(arguments[i])
    }
    return component => connect(combineSelectors.apply(null, selectors))(component)
}
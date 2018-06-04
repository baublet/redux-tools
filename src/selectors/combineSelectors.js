export default function combineSelectors() {
    const args = arguments,
          totalArguments = arguments.length
    return (state) => {
        let props = {}
        for(let i = 0; i < totalArguments; i++) {
            props = Object.assign(props, args[i](state))
        }
        return props
    }
}
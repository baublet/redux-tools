export default function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        if (handlers && handlers.hasOwnProperty && handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        return state
    }
}

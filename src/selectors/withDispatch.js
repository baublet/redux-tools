export default function withDispatch(store) {
    return {
        dispatch: store.dispatch
    }
}
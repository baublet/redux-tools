import withDispatch from "./withDispatch"

test('maps the store dispatch properly', () => {
    let changed = false
    const testState = {
            dispatch: () => { changed = true },
            a: false
        },
        mappedState = withDispatch(testState)
    
    expect(typeof mappedState.dispatch).toBe("function")
    mappedState.dispatch()
    expect(changed).toBe(true)
})
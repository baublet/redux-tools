import unsetProperty from "./unsetProperty"

test('sets property when property not set', () => {
    const reducer = unsetProperty("loading"),
        testState = {
            entities: { a: 2 },
            loading: true
        },
        newState = reducer(testState, { payload: true })
        
    expect(typeof newState.loading == "undefined")
})

test('sets property when property not set using custom payload prop', () => {
    const reducer = unsetProperty("loading", "loading"),
        testState = {
            entities: { a: 2 },
            loading: true
        },
        newState = reducer(testState, { payload: { loading: true }})
        
    expect(typeof newState.loading == "undefined")
})
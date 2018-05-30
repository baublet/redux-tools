import setPropertyTo from "./setPropertyTo"

test('sets property to correct value', () => {
    const reducer = setPropertyTo("loading", true),
        testState = {
            loading: false,
            entities: { a: 2 }
        },
        newState = reducer(testState)
    expect(newState.loading).toBe(true)
})

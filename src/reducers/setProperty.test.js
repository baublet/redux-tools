import setProperty from "./setProperty"

test('sets property when property not set', () => {
    const reducer = setProperty("loading"),
        testState = {
            entities: { a: 2 }
        },
        newState = reducer(testState, { payload: true })
    
    console.log(newState)
    expect(newState.loading).toBe(true)
})

test('sets property when property not set using custom payload prop', () => {
    const reducer = setProperty("loading", "isLoading"),
        testState = {
            entities: { a: 2 }
        },
        newState = reducer(testState, { payload: { isLoading: true }})
        
    expect(newState.loading).toBe(true)
})
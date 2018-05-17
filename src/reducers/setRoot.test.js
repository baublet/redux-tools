import setRoot from "./setRoot"

test('sets root to true', () => {
    const reducer = setRoot(),
        testState = {
            entities: { a: 2 }
        },
        newState = reducer(testState, { payload: true })
    
    console.log(newState)
    expect(newState).toBe(true)
})
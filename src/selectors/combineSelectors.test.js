import combineSelectors from "./combineSelectors"

test('maps selectors together properly', () => {
    console.log(combineSelectors)
    const combinedSelectors = combineSelectors(
        (state) => {
            return { a: state.a }
        },
        (state) => {
            return { b: state.b }
        }
    ),
    testState = {
        a: "1",
        b: "2"
    }
        
    expect(Object.keys(combinedSelectors(testState)).length).toBe(2)
    expect(combinedSelectors(testState).a).toBe(testState.a)
    expect(combinedSelectors(testState).b).toBe(testState.b)
})
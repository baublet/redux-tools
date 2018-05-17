import combineSelectors from "./combineSelectors"

test('maps selectors together properly', () => {
    console.log(combineSelectors)
    const combinedSelectors = combineSelectors({
        selectorA: (state) => state.a,
        selectorB: (state) => state.b
    }),
    testState = {
        a: "1",
        b: "2"
    }
        
    expect(Object.keys(combinedSelectors(testState)).length).toBe(2)
    expect(combinedSelectors(testState).selectorA).toBe(testState.a)
    expect(combinedSelectors(testState).selectorB).toBe(testState.b)
})
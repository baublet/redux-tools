import combineConnectSelect from "./combineConnectSelect"

test('maps selectors together properly', () => {
    const a = (state) => {
            return { a: state.a }
        },
    b = (state) => {
            return { b: state.b }
        },
    testState = {
        a: "1",
        b: "2"
    },
    connect = (selectors) => {
        expect(selectors(testState).a).toBe(testState.a)
        expect(selectors(testState).b).toBe(testState.b)
        return (a) => a
    },
    fullComposite = combineConnectSelect(connect, a, b)("test")
    
    expect(fullComposite).toBe("test")
})
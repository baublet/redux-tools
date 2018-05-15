import unsetEntityArray from "./unsetEntityArray"

function state() {
    return {
        entities: [{
            name: "Test",
            id: 1
        }, {
            name: "Second Test",
            id: 2
        }, {
            name: "Third Test",
            id: 3
        }]
    }
}

test('unsets individual entities', () => {
    const reducer = unsetEntityArray(),
        testState = state(),
        newState = reducer(testState, {
            payload: 2
        })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].name).toBe("Test")
})

test('unsets multiple entities', () => {
    const reducer = unsetEntityArray(),
        testState = state(),
        newState = reducer(testState, {
            payload: [2, 3]
        })
    expect(newState.entities.length).toBe(1)
    expect(newState.entities[0].name).toBe("Test")
})
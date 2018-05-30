import updateEntityPropToArray from "./updateEntityPropToArray"

function state() {
    return {
        entities: [{
            name: "Test",
            id: 1
        }, {
            name: "Second Test",
            id: 2
        }]
    }
}

test('updates individual entity props', () => {
    const reducer = updateEntityPropToArray("loading", true),
        testState = state(),
        newState = reducer(testState, { payload: 1 })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].loading).toBe(true)
    expect(newState.entities[1].name).toBe("Second Test")
})

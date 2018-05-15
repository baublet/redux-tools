import updateEntityArray from "./updateEntityArray"

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

test('updates individual entities', () => {
    const reducer = updateEntityArray(),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                entities: [{
                        name: "Renamed Test",
                        newProp: "New property",
                        id: 1
                }]
            }
        })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].name).toBe("Renamed Test")
    expect(newState.entities[0].newProp).toBe("New property")
})

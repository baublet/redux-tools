import updateEntityPropArray from "./updateEntityPropArray"

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
    const reducer = updateEntityPropArray("name"),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                id: 1,
                value: "Renamed Test",
            }
        })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].name).toBe("Renamed Test")
    expect(newState.entities[1].name).toBe("Second Test")
})

test('updates individual entity props using alternative prop names', () => {
    const reducer = updateEntityPropArray("name", { actionPayloadEntityIdentifier: "ident" }),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                ident: 1,
                value: "Renamed Test",
            }
        })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].name).toBe("Renamed Test")
    expect(newState.entities[1].name).toBe("Second Test")
})
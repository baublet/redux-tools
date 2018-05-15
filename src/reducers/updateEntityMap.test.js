import updateEntityMap from "./updateEntityMap"

function state() {
    return {
        entities: {
            a: {
                name: "Test"
            },
            b: {
                name: "Another Test"
            },
            c: {
                name: "Yet, a Third Test!"
            }
        }
    }
}

test('updates individual entities', () => {
    const reducer = updateEntityMap(),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                entities: {
                    b: {
                        name: "Renamed Test",
                        newProp: "New property",
                }}
            }
        })
    expect(newState.entities.b.name).toBe("Renamed Test")
    expect(newState.entities.b.newProp).toBe("New property")
})

test('adds individual entities', () => {
    const reducer = updateEntityMap(),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                entities: {
                    d: {
                        name: "New Test",
                        newProp: "New property",
                }}
            }
        })
    expect(newState.entities.d.name).toBe("New Test")
    expect(newState.entities.d.newProp).toBe("New property")
})
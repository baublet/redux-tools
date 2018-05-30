import updateEntityPropMap from "./updateEntityPropMap"

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

test('updates individual entity props', () => {
    const reducer = updateEntityPropMap("name"),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                id: "a",
                value: "Renamed Test",
            }
        })
    expect(newState.entities.a.name).toBe("Renamed Test")
    expect(newState.entities.b.name).toBe("Another Test")
    expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})

test('updates individual entity props with alt payload props', () => {
    const reducer = updateEntityPropMap("name", {
            actionPayloadEntityIdentifier: "ident",
            stateEntitiesProp: "entities",
            actionPayloadProp: "val"
        }),
        testState = state(),
        newState = reducer(testState, {
            payload: {
                ident: "b",
                val: "Renamed Test",
            }
        })
    expect(newState.entities.a.name).toBe("Test")
    expect(newState.entities.b.name).toBe("Renamed Test")
    expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})
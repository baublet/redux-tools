import updateEntityProp from "./updateEntityProp"

function astate() {
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
    const reducer = updateEntityProp("name"),
        testState = astate(),
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
    const reducer = updateEntityProp("name", { actionPayloadEntityIdentifier: "ident" }),
        testState = astate(),
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

function mstate() {
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
    const reducer = updateEntityProp("name"),
        testState = mstate(),
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
    const reducer = updateEntityProp("name", {
            actionPayloadEntityIdentifier: "ident",
            stateEntitiesProp: "entities",
            actionPayloadProp: "val"
        }),
        testState = mstate(),
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
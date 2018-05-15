import unsetEntityMap from "./unsetEntityMap"

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

test('unsets individual entities', () => {
    const reducer = unsetEntityMap(),
        testState = state(),
        newState = reducer(testState, {
            payload: "b"
        })
    expect(Object.keys(newState.entities).length).toBe(2)
    expect(newState.entities.a.name).toBe("Test")
    expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})

test('unsets multiple entities', () => {
    const reducer = unsetEntityMap(),
        testState = state(),
        newState = reducer(testState, {
            payload: ["a", "b"]
        })
    expect(Object.keys(newState.entities).length).toBe(1)
    expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})
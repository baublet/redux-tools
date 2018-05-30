import updateEntityPropToMap from "./updateEntityPropToMap"

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
    const reducer = updateEntityPropToMap("loading", true),
        testState = state(),
        newState = reducer(testState, {
            payload: "a"
        })
    expect(newState.entities.a.loading).toBe(true)
})

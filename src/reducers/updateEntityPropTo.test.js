import updateEntityPropTo from "./updateEntityPropTo"

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
    const reducer = updateEntityPropTo("loading", true),
        testState = astate(),
        newState = reducer(testState, { payload: 1 })
    expect(newState.entities.length).toBe(2)
    expect(newState.entities[0].loading).toBe(true)
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
    const reducer = updateEntityPropTo("loading", true),
        testState = mstate(),
        newState = reducer(testState, {
            payload: "a"
        })
    expect(newState.entities.a.loading).toBe(true)
})

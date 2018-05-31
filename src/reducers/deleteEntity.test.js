import deleteEntity from "./deleteEntity.js"

test('deletes entity from entity array', () => {
    const reducer = deleteEntity(),
        testState = {
            entities: [{
                id: 1,
                name: "Test"
            }, {
                id: 2,
                name: "Test 2"
            }]
        },
        newState = reducer(testState, { payload: 1 })
        
    expect(newState.entities.length).toBe(1)
    expect(newState.entities[0].id).toBe(2)
})

test('deletes entity from entity map', () => {
    const reducer = deleteEntity(),
        testState = {
            entities: {
                a: {
                    name: "Test"
                },
                b: {
                    name: "Test 2"
                }
            }
        },
        newState = reducer(testState, { payload: "a" })
        
    expect(Object.keys(newState.entities).length).toBe(1)
    expect(newState.entities.b.name).toBe("Test 2")
})
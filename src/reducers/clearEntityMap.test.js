import clearEntityMap from "./clearEntityMap"

test('clears the entity array', () => {
    const reducer = clearEntityMap(),
        testState = {
            entities: { a: 2 }
        },
        newState = reducer(testState)
        
    expect(Object.keys(newState.entities).length).toBe(0)
})

test('clears the entity array with specific name', () => {
    const reducer = clearEntityMap({ stateEntitiesProp: "products" }),
        testState = {
            products: { a: 2 }
        },
        newState = reducer(testState)
        
    expect(Object.keys(newState.products).length).toBe(0)
})
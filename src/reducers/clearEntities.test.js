import clearEntities from "./clearEntities"

test('clears the entity array', () => {
    const reducer = clearEntities(),
        testState = {
            entities: [1, 2, 3]
        },
        newState = reducer(testState)
        
    expect(newState.entities.length).toBe(0)
})

test('clears the entity array with specific name', () => {
    const reducer = clearEntities({ stateEntitiesProp: "products" }),
        testState = {
            products: [1, 2, 3]
        },
        newState = reducer(testState)
        
    expect(newState.products.length).toBe(0)
})

test('clears the entity map', () => {
    const reducer = clearEntities(),
        testState = {
            entities: { a: 2 }
        },
        newState = reducer(testState)
        
    expect(Object.keys(newState.entities).length).toBe(0)
})

test('clears the entity map with specific name', () => {
    const reducer = clearEntities({ stateEntitiesProp: "products" }),
        testState = {
            products: { a: 2 }
        },
        newState = reducer(testState)
        
    expect(Object.keys(newState.products).length).toBe(0)
})
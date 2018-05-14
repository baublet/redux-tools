import clearEntityArray from "./clearEntityArray"

test('clears the entity array', () => {
    const reducer = clearEntityArray(),
        testState = {
            entities: [1, 2, 3]
        },
        newState = reducer(testState)
        
    expect(newState.entities.length == 0)
})

test('clears the entity array with specific name', () => {
    const reducer = clearEntityArray("products"),
        testState = {
            products: [1, 2, 3]
        },
        newState = reducer(testState)
        
    expect(newState.products.length == 0)
})
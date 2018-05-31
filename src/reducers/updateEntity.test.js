import updateEntity from "./updateEntity"

function mapState() {
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

test('updates multiple entities in entity map', () => {
    const reducer = updateEntity(),
        testState = mapState(),
        newState = reducer(testState, {
            payload: {
                entities: {
                    a: {
                        name: "Test Renamed!"
                    },
                    b: {
                        name: "Also renamed!"
                    }
                }
            }
        })
        expect(newState.entities.a.name).toBe("Test Renamed!")
        expect(newState.entities.b.name).toBe("Also renamed!")
        expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})

test('updates individual entity in entity map', () => {
    const reducer = updateEntity(),
        testState = mapState(),
        newState = reducer(testState, {
            payload: {
                entities: {
                    a: {
                        name: "Test Renamed!"
                    }
                }
            }
        })
        expect(newState.entities.a.name).toBe("Test Renamed!")
        expect(newState.entities.b.name).toBe("Another Test")
        expect(newState.entities.c.name).toBe("Yet, a Third Test!")
})

function arrayState() {
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

test('updates individual entity in entity array', () => {
    const reducer = updateEntity(),
        testState = arrayState(),
        newState = reducer(testState, {
            payload: {
                entities: [{
                    id: 1,
                    name: "Test Renamed!"
                }]
            }
        })
        expect(newState.entities[0].name).toBe("Test Renamed!")
        expect(newState.entities[1].name).toBe("Second Test")
})

test('updates multiple entities in entity array', () => {
    const reducer = updateEntity(),
        testState = arrayState(),
        newState = reducer(testState, {
            payload: {
                entities: [{
                    id: 1,
                    name: "Test Renamed!"
                }, {
                    id: 2,
                    name: "Also renamed!"
                }]
            }
        })
        expect(newState.entities[0].name).toBe("Test Renamed!")
        expect(newState.entities[1].name).toBe("Also renamed!")
})
# Redux Tools

Make developing the Redux parts of your application faster, simpler, and easier.

## Installation

```js
// NPM
npm install --save @baublet/redux-tools

// Yarn
yarn add @baublet/redux-tools
```

## Documentation

### Create Reducer `createReducer(initialState, handlers)`

`createReducer` simplifies and flattens the process of creating a reducer by turning them into easier-to-follow objects and functions, rather than cases, switches, and tons of white space. `createReducer` is the glue that holds `redux-tools` together.

```js
import { createReducer } from "@baublet/redux-tools"

export UPDATE_IMAGE = "actions/UPDATE_IMAGE"
export CLEAR_IMAGES = "actions/CLEAR_IMAGES"
export DELETE_IMAGE = "actions/DELETE_IMAGE"

// Images reducer
const initialState = {
    images: []
}

export default createReducer(initialState, {
    UPDATE_IMAGE: (state, action) => {
        // Update image code here, returning new state
    },
    CLEAR_IMAGES: (state, action) => {
        // ...
    },
    // ...
})
```

If none of the handlers passed in match the action type, `createReducer` simply returns the state, as one would normally do in a Redux reducer. Although this alone saves some time and effort with Redux, it gets far more useful when combined with Reducer Factories.

### Reducer Factories

Reducer Factories are functions that return functions. The returned functions follow the same signature as any other Redux reducer function, taking the arguments `(state, action)`. Their behavior changes based on the arguments you pass to the factory function. The returned function copies the state tree, modifies it some way, then returns the new state to be merged into the master state.

#### Managing Entities

Redux tools help you manage entities of any shape using either an array container or a map (e.g., an object).

```js
import { createReducer, clearEntityArray, updateEntityArray, unsetEntityArray } from "@baublet/redux-tools"

// Products reducer
const initialState = {
    loading: false,
    // Last syncronized from database
    delta: null,
    products: [],
}

export default createReducer(initialState, {
    clearEntityArray: clearEntityArray({ stateEntitiesProp: "products" }),
    updateEntityArray: updateEntityArray({ stateEntitiesProp: "products" }),
    unsetEntityArray: unsetEntityArray({ stateEntitiesProp: "products" }),
})
```

##### Common options

`stateEntitiesProp` the property of this chunk of state that contains your entities.

`actionPayloadProp` the property of the action payload relevant to this reducer factory.

##### setProperty

Sets a property of the root state to the value of `payload`, or if `actionPayloadProp` is set, sets the value to `payload[actionPayloadProp]`.

```
setProperty(
    prop,                       // Property to update
    {
        actionPayloadProp = null
    } = {}
)
```

##### setPropertyTo

Sets a property of the root state to `value`.

```
setPropertyTo(
    prop,   // Property to update
    value   // Value to set property
)
```

This is useful for `LOADING` and `NOT_LOADING` actions.

##### unsetProperty

Unsets a property of the root state.

```
unsetProperty(
    prop,       // Property to unset
)
```

##### clearEntityArray|Map
```
clearEntityArray({ stateEntitiesProp = "entities" } = {})
clearEntityMap({ stateEntitiesProp = "entities" } = {})
```

Clears all of the entities from this chunk of state. Use `clearEntityArray` if your entity storage is an array. Use `clearEntityMap` if your entity storage is an object map.

##### unsetEntityArray
```
unsetEntityArray({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id"
} = {})
```

Unsets a specific entity in an entity array where `entityIdentifier` (e.g., `entity.id`) of the entity matches (or is in an array that comprises) `payload[actionPayloadProp]` _or_, if `actionPayloadProp` is `false`, `payload`.

```js
const reducerFunction = unsetEntityArray(),
      oldState = {
          entities: [{
              name: "Test",
              id: 1
          }, {
              name: "Test 2",
              id: 2
          }]
      },
      newState = reducerFunction(oldState, 2)

//  newState = {
//      entities: [{
//          name: "Test",
//          id: 1,
//      }]
//  }
```

##### unsetEntityMap
```
unsetEntityMap({
    stateEntitiesProp = "entities",
    actionPayloadProp = false
} = {})
```

Unsets a specific entity in an entity map where the key of the entity matches `payload[actionPayloadProp]` _or_, if `actionPayloadProp` is `false`, `payload`.

##### updateEntityArray

Updates an entity or entities in an entity array.

```
updateEntityArray({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id"
} = {})
```

##### updateEntityMap

Updates a number of entities entities in an entity map.

```
updateEntityMap({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id"
} = {})
```

##### updateEntityPropArray

Updates a property on a specific entity in an entity array.

```
updateEntityPropArray(
    entityProp,
    {
        actionPayloadEntityIdentifier = "id",
        stateEntitiesProp = "entities",
        actionPayloadProp = "value",
        entityIdentifier = "id"
    } = {}
)
```

##### updateEntityPropMap

Updates a property on a specific entity in an entity map.

```
updateEntityPropArray(
    entityProp,
    {
        actionPayloadEntityIdentifier = "id",
        stateEntitiesProp = "entities",
        actionPayloadProp = "value"
    } = {}
)
```
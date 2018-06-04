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

### Combine Selectors `combineSelectors(...)`

`combineSelectors` takes a number of `mapStateToProps` functions and returns a new function that's a result of all of them combined.

```js
// ... MyComponent

// Where withIsLoggedIn and withProducts are valid mapStateToProps functions.

export default connect(combineSelectors(withIsLoggedIn, withProducts))(MyComponent)
```

### Combine, Connect, Select `combineConnectSelect(connect, ...selectors)`

`combineConnectSelect` combines a number of selectors and connects them using the Redux `connect` function that you pass in as the first argument, then returns a function that decorates your component appropriately. Using this function, we can make the above function more readable:

```js
// ... MyComponent

// Where withIsLoggedIn and withProducts are valid mapStateToProps functions.

export default combineConnectSelect(connect, withIsLoggedIn, withProducts)(MyComponent)
```

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

#### setProperty

Sets a property of the root state to the value of `payload`, or if `actionPayloadProp` is set, sets the value to `payload[actionPayloadProp]`.

```js
setProperty(
    prop,                       // Property to update
    {
        actionPayloadProp = null
    } = {}
)
```

#### setPropertyTo

Sets a property of the root state to `value`.

```js
setPropertyTo(
    prop,   // Property to update
    value   // Value to set property
)
```

This is useful for `LOADING` and `NOT_LOADING` actions.

#### unsetProperty

Unsets a property of the root state.

```js
unsetProperty(
    prop,       // Property to unset
)
```

### Managing Entities

Redux tools help you manage entities of any shape using either an array container or a map (e.g., an object).

```js
import { createReducer, clearEntities, updateEntity, unsetEntity } from "@baublet/redux-tools"

export const CLEAR_PRODUCTS = "products/CLEAR_PRODUCTS"
export const UPDATE_PRODUCTS = "products/UPDATE_PRODUCTS"
export const REMOVE_PRODUCT = "products/REMOVE_PRODUCT"

// Products reducer
const initialState = {
    loading: false,
    // Last syncronized from database
    delta: null,
    products: [],
}

export default createReducer(initialState, {
    [CLEAR_PRODUCTS]:  clearEntities({ stateEntitiesProp: "products" }),
    [UPDATE_PRODUCTS]: updateEntity({ stateEntitiesProp: "products" }),
    [REMOVE_PRODUCT]:  unsetEntity({ stateEntitiesProp: "products" }),
})
```

#### Common options

`stateEntitiesProp` the property of this chunk of state that contains your entities. *Note,* in all cases, you should be able to use `null` for this value to indicate that this chunk of state is itself the entity store.

`actionPayloadProp` the property of the action payload relevant to this reducer factory.

`entityIdentifier` the unique identifier for entities in object arrays. *Applicable only to entity arrays.*

#### clearEntities

```js
clearEntities({ stateEntitiesProp = "entities" } = {})
```

Clears all of the entities from this chunk of state.

##### unsetEntity

```js
unsetEntity({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id"
} = {})
```

Unsets a specific entity in an entity array where `entityIdentifier` (e.g., `entity.id`) of the entity matches (or is in an array that comprises) `payload[actionPayloadProp]` _or_, if `actionPayloadProp` is `false`, `payload`.

In an entity map, this unsets the key of the entity that matches `payload[actionPayloadProp]` _or_, if `actionPayloadProp` is `false`, `payload`.

```js
const reducerFunction = unsetEntity(),
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

##### updateEntity

```js
updateEntity({
    stateEntitiesProp = "entities",
    actionPayloadProp = false,
    entityIdentifier = "id"
} = {})
```

Updates an entity or entities in an entity array or map.

##### updateEntityProp

```js
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

Updates a property on a specific entity in an entity array or map.

##### updateEntityPropTo

```js
updateEntityPropTo(
    entityProp,
    value,
    {
        actionPayloadEntityIdentifier = null,
        stateEntitiesProp = "entities",
        entityIdentifier = "id"
    } = {}
)
```

Updates an entity property to a specific value. Useful for things like setting individual entity loading states.

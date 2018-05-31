import createReducer from "reducers/createReducer"

import setProperty from "reducers/setProperty"
import setPropertyTo from "reducers/setPropertyTo"
import unsetProperty from "reducers/unsetProperty"

import updateEntity from "reducers/updateEntity"
import deleteEntity from "reducers/deleteEntity"
import clearEntities from "reducers/clearEntities"

import updateEntityProp from "reducers/updateEntityProp"
import updateEntityPropTo from "reducers/updateEntityPropTo"

import combineSelectors from "selectors/combineSelectors"

// Aliases
const updateEntities = updateEntity

export {
    createReducer,
    setProperty,
    setPropertyTo,
    unsetProperty,
    
    updateEntity,
    updateEntities,
    clearEntities,
    deleteEntity,
    
    updateEntityProp,
    updateEntityPropTo,
    
    combineSelectors,
}
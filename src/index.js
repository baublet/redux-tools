import createReducer from "reducers/createReducer"

import setProperty from "reducers/setProperty"
import unsetProperty from "reducers/unsetProperty"

import updateEntityArray from "reducers/updateEntityArray"
import clearEntityArray from "reducers/clearEntityArray"

import updateEntityMap from "reducers/updateEntityMap"
import clearEntityMap from "reducers/clearEntityMap"

import combineSelectors from "selectors/combineSelectors"

export default {
    createReducer,
    
    setProperty,
    unsetProperty,
    
    updateEntityArray,
    clearEntityArray,
    
    updateEntityMap,
    clearEntityMap,
    
    combineSelectors
}
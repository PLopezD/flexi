import { createAction } from 'redux-actions'
import * as types from './types'

export const loading = (bool) => (
  createAction(types.LOADING)(bool)
)

export const setModalVisibility = (bool) => (
  createAction(types.SET_MODAL_VISIBILITY)(bool)
)

export const changeTab = (tabIndex) => (
  createAction(types.CHANGE_TAB)(tabIndex)
)

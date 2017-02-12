import { createAction } from 'redux-actions'
import * as types from './types'

export const loading = (bool) => (
  createAction(types.LOADING)(bool)
)

export const setModalVisibility = (bool) => (
  createAction(types.SET_MODAL_VISIBILITY)(bool)
)

export const setCalendarModalVisibility = (bool) => (
  createAction(types.CALENDAR_MODAL_VISIBILITY)(bool)
)

export const changeTab = (tabIndex) => (
  createAction(types.CHANGE_TAB)(tabIndex)
)

export const setSelectedDate = (date) => (
  createAction(types.SELECT_DATE)(date)
)
export const calendarLoad = (bool) => (
  createAction(types.CALENDAR_LOAD)(bool)
)
export const setImageSource = (imageObj) => (
  createAction(types.SET_IMAGE_SOURCE)(imageObj)
)

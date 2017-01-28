// import { createAction } from 'redux-actions'

// export const createAsyncCreator = (startAction, asycnFn, endAction) => (
//   dispatch => {
//     dispatch(createAction(startAction)())
//     let actions = createActionsArray(arguments);
//     return asycnFn(dispatch)
//     .then(result => fireActions(dispatch, actions, result))
//     .catch(e => {
//       console.error(e)
//       dispatch(dispatchEndAction(e))
//     })
//   }
// )


// let createActionsArray = (args) => {
//   let actions = []
//   for (var i = 0; i < arguments.length; i++) {
//       if (i >= 2) {
//         actions.push(arguments[i])
//       }
//     }
//   return actions
// }

// let fireActions = (dispatch, arrayOfActions, result) => {
//   console.log(arrayOfActions)
//   arrayOfActions.forEach(action => (
//     dispatch(createAction(action(result)))
//   ))
// }
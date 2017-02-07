/* eslint-disable */

let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

let host = 'http://localhost:8080/'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseJSON = (response) => response.json()

export const get = (path, body) => (
  fetch(`${host}${path}`, { headers })
  .then(checkStatus)
  .then(parseJSON)
)

export const post = (path, data) => (
  fetch(`${host}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  .then(checkStatus)
  .then(parseJSON)
)

// stupid one liner for making query strings
export const generateQueryString = (obj) => {
  return Object.keys(obj).reduce(function (a, k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}

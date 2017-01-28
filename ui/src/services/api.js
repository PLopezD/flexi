let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

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
  fetch(`http://localhost:8080/${path}`, { headers })
  .then(checkStatus)
  .then(parseJSON)
)

export const post = (path, data) => (
  fetch(`http://localhost:8080/${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  .then(checkStatus)
  .then(parseJSON)
)

// stupid one liner for making query strings
export const generateQueryString = (obj) => {
  return Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}
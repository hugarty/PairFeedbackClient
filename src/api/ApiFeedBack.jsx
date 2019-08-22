const baseURL = "http://localhost:8080"
const methods = {get:'GET', post:'POST'};

export const doLogin = loginBody => {
    return fetch(`${baseURL}/auth`,
    {
      method: methods.post,
      headers: getBasicHeader(),
      body: JSON.stringify(loginBody)
    }).then(response => {
      if(response.ok)
        return response.json()
      else
       return Promise.reject(response.json());
    })
  }

export const getMe = () => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me`,
    {
      headers: header
    }).then(response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject(response.json());
    })
}

export const getPair = pairId => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me/pair/${pairId}`,
    {
      headers: header
    }).then(response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject(response.json());
    })
}

export const addPair = formBody => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me/pair`,
    {
      method: methods.post,
      headers: header,
      body: JSON.stringify(formBody)
    }).then(response => {
      if (response.ok)
        return response.json()
      else
        return Promise.reject(response.json());
    })
}

export const testConectionWithAPI = () => {

  fetch(`${baseURL}me/api/test`)
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text);
  })
  .catch(function(error) {
    console.log(error)
  });
}

const getBasicHeader = () =>{
  return new Headers({'Accept':'application/json', 
    'Content-type':'application/json',
    'Origin':'*'});
}

const getBasicHeaderWithToken = () =>{
  return  new Headers({'Accept':'application/json', 
    'Content-type':'application/json',
    'Origin':'*',
    "Authorization" : sessionStorage.getItem("tokenFeedback")});
}
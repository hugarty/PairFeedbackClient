const baseURL = "https://agile-fjord-02510.herokuapp.com"
const methods = {get:'GET', post:'POST', delete: 'DELETE', patch: 'PATCH'};

export const doLogin = loginBody => {
    return fetch(`${baseURL}/auth`,
    {
      method: methods.post,
      headers: getBasicHeader(),
      body: JSON.stringify(loginBody)
    }).then(response => {
      return handleJsonResponse(response);
    })
  }

export const doSignUp = signUpForm => {
  return fetch(`${baseURL}/signup`,
  {
    method: methods.post,
    headers: getBasicHeader(),
    body: JSON.stringify(signUpForm)
  }).then(response => {
    return handleJsonResponse(response);
  })
}  

export const getMe = () => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me`,
    {
      headers: header
    }).then(response => {
      return handleJsonResponse(response);
    })
}

export const getPair = pairId => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me/pair/${pairId}`,
    {
      headers: header
    }).then(response => {
      return handleJsonResponse(response);
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
        return handleJsonResponse(response);
    })
}

export const addFeedbackInPair = formBody => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me/pair`,
    {
      method: methods.patch,
      headers: header,
      body: JSON.stringify(formBody)
    }).then(response => {
        return handleJsonResponse(response);
    })
}

export const deletePair = pairId => {
  let header = getBasicHeaderWithToken();
  return fetch(`${baseURL}/me/pair/${pairId}`,
    {
      method: methods.delete,
      headers: header
    }).then(response => {
      return handleResponse(response);
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

const handleJsonResponse = (response) =>{
  if (response.ok)
    return response.json()
  removeTokenFromStorageIf403(response)
  return Promise.reject(response.json());
}

const handleResponse = (response) =>{
  if (response.ok)
    return response;
  removeTokenFromStorageIf403(response)
  return Promise.reject(response);
}

const removeTokenFromStorageIf403 = response => {
  if(response.status === 403){
    alert("Your token has expired, you will be redirected.\nSorry")
    sessionStorage.removeItem('tokenFeedback');
    window.location.reload();
  }
}

const getBasicHeader = () =>{
  return new Headers({'Accept':'application/json', 
    'Content-type':'application/json',
    'Origin':'*'});
}

const getBasicHeaderWithToken = () =>{
  return new Headers({'Accept':'application/json', 
    'Content-type':'application/json',
    'Origin':'*',
    "Authorization" : sessionStorage.getItem("tokenFeedback")});
}
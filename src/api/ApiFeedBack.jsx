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
  let header = getBasicHeader();
  header.append("Authorization", sessionStorage.getItem("tokenFeedback"));
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
  let header = getBasicHeader();
  header.append("Authorization", sessionStorage.getItem("tokenFeedback"));
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

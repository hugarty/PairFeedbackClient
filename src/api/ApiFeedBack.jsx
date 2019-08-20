const baseURL = "http://localhost:8080/"
const postMethod = 'post';


export const doLogin = loginBody => {
  let header = new Headers();
  header.append("Content-Type","application/json");
    return fetch(`${baseURL}auth`,
    {
      method:postMethod,
      headers: header,
      body: JSON.stringify(loginBody)
    }).then(response => {
      if(response.ok)
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
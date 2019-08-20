const baseURL = "http://localhost:8080/"
const postMethod = 'post';


export const doLogin = loginBody => {
  let header = new Headers();
  header.append("Content-Type","application/json");
    fetch(`${baseURL}auth`,
    {
      method:postMethod,
      headers: header,
      body: JSON.stringify(loginBody)
    }).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    })
    .catch(function(error) {
      console.log(error)
    });
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
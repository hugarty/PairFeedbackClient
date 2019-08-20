

export const testConectionWithAPI = () => {

    fetch('http://localhost:8080/me/api/test')
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
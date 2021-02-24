let button = document.querySelector('#button')
let pName = document.querySelector('#name')
let user_input = {}

function getInfo () 
  {
  user_input = document.getElementById("userInput").value;

    let apiUrl = 'https://swapi.dev/api/people/?search=' + user_input

    console.log(apiUrl)
    
    document.getElementById("error").innerHTML = "";
    document.getElementById("container").innerHTML = "";

    axios.get(apiUrl).then(function(response)
    {
      updateInfo(response.data)
    })
  }

  function updateInfo(data)
  {
    if (data.results.length == 0){
      var error = document.getElementById("error");
      error.innerHTML = "<strong>Sorry nothing was found for: \'<i>" + user_input + "</i>\'<strong>";
      return;
    }
    var container = document.getElementById("container");

    container.innerHTML+= "<hr>"

    data.results.forEach(response => {
      console.log(response);

      container.innerHTML+= "<u>Name:</u> ";
      container.innerHTML+= response.name + "<br>";
      container.innerHTML+= "<u>Birth Year:</u> ";
      container.innerHTML+= response.birth_year + "<br>";
      container.innerHTML+= "<u>Gender:</u> ";
      container.innerHTML+= response.gender + "<br>";

      container.innerHTML+= "<u>Height:</u> ";
      container.innerHTML+= response.height + "<br>";
      container.innerHTML+= "<u>Mass:</u> ";
      container.innerHTML+= response.mass + "<br>";

      
      container.innerHTML+= "<hr>"

    });
  }
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => takeData(json));
  }
  
  function takeData(val) {
    return val.slice(1, 11);
  }
  
  fetchData();
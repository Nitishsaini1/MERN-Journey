async function fetchData () {
    try {
        let url = "the api"
      const response  = await fetch(url);
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
        console.log(error);
        
    }
      

}
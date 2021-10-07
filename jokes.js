
function getJokes(){

var url ="https://v2.jokeapi.dev/joke/any";


fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){
   var setup = data.setup;
   var delievery = data.delivery;
   // console.log(setup);
    // console.log(delievery);

    if(setup == null || delievery == null){
      getJokes();
    }else{
     

   var s =  document.getElementById("setup");
        s.innerHTML = setup;
    var d = document.getElementById("delievery");
        d.innerHTML = delievery;

        s.style.backgroundColor = "grey";
        s.style.padding = "20px";
        s.style.color = "black";
        s.style.borderRadius = "50px"
        s.style.borderTopLeftRadius = "0px";
  

        d.style.backgroundColor = "grey";
        d.style.padding = "20px";
        d.style.color = "black";
        d.style.borderRadius = "50px"
        d.style.borderTopRightRadius = "0px";
      
    }

})
    .catch(function(error){
        console.log("Error: " + error);
        
      });
  
     
      
    }

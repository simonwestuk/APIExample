function makeCall() 
{
    //MAKE AN API CALL USING FETCH
    fetch("https://onlineshopapi20211130142009.azurewebsites.net/product")
    
    .then(function(response) {
            return response.json();
        })
    .then(function(data) {
            console.log(data);

        })
    .catch(function(error) {
            console.log(error);
        });


}


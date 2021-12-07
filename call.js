
var theData = null;

function makeCall() 
{
    //MAKE AN API CALL USING FETCH
    fetch("https://onlineshopapi20211130142009.azurewebsites.net/product")
    
    .then(function(response) {
            return response.json();
        })
    .then(function(data) {
            console.log(data);
            $('#myTable').DataTable( {
                data: data,
                columns: [
                    { title: "id" },
                    { title: "name" },
                    { title: "description" },
                    { title: "price" }
                ]
            } );
        })
    .catch(function(error) {
            console.log(error);
        });


}

$(document).ready( function () {
    
} );


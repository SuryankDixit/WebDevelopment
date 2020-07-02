//var request = require("request"); //npm install request


// inside request we need a callback fucntion, because this request takes time to execute, it is not instantaneous,
// error checks for any potential error in extracting the data,

//NOW REQUEST is DEPRECATED ! 

// request("https://jsonplaceholder.typicode.com/todos", function(error, response, body) {

//     if (error) {
//         console.log("something is wrong.");
//         console.log(error);
//     } else {
//         if (response.statusCode == 200) {

//             // When receiving data from a web server, the data is always a string. Parse the data with JSON. parse() , and the data becomes a JavaScript object.
//             let parse_data = JSON.parse(body);
//             console.log(parse_data); // actual response body that came back (HTML page) or DATA (API)
//         }
//     }
// });


//In Axios responses are already served as javascript object, no need to parse, simply get response and access data.

const axios = require('axios'); // now we use const and let;

// Make a request for a user with a given ID
axios.get("https://jsonplaceholder.typicode.com/todos/1") // if response is received OK 
    .then(function(response) { // then do this
        // handle success
        console.log(response.data.userId); // response includes so many things, we only need data.
    })
    .catch(function(error) { // if response causes some error, then do this,
        // handle error
        console.log(error);
    })
    .finally(function() { // No matter what , execute this block.
        // always executed
    });
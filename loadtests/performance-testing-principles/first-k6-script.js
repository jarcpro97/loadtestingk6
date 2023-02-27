//Import the HTTP Client from the built-in module k6/http:
import http from 'k6/http';

//create and export a default function
// Any code in the default function is executed by each k6 virtual user when the test runs.
export default function(){
    let url= 'https://httpbin.test.k6.io/post';
    let response = http.post(url,'Hello world!')

    console.log(response.json().data);
}
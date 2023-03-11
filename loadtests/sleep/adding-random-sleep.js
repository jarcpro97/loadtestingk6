//Import the HTTP Client from the built-in module k6/http:
import http from 'k6/http';
//Import check and sleep 
import { check, sleep } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";


//create and export a default function
// Any code in the default function is executed by each k6 virtual user when the test runs.
export default function(){
    let url= 'https://httpbin.test.k6.io/post';
    let response = http.post(url,'Hello world!')
    check(response, {
        'Application says hello': (r) => r.body.includes('Hello world!')
    });
    //sleep(1);
    //sleep(Math.random() * 5);
    sleep(randomIntBetween(1,5));
}
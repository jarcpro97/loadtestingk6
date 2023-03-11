import http from "k6/http";
import { check,sleep } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export let options = {
    stages: [
        {duration: '30s', target: 10},
        {duration: '1m', target: 10},
        {duration: '15s', target:0},
    ]
};

export default function(){
    let url= 'https://httpbin.test.k6.io/post';
    let response = http.post(url,'Hello world!')
    check(response, {
        'Application says hello': (r) => r.body.includes('Hello world!')
    });
    sleep(randomIntBetween(1,5));
}

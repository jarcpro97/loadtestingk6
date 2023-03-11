import http from "k6/http";
import { check,sleep } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export let options = {
    Stages: [
        {duration: '30s', target:10},
        {duration: '1m', target:10},
        {duration: '15s', target:10},
    ],
    thresholds: {
        http_req_failed: ['rate<=0.05'],
        http_req_duration: ['p(95)<=5000'],
       // http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
        checks: ['rate>=0.9'],
    },
};
export default function(){

    let response = http.post();


}
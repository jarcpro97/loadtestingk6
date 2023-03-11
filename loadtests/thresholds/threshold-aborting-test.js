import http from "k6/http";
import { check,sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    Stages: [
        {duration: '30s', target:10},
        {duration: '1m', target:10},
        {duration: '15s', target:10},
    ],
    thresholds: {
        http_req_failed: [{
            threshold: 'rate<=0.05',
            abortOnFail: true,
        }],
        http_req_duration: ['p(95) <=155'],
        checks: ['rate>=0.99'],
    },
};
export default function(){

    let url = 'https://httpbin.test.k6.io/post';
    let response = http.post(url,'Hello world!')
    check(response, {
        'Application says hello': (r) => r.body.includes('Hello world!')
    });

    sleep(Math.random() * 5)
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
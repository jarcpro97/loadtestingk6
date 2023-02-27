import http from "k6/http";

const hostname = `http://${__ENV.DOMAIN}`;

export default function(){
    let response = http.get(hostname,'/my_messages.php')

}
//k6 run test.js -e DOMAIN=test.k6.io
//Import the HTTP Client from the built-in module k6/http:
import http from 'k6/http';
//Import BDD checks
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js';

//create and export a default function
// Any code in the default function is executed by each k6 virtual user when the test runs.
export default function testSuite(){

    describe('Fetch a list of public crocodiles',()=>{
        const response = http.get('https://test-api.k6.io/public/crocodiles');
        expect(response.status, 'response status').to.equal(200);
        expect(response).to.have.validJsonBody();
        expect(response.json().length, 'number of crocs').to.be.above(4);
    });
}
import {Employee} from "../src/employee";

const test = require('ava');

test('should return teddy (engineer) when toString given name teddy, type engineer',t=>{
    let name = 'teddy';
    let type = 'engineer';

    let employee = new Employee(name,type);

    t.is(employee.toString(),'teddy (engineer)')
});

test('should return Employee cannot be of type test when toString given name teddy, type test',t=>{
    let name = 'teddy';
    let type = 'test';

    try {
        new Employee(name,type);
        t.fail();
    }catch (e) {
        t.is(e.message,'Employee cannot be of type test')
    }
});

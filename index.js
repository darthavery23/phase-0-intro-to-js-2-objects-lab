// Write your solution in this file!
const employee = {
    name: "Maxine",
    streetAddress: "42 Starlake Street"
}
function updateEmployeeWithKeyAndValue(
    employee,
    key,
    value
) {
return {
    ...employee,
    name: "Sam",
    streetAddress: "11 Broadway"
}; }

function destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    key,
    value
) {
    employee.streetAddress = "12 Broadway";
return employee;
 }

 function deleteFromEmployeeByKey(
    employee,
    key
 ) {
    const newEmployee = {...employee};
    newEmployee[key] = undefined;
    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(
    employee,
    key
 ) {
    employee[key] = undefined;
    return employee;
 }
// Estimate 5 minutes - start at 11:30 - done at 11:34

function getSome(...arguments) { // Spread the input parameters in an array
    const args = arguments.slice(1, 3); /* Get the second and third items in 
    the array and store the in the variable args */
    return args; // return args (second and third items)
}
console.log(getSome(90, 100, 75, 40, 89, 95)); /* Print what the function is returning 
when the function is called with the input '90, 100, 75, 40, 89, 95' */

function add(x,y)
{
    return (x+y);
}
function subtract (x,y)
{
    return (x - y);
}

//export default add if only one function and do not add {} brackert sbeacuse it is only one function
// If you want to export multiple functions, use named exports
//export default function... also if only one file is there

export { add, subtract };
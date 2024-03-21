//Difference between let and var
var x="Mary"
var x="Lary"//valid
x=983//valid
//val of x is 983 now
let y="Scary"
//let y="Dairy"//Invalid declaration of same var name more than once
y=293//valid
//val of y is 293 now
//var has global scope
//let has local scope
//even if we declare var inside a function, we can still use it after that outside the function
//if value of val is changed when it is inside the function, the changed value is also seen outside that function

function withoutusingstrict()
{
    a=10;
    alert(a)
}
withoutusingstrict()//10

function usingstrict()
{
    "use strict";
    a=10;
    alert(a)
}
usingstrict()//gives error due to undeclared variable use

function checkScope1()
{
    var i=10
    alert(i)//10
    if(true)
    {
        var i=20
        alert(i)//20
    }
    alert(i)//20
}
checkScope1()

function checkScope2()
{
    if(true)
    {
        var j=20
        alert(j)//20
    }
    alert(j)//20
}
checkScope2()

function checkScope3()
{
    let k=10
    alert(k)//10
    if(true)
    {
        let k=20
        alert(k)//20
    }
    alert(k)//10
}
checkScope3()

function checkScope4()
{
    if(true)
    {
        let k=20
        alert(k)//20
    }
    alert(k)//error
}
checkScope4()

//Hence we mostly use let rather than var

//const - read only variable
//Ususlly named in all CAPS
const MYNAME="Anushka Chivate"
MYNAME="Shkauna"//error
alert(MYNAME)//Anushka Chivate

//But still we can change the const array values
const arr=[10,20,30,40]
alert(arr)
arr[0]=40
arr[1]=30
arr[2]=20
arr[3]=10
alert(arr)
arr.push(50)
alert(arr)
arr=10//error

//Freeze can stop any mutation
function freeze1()
{
    const pi=3.14
    try
    {
        pi=99
    }
    catch(ex)
    {
        alert(ex)
    }
    return pi
}
const PI1=freeze1()//3.14

function freeze2()
{
    const MATH_CONST=
    {
        pi: 3.14
    }
    try
    {
        MATH_CONST.pi=99
    }
    catch(ex)
    {
        alert(ex)
    }
    return MATH_CONST.pi
}
const PI2=freeze2()//99

function freeze3()
{
    const MATH_CONST=
    {
        pi: 3.14
    }
    Object.freeze(MATH_CONST)
    try
    {
        MATH_CONST.pi=99
    }
    catch(ex)
    {
        alert(ex)
    }
    return MATH_CONST.pi
}
const PI3=freeze3()//3.14

function freeze4()
{
    const MATH_CONST=["pi", 3.14]
    try
    {
        MATH_CONST[1]=99
    }
    catch(ex)
    {
        alert(ex)
    }
    return MATH_CONST[1]
}
const PI4=freeze4()//99

function freeze5()
{
    const MATH_CONST=["pi", 3.14]
    Object.freeze(MATH_CONST)
    try
    {
        MATH_CONST[1]=99
    }
    catch(ex)
    {
        alert(ex)
    }
    return MATH_CONST[1]
}
const PI5=freeze5()//3.14
//Single line Comment
/*Multi Line Comment*/

//Variable declaration var, let, const
const NAME="ANUSHKA"//const

var a=10 //Number
var b="Ten Twenty" //String
var c=10.01 //Floating point number
var d='T'//symbol
var e=true //Boolean
var f //undefined
var g=null //nul
var h={abc:"10a",xyz:"gif"} //Object

//Strings - can be surrounded by sigle or double or back quotes
b[3]='-' //is wrong syntax, strings are immutable
b="Ten-Twenty" //But they can be re assigned
a=b.length //length
b[0] //char at first location in string b
b[a-1]//char at last location in string b

//Arrays
var arr1=[10, 5.5, "num", 'T', false]
var arr2=[["Jack","Sparrow", 50], ["Mary","Crow", 35], "Age", ["FName", "LName"], [[11,5],[8,53],3]]
arr1[3]//T
arr2[0][0]//Jack
arr2[1][2]//35
arr2[2][0]//A
arr2[3][1]//LName
arr2[4][1][0]//8
arr2[4][2]//3

//Push Pop
arr1.push("Done!")//"Done!" is appened at the end of the arr1
var arrval=arr1.pop()//pops out the last element from arr1
arr2.push(["r","p","s"],19,'$')//Appends multiple elements in mentioned sequence at end of arr2
arrval=arr2.pop()//$

//Shift Unshift
arr1.unshift("Done!")//"Done!" is added at the beginning of the arr1
arrval=arr1.shift()//pops out the first element from arr1: "Done!"
arr2.unshift(["r","p","s"],19,'$')//Adds multiple elements in mentioned sequence at beginning of arr2
arrval=arr2.shift()//pops out the first element from arr2: ["r","p","s"]

//Splice - list.splice(a,b,c) a:start index, b:no of elements, c:optional for adding, give values to be added
arr=[10,20,30,40,50,60]
arr.splice(3,2)//removes elements 40 and 50
alert(arr)//[10,20,30,60]
arr.splice(3,2,40,50)
alert(arr)//[10,20,30,40,50]
arr.splice(1,3,15,10,25)
alert(arr)//[10,15,20,25,50]
arr[4]=30
alert(arr)//[10,15,20,25,30]

//Objects
var dog=
{
    "name": "Snoopy",
    age: 10,
    color: "Cream",
    "has fur": true,
    features: ["Friendly", "Loves-Walks"]
}
dog.age//10 can also be given by dog["age"]
dog.name//Snoopy can also be given by dog["name"]
dog.features[1]//Loves-Walks can also be given by dog["features"][1]
dog["has fur"]//true

dog.name="Mush ball"//value can be changed
dog.bark="Woof!"//key value can be added
delete dog.age//key value can be deleted

if(dog.hasOwnProperty("color"))
    alert("Found")
else   
    alert("Not Found")

//Array of objects
var act=
[
    {
        artist: "Alia Bhatt",
        moviecnt: 58,
        rating: 4.9,
        awards: 10
    },
    {
        artist: "Ranbir Kapoor",
        moviecnt: 37,
        rating: 4.3
    }
]
act[0]["artist"]//Alia Bhatt
act[1].rating//4.3

//Object of objects
var vehicle=
{
    "car":
    {
        "inside":
        {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":
        {
            "trunk": "jack"
        }
    },
    "truck":
    {
        "horn ok please": true
    }
}

vehicle.car.inside["glove box"]//vehicle["car"]["inside"]["glove box"]
vehicle["truck"]["horn ok please"]

//Array of objects with arrays
var plant=
[
    {
        type: "Flower",
        list: ["rose", "lily", "tulip", "daffodil"]
    },
    {
        type: "Tree",
        list: ["fir", "oak", "pine"]
    },
    {
        location: "Cold",
        rainfall: "Above 100mm",
        atmosphere: "Humid"
    }
]
plant[0]["list"][2]//tulip
plant[1].list[0]//fir
plant[2]["rainfall"]//Above 100mm

//Destructuring assignment for objects
var spell={x:"ax",y:"vay",z:"zed"}
/*Instead of assigning as
xspl=spell.x
yspl=spell.y
zspl=speel.z
We can use destructing assisnment as:*/
var {x:xspl, y:yspl, z:zspl}=spell
//value of spell.x assigned to xspl, so on...

var forecast=
{
    today: {min:10, max:50},
    tomorrow: {min:1, max:5}
}

var {tomorrow: {max: tomax}}=forecast
//var {max: tomax}=forecast.tomorrow
alert(tomax)

//Destructuring assignments for arrays
var [dsa,dsb]=[1,2,3,4,5]
alert(dsa,dsb)

var [dsa,dsb,,,dsc]=[1,2,3,4,5]
alert(dsa,dsb,dsc)

var list1=[2,3,5,7,9,11,13,15]
var [,,...list2]=list
alert(list2)

//Destructuring to get only the keey pais that we need
const stats=
{
    max: 56.78,
    std_dev: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    avg: 35.85
}

function half({min,max})
{
    return (max+min)/2
}
alert(half(stats))

//template literals
var str=`Hello, my name is ${NAME}!
I have a dog named ${dog.name}.
My favourite actor is ${act[1].artist}.
I like ${plant[0].list[1]} flowers.`
alert(str)
/* Hello, my name is ANUSHKA!
I have a dog named Snoopy.
My favourite actor is Ranbir Kapoor.
I like lily flowers. */
function printHello()
{
    alert("Hello!")
}
printHello()

function add2num(a,b)
{
    var sum=a+b;
    return sum;
}
alert(add2num(10,20))

a=[10]
b=20
c=30
function scopeCheck(x)
{
    var b=["Sam","Tan",100]
    alert("b: ",b)//["Sam","Tan",100]

    alert("x: ",x)//10
    x.push("Ten")
    alert("x: ",x)//[10,"Ten"]

    alert("c: ",c)//30
    c=c+10
    alert("c: ",c)//40
}
scopeCheck(a)
alert("a: ",a)//changes made in formal parameters are visible on actual parameters
alert("b: ",b)//different from b used inside scopeCheck function
alert("c: ",c)//changes made on outer variable inside fuction are visible outside the funstion also

function useIf(val)
{
    if(val)
    {
        return "True Statement";
    }
    return "False Statement";
}
alert(useIf(0))
alert(useIf(1))

function useIfElse(val)
{
    if(val)
    {
        alert("True");
    }
    else
    {
        alert("False")
    }
}
useIfElse(10)
useIfElse(false)

function useTernary(val)
{
    alert(val==0 ?  false:true)
}
useTernary(10)
useTernary(false)

function useNestedTernary(num)
{
    alert(num>0? "Positive" : num<0 ? "Negative": "Zero")
}
useNestedTernary(-10)
useNestedTernary(0)
useNestedTernary(10)

function useElseIf(val)
{
    if(val<0)
        alert("Negative");
    else if(val>0)
        alert("Positive");
    else
        alert("Zero");
}
useElseIf(-10)
useElseIf(0)
useElseIf(10)

function checkEqual(a,b)
{
    if(a==b)
        alert("Values of a: ",a," & b: ",b," are equal")
    else//a!=b
        alert("Values of a: ",a," & b: ",b," are not equal")
    
    if(a===b)
        alert("Values and data type of a: ",a," and b: ",b," are equal")
    else//(a!==b)
        alert("Either values of data type of a: ",a," or b: ",b," are not equal")
}
checkEqual(10,10)
checkEqual(10,"10")
checkEqual(10,"Ten")

function useSwitchCase(x)
{
    var answer=""
    switch(x)
    {
        case 1:
            x="Alpha"
            break;
        case 2:
            x="Beta"
            break;
        case 3:
            x="Gamma"
            break;
        case 4:
            x="Delta"
            break;
        default:
            x="Invalid"
            break;
    }
    return x;
}
alert(useSwitchCase(3))

function randomWF(type)
{
    var num
    if(type=="Whole")
        num=Math.floor(Math.random()*10)//between 0 to 9
    else
        num=Math.random()*10//between 0 to 9
    return num
}
alert(randomWF("Whole"))
alert(randomWF("Fraction"))

function randomWF(type,min,max)
{
    var num
    if(type=="Whole")
        num=Math.floor(Math.random()*(max-min+1)+min)//between min & max
    else
        num=Math.random()*(max-min+1)+min//between min & max
    return num
}
alert(randomWF("Whole",0,100))
alert(randomWF("Fraction",10,50))

function strtoint(str,base=10)
{
    if(base==2)
        return parseInt(str,2) || "Invalid String"
    if(base==8)
        return parseInt(str,8) || "Invalid String"
    if(base==10)
        return parseInt(str) || "Invalid String"
    if(base==16)
        return parseInt(str,16) || "Invalid String"
    else
        return "Invalid Base"
}
alert(strtoint("100",2))
alert(strtoint("100"))

//Arrow Functions
var aval = () => new Date()
alert(aval())

var concat1 = function(a,b)
{
    return a.concat(b);
}
alert(concat1("AbC","dEf"))

var concat2 = (a,b) =>  a.concat(b)
alert(concat2("abc","def"))

const sum1=(function()
{
    return function sum1(x,y,z)
    {
        const agrs=[x,y,z];
        return agrs.reduce((a,b) => a+b, 0);
    };
})();
alert(sum1(1,2,3))

const sum2=(function()
{
    return function sum2(...args)
    {
        return agrs.reduce((a,b) => a+b, 0);
    };
})();
alert(sum2(1,2,3))
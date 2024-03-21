var arr=[]
var i=0
while(i<5)
{
    arr.push((i+1)*10)
    i++
}
alert(arr)
i=4
do
{
    alert(arr[i])
}
while(i<2)

arr=[]
for(i=0;i<5;i++)
    arr.push((i+1)*10)
alert(arr)

arr=[]
for(i=0;i<10;i+=2)
    arr.push((i+1))
alert(arr)

arr=[]
for(i=0;i<10;i+=2)
    arr.push(i)
alert(arr)

arr=[]
for(i=10;i>0;i-=2)
    arr.push(i)

arr=[10,20,30,40,50]
var sum=0
for(i=0;i<arr.length;i++)
    sum+=arr[i]
alert(sum)

arr=[[10,20,30],[100,200],[1,2,3,4],1000]
var pro,j
for(sum=0,i=0;i<arr.length;i++)
{
    if(arr[i].length!=undefined)
    {
        for(pro=1,j=0;j<arr[i].length;j++)
            pro*=arr[i][j]
        alert(pro)
        sum+=pro
    }
    else
        sum+=arr[i]
}
alert(sum)
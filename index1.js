/*
var arr = [1, 2, 3, 4, 5, 6, 7];
for(a=0; a<arr.length; a++)
{
    if(a==2)
    {
        //break;
        continue;
    }
    else
    console.log(arr[a]);
}

arr.forEach(function(element)
{
    console.log(element);
})
var j=0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}


//var myDate=new Date();
//console.log(myDate);


//Arrow Functions
function summ(a,b)
{
    return a+b;
}
sum=(a,b)=>{
     return a+b;
}

logKaro=()=>{
    console.log("I am your log");
}
//SetTimeOut & SetInterval
setTimeout(logKaro, 2000);
*/

//JavaScript Local Storage

//Json
obj={name : "PG", length: 1}
js= JSON.stringify(obj);
//console.log(js);
parsed=JSON.parse(`{"name":"PG","length":1}`);
console.log(parsed);


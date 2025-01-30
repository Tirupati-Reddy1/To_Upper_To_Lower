let arr=["html","css","JAVASCRIPT","react","ANGULAR"];
let result=[];
for(i=0;i<arr.length;i++){
if(arr[i]===arr[i].toUpperCase()){
result.push(arr[i].toLowerCase())
}
else{
    result.push(arr[i].toUpperCase())
}
}
console.log(result)

var x = parseInt(readline());
var arr = readline().split(" ").map(Number);
arr.sort(function(a,b){return a - b});

var sum = arr[0];
var dis = 0;
 
for(var j = 1 ; j<x ; j++){
   if(sum>arr[j]){
       dis ++;
   }
   else{
       sum+=arr[j];
   }
} 

print(x-dis);
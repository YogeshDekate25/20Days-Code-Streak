var x = 0;
var y = 0;
var z = 0;

var ite = readline();
while(ite--){
    var arr = readline().split(" ").map(Number);
    x+=arr[0];
    y+=arr[1];
    z+=arr[2];
}
if(x===0 & y===0 & z===0){
    print("YES");
}
else{
    print("NO");
}
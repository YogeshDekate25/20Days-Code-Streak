var x = readline();
// x = parseInt(x);
var arr = [4,7,47,74,44,444,447,474,477,777,774,744];
var f = false;
for(var i=0 ; i<arr.length; i++){
    if(x%arr[i]===0){
        f=true;
    }
}
if(f===true){
    print("YES\n");

}else{
    print("NO\n");
}
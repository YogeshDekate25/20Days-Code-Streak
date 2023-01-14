var x= parseInt(readline());
for (var i= 0; i<x; i++){
    var s = readline();
    var t = readline();
    if (t=="a"){
        print(1);
        continue;
    }
    if (t.indexOf('a') != -1){
        print(-1);
        continue;
    }
    print(Math.pow(2,s.length));
}
var ite = readline();
while(ite--){
    var n = readline();
    var m = readline().split(" ").map(Number);
    var cone = 0;
    for(var i =0;i<n;i++){
        if(m[i]==1){
            cone+=1;
        }
    }
    var sp1= Math.floor(cone/2)+(cone%2);
    var sp2= n-cone;
    print(sp1+sp2);
}
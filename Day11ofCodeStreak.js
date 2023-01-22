var input = readline().split(' ');
var x = parseInt(input[0]) , t = parseInt(input[1]);
var y = readline().split("");

for (var j = 1; j<= t; j++){
    for(var i = 0;i < y.length; i++){
        if(y[i] === "B" && y[i+1] === "G"){
            y[i] = "G";
            y[i+1] = "B";
            i++;
        }
    }
}
print(y.join(''));
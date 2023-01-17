const x = readline().split(' ').map (x=> parseInt(x));
var m = x[0];
var n = x[1];
print(Math.min(m,n,Math.floor((m+n)/3)));
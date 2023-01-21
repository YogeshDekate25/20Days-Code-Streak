var vars = readline().split(' ').map(item => +item);
var min = vars[0] < vars[1] ? vars[0] : vars[1];
print(min % 2 > 0 ? 'Akshat' : 'Malvika');
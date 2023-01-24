x = readline().split(' ').map(Number);
var value;
mid = Math.ceil(x[0]/2);
if(x[1]>Math.ceil(x[0]/2))
{
   value = 2 *Math.abs(mid - x[1]);
} else{
    value = 2 * x[1]- 1 ;
}
print(value);
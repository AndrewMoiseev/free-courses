/* Task 3 */

/* Put your code here */

/*
Реализовать функцию расчета наибольшего общего делителя для чисел a и b.
На вход подается два числа a и b, разделенные пробелом. 1 <= a, b <= 10000

Пример
> node task.rb 10 8
> 2
*/
var a =  process.argv[1];
var b =  process.argv[2];
var nod = Math.min(a,b);

for(;nod>1;nod--)
{
	var adiv = a%nod;
	var bdiv = b%nod;
	if(((adiv+bdiv) == 0)) 	break;
}

process.stdout.write(nod.toString());
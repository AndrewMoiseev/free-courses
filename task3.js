/* Task 3 */

/* Put your code here */

/*
Реализовать функцию расчета наибольшего общего делителя для чисел a и b.
На вход подается два числа a и b, разделенные пробелом. 1 <= a, b <= 10000

Пример
> node task.rb 10 8
> 2
*/

function fnod(_a,_b)
{
	var nod = Math.min(_a,_b);

	for(;nod>1;nod--)
		{
			var adiv = _a%nod;
			var bdiv = _b%nod;
			if(((adiv+bdiv) == 0)) 	break;
		}
	return nod;
}
//GB
process.stdout.write(fnod(process.argv[1],process.argv[2]).toString());

//me
//process.stdout.write(fnod(process.argv[2],process.argv[3]).toString());

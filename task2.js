/* Task 2 */

/* Put your code here */

/*
Найти минимальное количество сдвигов массива a, после которых он будет равен массиву b.
Сдвиг можно осуществлять в любую сторону.
Вывести -1, если такой сдвиг не существует.
На вход подается две строки длины a и b. 1 <= a, b <= 10000

Пример
> node task.rb '1234' '2341'
> 1
*/

// for me
var strA =  process.argv[2];
var strB =  process.argv[3];
// for GB
//var strA =  process.argv[1];
//var strB =  process.argv[1];

var arrA = strA.split("");
var arrB = strB.split("");
var JsonB = JSON.stringify(arrB);
var shiftA = -1;
for(var i = 1; i <= strA.length; i++ )
{
	arrA = arrA.concat(arrA.shift());
	
	if(JSON.stringify(arrA) === JsonB) 
	{
		shiftA = ( i > strA.length/2 )?strA.length-i:i;
		break;
	}
}

process.stdout.write(shiftA.toString());
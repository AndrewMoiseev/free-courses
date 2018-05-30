/* Task 1 */

/* Put your code here */
/*
Реализовать функцию, исключающую из входного строки русские буквы Р, К и Н в любом регистре.
На вход подается строка длины n. 1 <= n <= 10000
*/
// for me
// process.argv[2];
// for GB
// process.argv[1];

function replaceStr(str)
{ 
	return str.replace(/[РКН]/gi,"")
};

process.stdout.write(replaceStr(process.argv[2]));
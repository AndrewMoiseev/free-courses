# Task 2

# Put your code here

#Найти минимальное количество сдвигов массива a, после которых он будет равен массиву b.
#Сдвиг можно осуществлять в любую сторону.
#Вывести -1, если такой сдвиг не существует.
#На вход подается две строки длины a и b. 1 <= a, b <= 10000


a = ARGV[0]
b = ARGV[1]

shift = -1
arr_a = a.split("")
arr_b = b.split("")

i = 1

begin
        arr_a << arr_a.shift
        if (arr_a == arr_b) then
                shift = i
        end
        i += 1
end until (shift > 0)||(i == arr_a.count)

if (shift > arr_a.count/2)
  shift =  arr_a.count - shift
end

puts shift

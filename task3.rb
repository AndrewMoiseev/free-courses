# Task 3

# Put your code here

#Реализовать функцию расчета наибольшего общего делителя для чисел a и b.
#На вход подается два числа a и b, разделенные пробелом. 1 <= a, b <= 10000

a = ARGV[0].to_i
b = ARGV[1].to_i

nod = [a,b].min

nod+=1
begin
  nod-=1
  adiv = a%nod
  bdiv = b%nod
end until ((adiv+bdiv) == 0)

puts nod


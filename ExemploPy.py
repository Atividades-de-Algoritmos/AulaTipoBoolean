#autores:
#  Islan Pereira de Oliveira

# Data: 03/09/2022

# Comprovando que o true é igual a 1

num1 = 5                           
num2 = 5

acumulador1 = (num1 == num2)      #Como são números iguais, serão true
acumulador2 = (acumulador1 + 0)

print(type (acumulador1))         #Tipo boolean
print(acumulador2)                #O true somado a 0 vai dar igual a ele mesmo, no caso 1
print(type (acumulador2))         #Tipo inteiro


# Comprovando que o false é igual a 0

numero1 = 5                           
numero2 = 6

receber1 = (numero1 == numero2)   #Como são números diferentes, serão false
receber2 = (receber1 + 0)

print(type (receber1))            #Tipo boolean
print(receber2)                   #O false somado a 0 vai dar igual a ele mesmo, no caso 0
print(type (receber2))            #Tipo inteiro
# Pure Function is a function (a block of code ) that always returns the same result if the same arguments are passed. 
# It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.
# Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

r = range(10) 
print(r[5])

def NumeroCuadrado(number):
    return number ** 2

def NumeroMitad(number):
    return number / 2

def ITBIS(number):
    return number * 0.18

def SumaNumeros(number):
    return number + r

# (i=0; i<10; i+=1)

#print(NumeroCuadrado(5))
#print(NumeroMitad(6))
#print(SumaNumeros(5))

#print(SumaNumeros(10))

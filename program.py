#1 Code to perform multiplication, division, addition, subtraction, and modulus of two numbers
num_1 = int(input("Enter number_1 : "))
num_2 = int(input("Enter number_2 : "))
method = str(input("Enter Method : ")) #available methods plus,minus,divide,multiple,modu

def calculater(num1, num2, method = "plus") :
    if method == "plus" :
        return num_1+num_2
    elif method == "minus" :
        return num_2 - num_1
    elif method == "divide" :
        return num_2 / num_1
    elif method == "multiple" :
        return num_1 * num_2
    elif method == "modu" :
        return num_1 % num_2

print("Code to perform multiplication, division, addition, subtraction, and modulus of two numbers : ", calculater(num_1, num_2, method))


#2 Validate the sides of the triangle and calculate the area if the triangle is possible

a = float(input("enter the first side of a triangle : "))
b = float(input("enter the 2nd side of a triangle : "))
c = float(input("enter the 3rd side of a triangle : "))

if (a + b > c) and (a + c > b) and (b + c > a):
    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) *  (s - c)) ** 0.5
    print('The area of the triangle is', area)

else:
    print("The triangle is not possible")

# Convert Celsius temperature to Fahrenheit
celsius = float(input("Enter the Celsius temperature: "))
fahrenheit = (celsius * 1.8) + 32
print('The temperature in Fahrenheit is:', Fahrenheit)

# Convert Fahrenheit temperature to Celsius
fahrenheit = float(input("Enter the Fahrenheit temperature: "))  # Taking input in Fahrenheit
celsius = (fahrenheit - 32) / 1.8  # Applying conversion formula
print(celsius)  # Printing the temperature in Celsius



# make code using break
for i in 'complete':
    if i == 'l':
        break
    print(I)
    
# make code using continue
for i in 'complete' :
    if i == 'l':
        continue
    print(i)


import sys

name = input("Введите ваше имя: ")
surname = input("Введите вашу фамилию: ")

while True:
    age = input("Введите ваш возраст: ")
    if not age.isdigit():
        print("Ошибка: значение возраста должно быть числом")
        continue
    break

document_type = input("Введите вид документа удостоверяющего личность: ")

filename = name + surname + ".txt"

with open(filename, "w", encoding="utf-8") as file:
    file.write("Имя: " + name + "\n")
    file.write("Фамилия: " + surname + "\n")
    file.write("Возраст: " + age + "\n")
    file.write("Документ: " + document_type + "\n")

print("Данные сохранены в файл", filename)
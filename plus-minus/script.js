var number1, number2, result, symbol;

number1=parseInt(prompt("Введите первое число: "));
number2=parseInt(prompt("Введите второе число: "));
symbol=prompt("Введите оператор +/-: ");

if (symbol=="+"){
    result=number1+number2;
    alert("Результат сложения равен: "+result);
}
else if (symbol=="-") {
    result=number1-number2;
    alert("Результат вычитания равен: "+result);
    }
else {
    alert("Введен неправильный оператор!");
}


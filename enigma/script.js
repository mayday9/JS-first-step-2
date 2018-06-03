var answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, counter=0, counter_right=0;

answer1=prompt("Какой язык мы изучаем?");
switch(answer1)
{
    case "javascript":
    case "JavaScript":
    case "javaScript":
    case "Javascript":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer2=prompt("Кто разработал прообраз JavaScript - LiveScript?");
switch(answer2)
{
    case "Netscape":
    case "NetScape":
    case "netScape":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer3=prompt("При помощи какого ключевого слова объявляются переменные?");
switch(answer3)
{
    case "var":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer4=prompt("Чувствительны ли имена переменных к регистру?");
switch(answer4)
{
    case "Да":
    case "да":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer5=prompt("Какой логический литерал означает 'истина'");
switch(answer5)
{
    case "true":
    case "truE":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer6=prompt("\"Какой логический литерал означает 'лож'");
switch(answer6)
{
    case "false":
    case "falsE":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer7=prompt("Какой метод используется для вывода простейшего диалогового окна?");
switch(answer7)
{
    case "alert":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer8=prompt("Как переводится слово 'if'?");
switch(answer8)
{
    case "Если":
    case "если":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer9=prompt("Как переводится слово 'else'?");
switch(answer9)
{
    case "то":
    case "То":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

answer10=prompt("Как называется многократное повторение некоторых операторов?");
switch(answer10)
{
    case "Цикл":
    case "цикл":
        alert("Правильно!");
        counter++;
        counter_right++;
        break;
    default:
        alert("Не правильно!");
        counter++;
}

alert("Вы ответили на "+counter+" вопросов.\n"+"Из них правильно на "+counter_right+" вопросов.");


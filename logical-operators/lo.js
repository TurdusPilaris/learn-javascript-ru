function getMessage() {
    // return age >= 14 && age <= 90;  hw1

   // return age < 14 || age > 90;  //hw2

   // Напишите код, который будет спрашивать логин с помощью prompt.
   //
   //     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
   //
   // Пароль проверять так:
   //
   //     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
   // Иначе – «Неверный пароль»,
   // При отмене или в случае если ничего не введено – «Отменено».

   let login = prompt("Введите логин");
   if(login==="Админ") {
      let password = prompt("Введите пароль");
      if(password===null || password==="") {
         return "Отменено";
      }else if (password==="Я главный"){
         return "Здравствуйте!";
      } else {
         return "Неверный пароль";
      }
   }
}

document.write(getMessage(), "<br>");
document.write(getMessage(), "<br>");
document.write(getMessage(), "<br>");
document.write(getMessage(), "<br>");

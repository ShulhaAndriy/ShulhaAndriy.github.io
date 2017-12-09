<?php




$fio = htmlspecialchars($_POST["fio"]);
$pass = htmlspecialchars($_POST["pass"]);
$email = htmlspecialchars($_POST["email"]);
$format = htmlspecialchars($_POST["format"]);
$delivery = htmlspecialchars($_POST["delivery"]);
$address = htmlspecialchars($_POST["address"]);
$site = htmlspecialchars($_POST["site"]);
$book = htmlspecialchars($_POST["book"]);


$v = mail("test@test.ru","Замовлення із сайту",
"На сайті зроблено замовлення. \nЗамовлення від: $fio
Пароль: $pass \nЕлектронна пошта: $email
Обрано формат диска: $format \nОбрано курси:
Курс по створенню сайта: $site \nКурс по створенню електронної книги: $book \n
Обрано тип доставки: $delivery \nАдреса: $address","Від кого: $email\r\n");

if ($v == true) {echo "Повідомлення доставлено";}

?>
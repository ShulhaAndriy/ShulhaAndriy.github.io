<?php




$fio = htmlspecialchars($_POST["fio"]);
$pass = htmlspecialchars($_POST["pass"]);
$email = htmlspecialchars($_POST["email"]);
$format = htmlspecialchars($_POST["format"]);
$delivery = htmlspecialchars($_POST["delivery"]);
$address = htmlspecialchars($_POST["address"]);
$site = htmlspecialchars($_POST["site"]);
$book = htmlspecialchars($_POST["book"]);


$v = mail("test@test.ru","���������� �� �����",
"�� ���� �������� ����������. \n���������� ��: $fio
������: $pass \n���������� �����: $email
������ ������ �����: $format \n������ �����:
���� �� ��������� �����: $site \n���� �� ��������� ���������� �����: $book \n
������ ��� ��������: $delivery \n������: $address","³� ����: $email\r\n");

if ($v == true) {echo "����������� ����������";}

?>
var number = Math.floor(10*Math.random()) + 1;
console.log(number);
var limit = 10;
var count = 9;

document.getElementById('check').onclick = function (){
	if (count>0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');
		var attempt = limit - count;

		if (usernum == number) {
			out.innerHTML = 'Ура, вы угадали!!! Справились за ' + attempt + ' раз (а)';
		}
		else if (usernum > number) {
			out.innerHTML = 'Ваше число больше';
		}
		else if (usernum<number){
			out.innerHTML = 'Ваше число меньше';
		}

		document.getElementById('count').innerHTML = 'Осталось попыток: '+count+' из '+limit;
		count = count - 1;
	}
	else {
		alert ('Попытки закончены, вы проиграли. Попробуйте еще. Загаданое число: ' + number);
		location.reload();
	}
}
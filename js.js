var number = Math.floor(100*Math.random()) + 1;
console.log(number);
var limit = 10;
var count = 9;

document.getElementById('check').onclick = function (){
	if (count>0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');
		var attempt = limit - count;
		
		if (isNaN(usernum)) {
			out.innerHTML = "Введіть число від 1 до 100";
		}
		else {
			if (usernum > 0 && usernum <= 100) {
				if (usernum == number) {
				out.innerHTML = 'Ура, ви вгадали!!! Справились за ' + attempt + ' раз (а)';
				check.disabled = true;
				}
				else if (usernum > number) {
				out.innerHTML = 'Перестарались. Введіть меньше число';
				}
				else if (usernum<number){
				out.innerHTML = 'Мало. Введіть більше число';
				}
				document.getElementById('count').innerHTML = 'Залишилось спроб: '+count+' із '+limit;
				count = count - 1;
			}
			else {
				out.innerHTML = 'Введіть число в межах від 1 до 100';
			}
		}	
	}
	else {
		alert ('Ви вичерпали ліміт спроб, ви проиграли. Спробуйте ще. Загадане число: ' + number);
		location.reload();
	}
}

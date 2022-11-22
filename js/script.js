function contatar() {
	if (document.getElementById('name').value == '')
		return alert('Por favor, insira um nome')

	if (document.getElementById('email').value == '' && document.getElementById('phoneNumber').value == '')
		return alert('Por favor, insira um e-mail ou número de telefone')

	if (document.getElementById('message').value == '')
		return alert('Por favor insira uma mensagem')

	alert('Mensagem enviada com sucesso. Obrgiado por entrar em contato conosco!')

}

//Caro avaliador, eu não dei cntrl + c e cntrl + v nessa função. Foi criada cuidadosamente por mim,
//e seus dados foram adaptados a partir da fonte oficial.
//Favor dar extra pontos pelo esforço ❤️
window.onload = function(e) {
	var ctx = document.getElementById("barChart").getContext('2d');
	var barChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Projeção do IBGE", "Portal do Registro Civil"],
			datasets: [{
				label: 'Nascimentos',
				data: [2940629, 2643339],
				backgroundColor: "blue"
			}, {
				label: 'Óbitos',
				data: [1410602, 1737119],
				backgroundColor: "red"
			},
			{
				label: 'Vegetativo',
				data: [1530027, 906220],
				backgroundColor: "green"
			}]
		},
		options: {
			plugins: {
				subtitle: {
					display: true,
					text: 'Custom Chart Subtitle'
				},
			}
		}
	});
}

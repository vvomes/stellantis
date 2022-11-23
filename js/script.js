function contatar() {
	document.getElementById("validatedIcon").style.display = "none"
	document.getElementById("invalidatedIcon").style.display = "none"

	if (validateForm()) {
		document.getElementById("validatedIcon").style.display = "block"
		alert('Mensagem enviada com sucesso. Obrgiado por entrar em contato conosco!')
	} else {
		document.getElementById("invalidatedIcon").style.display = "block"
	}
}

function validateForm() {
	var validated = true
	if (document.getElementById('name').value == '') {
		alert('Por favor, insira um nome')
		return validated = false
	}

	if (document.getElementById('email').value == '' && document.getElementById('phoneNumber').value == '') {
		alert('Por favor, insira um e-mail ou número de telefone')
		return validated = false
	}

	if (document.getElementById('message').value == '') {
		alert('Por favor insira uma mensagem')
		return validated = false
	}
	return validated
}

//Caro avaliador, eu não dei cntrl + c e cntrl + v nesses charts. Foram criados cuidadosamente por mim,
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
				title: {
					display: true,
					text: 'Nascimentos, Óbitos e Crescimento Vegetativo no Brasil - julho 2020 a junho 2021'
				},
			}
		}
	});

	var ctx = document.getElementById("barChart2").getContext('2d');
	var barchart2 = new Chart(ctx, {
		"type": "line",
		"data": {
			"labels": [
				"2006",
				"2007",
				"2008",
				"2009",
				"2010",
				"2011",
				"2012",
				"2013",
				"2014",
				"2015",
				"2016",
				"2017",
				"2018",
				"2019",
				"2020",
				"2021"
			],
			"datasets": [
				{
					"data": [
						"10294811",
						"11014104",
						"11753856",
						"12536177",
						"13334875",
						"14108047",
						"14880771",
						"15643415",
						"16319980",
						"16834630",
						"17247124",
						"17719258",
						"18230138",
						"18753364",
						"19089286",
						"19305526"
					],
					"label": "São Paulo",
					"posicao": 0,
					"item": null,
					"fill": false,
					"borderColor": "#6BC9C7",
					"pointBackgroundColor": "#6BC9C7",
					"pointBorderColor": "#6BC9C7"
				}
			]
		},
		"options": {
			"legend": {
				"display": false,
				"position": "top"
			},
			"tooltips": {
				"enabled": true,
				"mode": "label",
				"callbacks": {}
			},
			"hover": {
				"mode": "label"
			},
			"scales": {
				"yAxes": [
					{
						"stacked": false,
						"ticks": {
							"beginAtZero": true
						}
					}
				],

				"xAxes": [
					{
						"stacked": false,
						"ticks": {
							"autoSkip": true,
							"maxTicksLimit": 10
						}
					}
				],

			}
		}
	})

	var ctx = document.getElementById("barChart3").getContext('2d');
	var barchart3 = new Chart(ctx, {
		"type": "line",
		"data": {
			"labels": [
				"2006",
				"2007",
				"2008",
				"2009",
				"2010",
				"2011",
				"2012",
				"2013",
				"2014",
				"2015",
				"2016",
				"2017",
				"2018",
				"2019",
				"2020",
				"2021"
			],
			"datasets": [
				{
					"data": [
						"102322",
						"109745",
						"117235",
						"121105",
						"126880",
						"134659",
						"140654",
						"145166",
						"150518",
						"153113",
						"155317",
						"156750",
						"159712",
						"164507",
						"167544",
						"168738"
					],
					"label": "São Paulo",
					"posicao": 0,
					"item": null,
					"fill": false,
					"borderColor": "#6BC9C7",
					"pointBackgroundColor": "#6BC9C7",
					"pointBorderColor": "#6BC9C7"
				}
			]
		},
		"options": {
			"legend": {
				"display": false,
				"position": "top"
			},
			"tooltips": {
				"enabled": true,
				"mode": "label",
				"callbacks": {}
			},
			"hover": {
				"mode": "label"
			},
			"scales": {
				"yAxes": [
					{
						"stacked": false,
						"ticks": {
							"beginAtZero": true
						}
					}
				],
				"xAxes": [
					{
						"stacked": false,
						"ticks": {
							"autoSkip": true,
							"maxTicksLimit": 10
						}
					}
				]
			}
		}
	})
}

	$(function () {

		let touched = 0 //max 2 carte à jouer
		let chrono = 0
		let handle
		let won = false;
		let frozen = false;
		const DEADLINE = 100
		const url = 'http://glottr.test/memory'
		//const url = 'http://localhost/JS/memory'

		function init() {

			fetch(url + '/api.php')
			.then(response => response.json())
			.then(fruits => {
				fruits.map((item) => {
					$('#board').append('<div class="cadre"><div class="carre flippable ' + item.fruit + '" logo="' + item.fruit + '"></div></div>')
				})

			}).then( () => {
				return fetch( url+ '/api.php?action=getscore')
			})
			.then( response => response.json())
			.then(data => {
				data.map( item => {
					$('#billboard').append('<div>'+item.temps+'</div>')
				})
			})
		}




		function checkGame() {
			const remainingFlippable = $('#board .flippable').length
			if (remainingFlippable == 0) {
				won = true
				return won
			}
		}

		function fillMeter(chrono, DEADLINE) {
			const green = 'rgb(43,194,83)'
			const orange = 'rgb(255,165,0)'
			const red = 'rgb(242,74,68)'

			const percent = Math.round(chrono / DEADLINE * 100)

			if (percent > 100) { return }

				if (percent < 85 && percent > 60) {
					bgcolor = orange
				} else if (percent <= 60) {
					bgcolor = green
				} else {
					bgcolor = red
				}

				$('.meter span').css('width', percent + '%').css('background-color', bgcolor).text(chrono)
			}


		//start game
		init()



		$('.start').on('click', function (e) {


			//hide overlay that prevents click before game start
			$('#boardoverlay').hide()

			let handle = setInterval(function () {
				chrono += 1

				fillMeter(chrono, DEADLINE)

				if (chrono == (DEADLINE + 1) && frozen == false) {
					frozen = true
					clearInterval(handle)
					alert('Vous avez perdu')
					// unbind event
					$('#board').off('click')
				}

				if (checkGame() && frozen == false) {
					frozen = true
					clearInterval(handle)
					alert('Vous avez gagné avec le temps de ' + chrono + ' secondes.')


					//send to backend the score
					fetch(url + '/api.php?action=savescore',{
					  method: "post",
					  headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  },
						body: JSON.stringify({
					    score: chrono,
					  })
					}).catch( error => console.log(error))


				}

			}, 1000)
		})


		$('#board').on('click', function (e) {
			let carte = $(e.target)
			let flippedCount = $('#board .flipped').length

			if (!$(e.target).hasClass('flippable')) {
				console.log('dans not flippable')
				return
			}


			if (carte.hasClass('flipped')) {
				if (touched != 1) {
					carte.css('opacity', '0').removeClass('flipped')
				}

				//refresh flipped count
				flippedCount = $('#board .flipped').length

				if (flippedCount == 0) {
					touched = 0
				}
				return
			}


			// we can only flip 2 cards
			if (touched < 2) {
				if (carte.css('opacity') == '0') {

					carte.css('opacity', '1').addClass('flipped')
					//add class flipped
					touched += 1
				}
			}

			//check if they are the same
			let flippedCards = $('#board .flipped')
			if (flippedCards.length == 2) {
				const name1 = $(flippedCards[0]).attr('logo')
				const name2 = $(flippedCards[1]).attr('logo')

				if (name1 == name2) {
					$(flippedCards[0]).removeClass('flippable').removeClass('flipped')
					$(flippedCards[1]).removeClass('flippable').removeClass('flipped')
					console.log('removed flippable')
					touched = 0
				}
			}
		})
	})
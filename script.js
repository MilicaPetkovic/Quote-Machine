


$(document).ready(function() {

	var quote;
	var author;

	function getNewQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/?",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#text").text('"' + quote + '"');

				if(author) {
					$("#author").text(author);
				} else {
					$("#author").text("- unknown");
				}
			
			}
		});
	}
	getNewQuote();

	$("#new").on("click", function(event) {
		event.preventDefault();
		getNewQuote();
	});

	$("#tweet").on("click", function(event) {
		event.preventDefault();
		window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " -- " + author));
	});

});


// var quotes = [
// 	"All that we see or seem is but a dream within a dream.-Edgar Allan Poe",
// 	"Independence is happiness.-Susan B. Anthony",
// 	"The only true wisdom is in knowing you know nothing.-Socrates",
// 	"Try to be a rainbow in someone's cloud.-Maya Angelou",
// 	"It is during our darkest moments that we must focus to see the light.-Aristotle",
// 	"This too, shall pass.-anonymous",
// 	"There isn't a way things should be. There's just what happens, and what we do.-Terry Pratchett",
// 	"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more so that we may fear less.-Marie Curie",
// 	"There are no facts, only interpretations.-Friedrich Nietzsche"
// ]

// function newQuote() {
// 	var randomQuote = Math.floor(Math.random() * (quotes.length));
// 	document.getElementById("quote").innerHTML = quotes[randomQuote];
// }


// var button = document.getElementById("next");

// button.addEventListener("click", function() {
// 	var randomQuote = Math.floor(Math.random() * (quotes.length));
// 	document.getElementById("quote").innerHTML = quotes[randomQuote];
// });

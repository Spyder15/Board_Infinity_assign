window.onload = function() {
    var greeting = document.getElementById("greeting");
    var quoteDiv = document.getElementById("quoteDiv");
    var generateButton = document.getElementById("generateButton");

  
    var quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The future depends on what you do today.", author: "Mahatma Gandhi" }
    ];

  
    var colors = [
        "#FFA07A", "#FFC0CB", "#FFFFE0", "#ADD8E6", "#90EE90",
        "#FFD700", "#BA55D3", "#87CEFA", "#FFB6C1", "#98FB98"
    ];

  
    function generateQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = quotes[randomIndex];
        quoteDiv.innerHTML = randomQuote.text + "<br>- " + randomQuote.author;

        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        quoteDiv.style.color = randomColor;
        generateButton.style.backgroundColor = randomColor;
    }

  
    function getTimeOfDay() {
        var date = new Date();
        var hour = date.getHours();

        if (hour >= 5 && hour < 12) {
            return "morning";
        } else if (hour >= 12 && hour < 18) {
            return "afternoon";
        } else if (hour >= 18 && hour <= 23) {
            return "evening";
        } else {
            return "night";
        }
    }

  
    generateButton.onclick = function() {
        generateQuote();
    };

  
    greeting.innerHTML = "Let's start our " + getTimeOfDay() + " with a new quote";

  
    generateQuote();
};

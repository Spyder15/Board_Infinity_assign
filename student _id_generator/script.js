window.onload = function() {
    var form = document.getElementById("id-card-form");
    var cardContainer = document.getElementById("card-container");
    var cardImage = document.getElementById("card-image");
    var cardDetails = document.getElementById("card-details");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        generateIDCard();
    });

    function generateIDCard() {
        var name = document.getElementById("name").value;
        var college = document.getElementById("college").value;
        var location = document.getElementById("location").value;
        var image = document.getElementById("image").files[0];

        var reader = new FileReader();
        reader.onload = function() {
            cardImage.src = reader.result;
        }
        reader.readAsDataURL(image);

        cardDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>College:</strong> ${college}</p>
            <p><strong>Location:</strong> ${location}</p>
        `;

        cardContainer.style.display = "block";
    }
};

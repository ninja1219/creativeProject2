// Random Fun Facts: https://asli-fun-fact-api.herokuapp.com/

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let value = document.getElementById("factNum").value;
    if (value === "")  {
        value = 1;
    }
    console.log(value);

    const url = "https://asli-fun-fact-api.herokuapp.com";
    document.getElementById("facts").innerHTML = "";
    for (let i = 0; i < value; i++) {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log(json);
                let results = "<div class='fact'>";
                results += "<h2> Fact #" + json.data.id + "</h2>";
                results += "<p><strong>Category:</strong> " + json.data.cat + "</p>";
                results += "<p>" + json.data.fact + "</p></div>";
                document.getElementById("facts").innerHTML += results;
            });
    }
});

// Categories: tech, life, human, sea, space, nature, history, food, auto
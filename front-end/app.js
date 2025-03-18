document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/")
        .then(response => response.json())
        .then(data => {
            document.getElementById("backend-message").innerText = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
});

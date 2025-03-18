document.addEventListener("DOMContentLoaded", function () {
    fetch("env.js")
        .then(response => response.text())
        .then(data => {
            eval(data); // Inject window.BACKEND_URL
            fetch(`${window.BACKEND_URL}/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("backend-message").innerText = data.message;
                })
                .catch(error => console.error("Error fetching data:", error));
        })
        .catch(error => console.error("Error loading env.js:", error));
});

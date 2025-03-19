document.addEventListener("DOMContentLoaded", function () {
    const BACKEND_URL = "http://YOUR_PUBLIC_IP:5000"; // Replace with your actual public IP

    fetch(`${BACKEND_URL}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("backend-message").innerText = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
});

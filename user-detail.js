document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById("user-detail").innerHTML = `
                <h2>${user.name}</h2>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            `;
        })
        .catch(error => console.error("Error fetching user details:", error));
});

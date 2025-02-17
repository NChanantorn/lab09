document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById("user-list");
            users.forEach(user => {
                const div = document.createElement("div");
                div.innerHTML = `<p><a href="user-detail.html?id=${user.id}">${user.name}</a></p>`;
                userList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById("user-list");
            users.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user-item");

                div.innerHTML = `
                    <a href="user-detail.html?id=${user.id}">
                        <span class="user-name">${user.name}</span>
                        <span class="user-email">${user.email}</span>
                    </a>
                `;

                userList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});

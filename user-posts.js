document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById("posts-list");
            posts.forEach(post => {
                const div = document.createElement("div");
                div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});

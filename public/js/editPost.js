//event listener to update the title and body in post table after user clicks on edit
document.getElementById("editPost").addEventListener("click", async (event) => {
  event.preventDefault();

  const post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };

  const res = await fetch(`/api/posts/${event.target.dataset.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  location.reload();
});

//event listener to delete the post from post table after user clicks on delete button
document
  .getElementById("deletePost")
  .addEventListener("click", async (event) => {
    await fetch(`/api/posts/${event.target.dataset.id}`, {
      method: "DELETE",
    });

    document.location.replace("/");
  });

//event listener to bring back user to post page when they click on return button
document.getElementById("return").addEventListener("click", () => {
  document.location.replace("/");
});
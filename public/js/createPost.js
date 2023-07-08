//event listener to bring user to homepage when they click on logout button
document.getElementById("logOutUser").addEventListener("click", async () => {
  await fetch(`/api/users/logout`, {
    method: "POST",
  });

  document.location.replace("/auth");
});

//event listener to save title and body post when use saves it and reload the page to be able to view it
document.getElementById("createPost").addEventListener("click", async () => {
  const post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };

  await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  location.reload();
});

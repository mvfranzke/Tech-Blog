//event listener to verify user login and route them to post page
document.getElementById("loginUser").addEventListener("click", async (event) => {
    const user = {
      username: document.getElementById("lUsername").value,
      password: document.getElementById("lPassword").value,
    };

    await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.replace("/");
  });

//event listener to save user new login credentials
document.getElementById("registerUser").addEventListener("click", async (event) => {
    const user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.replace("/");
  });
 
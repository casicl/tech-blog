const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("clicked")
    const username = document.querySelector("#signup-name").value.trim();
    const useremail = document.querySelector("#signup-email").value.trim();
    const userpassword = document.querySelector("#create-password").value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name: username, email: useremail, password: userpassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
       if (response.ok) {
         document.location.replace('/');
       } else {
         alert(response.statusText);
       }
    }
  };
  document
  .querySelector("#signup")
  .addEventListener('click', signupFormHandler);
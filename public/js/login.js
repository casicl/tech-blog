const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // login form values
    const userEmail = document.querySelector("#email").value.trim();
    const userPass = document.querySelector("#password").value.trim();
  
    if (userEmail && userPass) {
      console.log("hello")
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email: userEmail, password: userPass }),
        headers: { 'Content-Type': 'application/json' },
      });
  
       if (response.ok) {
        console.log(response, "login response")
         document.location.replace('/');
       } else {
         alert(response.statusText);
       }
    }
  };
  

  
  document
    .querySelector(".login-form")
    .addEventListener('submit', loginFormHandler);
  

  
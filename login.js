
    
      function validationForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
      
        if (username.length <= 4 || password.length <= 8) {
          alert('Username should be greater than 4 characters and password should be greater than 8 characters.');
          return false;
        }
      
        if (username.trim() === '' || password.trim() === '') {
          alert('Username and password cannot be empty.');
          return false;
        }
      
        return true;
      }
       
  
function email_Fun() {
      let x = document.getElementById("Email").value;
      document.getElementById("email_catch").value = x;
    }

    function password_Fun() {
      let x = document.getElementById("password").value;
      document.getElementById("password_catch").value = x;
    }

    const showHide = function(){
      //document.getElementById("password_catch").setAttribute('type','text');

      let y = document.getElementById("password_catch");

      if(y.type==='password'){
            y.type= 'text';
      }else{
            y.type='password';
      }
    }
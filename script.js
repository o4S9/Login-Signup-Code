let login = document.getElementById("loginform");
        let signup = document.getElementById("signup");
        let btns = document.getElementById("s");
        let btnl = document.getElementById("l");
        let email = document.getElementById("Email");
        let pass = document.getElementById("password");

        function submit(){
                
        }


        function Login() {
            login.style.display = "block";
            signup.style.display = "none";
            btns.style.display = "none";
            btnl.style.display = "block";
            btnl.style.margin = "20px 180px"

            // btnl.style.textAlign = "center"


        }
        function SignUp() {
            login.style.display = "none";
            signup.style.display = "block";
            btnl.style.display = "none";
            btns.style.display = "block";
            btns.style.margin = "20px 160px"
            // btns.style.textAlign = "center"


        }
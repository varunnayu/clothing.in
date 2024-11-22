const createNav = () => {
    
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <!-- ====== Header ====== -->
    <header class="header">
        <!-- ====== Navigation ====== -->
        <nav class="navbar">
          <div class="row container d-flex">
            <div class="logo">
              <img src="./images/logo.svg" alt="" />
            </div>
  
            <div class="nav-list d-flex">
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">Pages</a>
              <a href="">About Us</a>
              <a href="">Lookups</a>
              <div class="close">
                <i class="bx bx-x"></i>
              </div>
              <a class="user-link">Login</a>
            </div>
  
            <div class="icons d-flex">
              <div class="icon d-flex"><i class="bx bx-search"></i></div>
              <div class="icon user-icon d-flex">
                <i class="bx bx-user"></i>
              </div>
              <div class="icon d-flex">
                <i class="bx bx-bell"></i>
                <span></span>
              </div>
            </div>
          <!-- Hamburger -->
          <div class="hamburger">
            <i class="bx bx-menu-alt-right"></i>
          </div>
        </div>
      </nav>
    </header>
    <!-- ====== Login and Signup Form ====== -->
    <div class="user-form">
        <div class="close-form d-flex"><i class="bx bx-x"></i></div>
        <div class="form-wrapper container">
          <div class="user login">
            <div class="img-box">
              <img src="./images/login.svg" alt="" />
            </div>
            <div class="form-box">
              <div class="top">
                <p>
                  Not a member?
                  <span data-id="#ff0066">Register now</span>
                </p>
              </div>
              <form action="">
                <div class="form-control">
                  <h2>Hello Again!</h2>
                  <p>Welcome back you've been missed.</p>
                  <input type="text" placeholder="Enter Username" />
                  <div>
                    <input type="password" placeholder="Password" />
                    <div class="icon form-icon">
                      <!-- <img src="./images/eye.svg" alt="" /> -->
                    </div>
                  </div>
                  <span>Recovery Password</span>
                  <input type="Submit" value="Login" />
                </div>
                <div class="form-control">
                  <p>Or continue with</p>
                  <div class="icons">
                    <div class="icon">
                      <img src="./images/search.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/apple.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/facebook.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/github.svg" alt="" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
          <!-- Register -->
          <div class="user signup">
            <div class="form-box">
              <div class="top">
                <p>
                  Already a member?
                  <span data-id="#1a1aff">Login now</span>
                </p>
              </div>
              <form action="">
                <div class="form-control">
                  <h2>Welcome Codevo!</h2>
                  <p>It's good to have you.</p>
                  <input type="email" placeholder="Enter Email" />
                  <div>
                    <input type="password" placeholder="Password" />
                    <div class="icon form-icon">
                      <img src="./images/eye.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <input type="password" placeholder="Confirm Password" />
                    <div class="icon form-icon">
                      <img src="./images/eye.svg" alt="" />
                    </div>
                  </div>
                  <input type="Submit" value="Register" />
                </div>
                <div class="form-control">
                  <p>Or continue with</p>
                  <div class="icons">
                    <div class="icon">
                      <img src="./images/search.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/apple.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/facebook.svg" alt="" />
                    </div>
                    <div class="icon">
                      <img src="./images/github.svg" alt="" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="img-box">
              <img src="./images/trial.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

    `;
}

createNav();
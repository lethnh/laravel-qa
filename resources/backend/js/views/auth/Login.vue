<template>
  <div class="page vertical-align text-center">
    <div class="page-content vertical-align-middle animation-slide-top animation-duration-1">
      <div class="panel">
        <div class="panel-body">
          <div class="brand">
            <!-- <img class="brand-img" src="../../assets//images/logo-colored.png" alt="..." /> -->
            <h2 class="brand-text font-size-18">Remark</h2>
          </div>
          <form method="post" action="#">
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="email" class="form-control empty" name="email" />
              <label class="floating-label">Email</label>
            </div>
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input type="password" class="form-control empty" name="password" />
              <label class="floating-label">Password</label>
            </div>
            <div class="form-group clearfix">
              <div class="checkbox-custom checkbox-inline checkbox-primary checkbox-lg float-left">
                <input type="checkbox" id="inputCheckbox" name="remember" />
                <label for="inputCheckbox">Remember me</label>
              </div>
              <a class="float-right" href="forgot-password.html">Forgot password?</a>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg mt-40">Sign in</button>
          </form>
          <p>
            Still no account? Please go to
            <a href="register-v3.html">Sign up</a>
          </p>
        </div>
      </div>

      <footer class="page-copyright page-copyright-inverse">
        <p>WEBSITE BY Creation Studio</p>
        <p>© 2018. All RIGHT RESERVED.</p>
        <div class="social">
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-twitter" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-facebook" aria-hidden="true"></i>
          </a>
          <a class="btn btn-icon btn-pure" href="javascript:void(0)">
            <i class="icon bd-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.page-content {
  padding: 30px 30px;
}
.page-login-v3:before {
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-position: center top;
  background-size: cover;
  z-index: -1;
  background: #3e8ef7;
  /* Old browsers */
  /* IE9 SVG, needs conditional override of 'filter' to 'none' */
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYyYThlYSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNTcxYjEiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  background-image: linear-gradient(to bottom, #3e8ef7 0%, #0b69e3 100%);
  background-repeat: repeat-x;
}

.page-login-v3 .panel {
  width: 400px;
  margin-bottom: 45px;
  background: #fff;
  border-radius: 0.286rem;
}

.page-login-v3 .panel .panel-body {
  padding: 50px 40px 40px;
}

.page-login-v3 .panel .brand-text {
  margin-top: 8px;
}

.page-login-v3 form {
  margin: 45px 0 30px;
}

.page-login-v3 form a {
  margin-left: 20px;
}

.page-login-v3
  form
  .form-material.floating
  + .page-login-v3
  form
  .form-material.floating {
  margin-top: 30px;
}

.page-login-v3 form .form-material label {
  color: #a3afb7;
  font-weight: 300;
}
.vertical-align-middle {
  vertical-align: middle;
}
@media (max-width: 479.98px) {
  .page-login-v3 .page-content {
    padding: 30px 20px;
  }
  .page-login-v3 .panel {
    width: auto;
    padding: 10px;
  }
  .page-login-v3 .panel .panel-body {
    padding: 35px 25px 35px;
  }
  .vertical-align {
    font-size: 0;
  }
}
</style>

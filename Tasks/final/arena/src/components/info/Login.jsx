const React = require("react");

const Login = () => {
    

    return <>
        

    <div className="container">
        <div className="form-box">
             <div class="login">
    <div class="login-screen">
      <div class="app-title">
        <h1>Login</h1>
      </div>

      <div class="login-form">
        <div class="control-group">
        <input type="text" class="login-field" value="" placeholder="username" id="login-name"/>
        <label class="login-field-icon fui-user" for="login-name"></label>
        </div>

        <div class="control-group">
        <input type="password" class="login-field" value="" placeholder="password" id="login-pass"/>
        <label class="login-field-icon fui-lock" for="login-pass"></label>
        </div>

        <a class="btn-form btn-primary btn-large btn-block" href="#">login</a>
        <a class="login-link" href="#">Lost your password?</a>
      </div>
    </div>
  </div>
        </div>
        

    </div>
        
    </>
}

module.exports = Login;
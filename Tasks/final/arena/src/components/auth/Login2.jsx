import React, { useState } from "react";

const Login2 = () => {
  const user = useSelector(selectUser);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }


  const formSubmit = () => {
    setUsernameError("");
    setPasswordError("");
    let isValid = true;
    if (username.trim() === "") {
      setUsernameError("Обязательное поле");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Обязательное поле");
      isValid = false;
    }


    if (isValid) {

      const config = {
        method: 'POST',
        data: {
          username, password
        }
      }
      axios('/users/login', config)
        .then(res => {
          dispatch(login(res.data))
          setRole(res.data.role)
          if (res.data.role === 'employer') {
            navigate('/personalEmployer');
          } else {
            navigate('/personal');
          }
        })
        .catch(reason => alert(`Error: ${reason}`))
    }
  }
  return (
    <>
      <div className="wrap">
        <div className="container-login">
          <div className="login-form">
            <Text
              className="title"
            >
              Вход
            </Text>
            <div className="login">
              <div className="username">
                <input type="text" placeholder="Логин" onChange={onUsernameChange} value={username} className="" />
                

              </div>
              <hr />
              {usernameError && <div className="error">{usernameError}</div>}
              <div className="password">
                <input type="password" placeholder="Пароль" onChange={onPasswordChange} value={password} className="" />

              </div>
              <hr />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
          </div>
          <button onClick={formSubmit} className="login-btn">Войти</button>
          <Link to={'../main'} className="back">На главную</Link>

        </div>
      </div>
    </>
  );
};

export default Login2;
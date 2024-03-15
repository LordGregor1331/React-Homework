import React, {useState, useEffect} from "react"
import "./App.css"
import Carousel from "./components/Carousel"
import Pagination from "./components/Paginations"
import MovieList from "./components/MovieList"

const RangeInput = ({min, max, ...props}) => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const invalid = text.length < min || text.length > max
  const inputStyle = invalid ? { borderColor: 'red' } : {}
  return (
    <input
      {...props}
      style={inputStyle}
      value={text}
      onChange={handleChange}/>
  )
}
                  
const Spoiler = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
      <div>
          <button onClick={() => setOpen(!open)}>Show/Hide</button>
          {open && children}
      </div>
  )
}

function LoginForm({ onLogin}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const canSubmit = login.length > 0 && password.length > 0
  const handleSubmit = (e) => {
    onLogin(login, password)
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <input
        id="login"
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" disabled={!canSubmit}>Login</button>
      </div>
    </form>
  )
}

//логинформа с валидным паролем
function LoginFormWithValidationPassword({ onLogin }) { 
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const hasNumber = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
        return true;
      }
    }
    return false
  }
  const hasUpperCase = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        return true
      }
    }
    return false
  }
  const validatePassword = () => {
    if (!hasNumber(password) || !hasUpperCase(password)) {
      setPasswordError('Password must contain at least one digit and one uppercase letter')
      return false
    }
    setPasswordError('')
    return true
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      onLogin(login, password)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login:</label>
        <input
          id="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

function App(){
  return (
    <div className="Spoiler">
      <Spoiler>
        <RangeInput min={2} max={10} type="text" className="custom-input"/>
      </Spoiler>
      <div className="Form">
        <LoginForm/>
      </div>
      <div className="Form">
        <LoginFormWithValidationPassword/>
      </div>
      <div className="Carousel-Container">
        <Carousel
        images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]}/>
      </div>
      <div className="PaginationContainer">
      <Pagination max={10} render={MovieList}/>
      </div>
    </div>
  )
}

export default App;

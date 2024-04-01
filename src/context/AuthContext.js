import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // const navigate = useNavigate();
    const storageAuth = localStorage.getItem('auth');
    
  const [auth, setAuth] = useState(storageAuth);
  
//   setAuth(JSON.parse(storageAuth));


//   return <Navigate to="/dashboard" />;

  const handleSinup = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const key = data.get("email");

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    localStorage.getItem(key)
      ? alert("Opps!!! Already Regitered")
      : add();

    function add() {
      localStorage.setItem(key, JSON.stringify(userData));
      alert("success");
      localStorage.setItem('auth', true);
      setAuth(true);
      window.location.href ="/" ;
    // return navigate('./');
      
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const key = data.get("email");
    const LoginData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const getData = JSON.parse(localStorage.getItem(key));
    console.log(getData.password);
    getData && (getData.password === LoginData.password) ? add() : alert('Invalid Creadential');
    function add(){
        alert('Succefully Login');
        localStorage.setItem('auth', true);
        setAuth(true);
        window.location.href ="/" ;
        // return navigate('./');
    }
  };

  const handleLogout = ()=>{
    setAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleSinup,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

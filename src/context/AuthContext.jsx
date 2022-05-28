import React, { createContext, Component} from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
    email: '',
    password: '',
    isLoggedIn: false,
    isLoading: false,
  }

  render() { 
    return ();
  }
}
 
export default AuthContextProvider;
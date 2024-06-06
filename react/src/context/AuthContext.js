import { createContext, useReducer } from 'react';
import axios from 'axios';


const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
  });

  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

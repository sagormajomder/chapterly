import { createContext, use, useState } from 'react';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
}

function useAuth() {
  const context = use(AuthContext);
  if (context === null)
    throw new Error('AuthContext was used outside of Auth Provicer.');
  return context;
}

export { AuthProvider, useAuth };

import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export function useAuth() {
  //hook para leer el contexto
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

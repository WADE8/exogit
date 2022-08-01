import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { login } from '../reducers/auth';

export const loginAction = (email, password) => {
  return async (dispactch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispactch(login());
    } catch (err) {
      console.log(err.code);
    }
  };
};

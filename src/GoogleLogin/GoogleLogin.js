import './GoogleLogin.css'
import app from '../FirebaseForGoogle/Firebase'
import { getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth';



const auth = getAuth(app)


const GoogleLogin = () => {
  
    const provider = new GoogleAuthProvider ();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
           
            const user = result.user;
            console.log(user)
          })
    }
   

    return (
        <div>
            <button  className='btn btn-primary' onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default GoogleLogin;
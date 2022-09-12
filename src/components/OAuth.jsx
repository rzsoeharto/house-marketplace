import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import { db } from "../firebase.config";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //   Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(
          doc(db, "users", user.uid, {
            name: user.displayName,
            email: user.email,
          })
        );
      }
    } catch (error) {}
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;

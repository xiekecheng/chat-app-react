import React from 'react'
import GoogleButton from "react-google-button";
import { auth } from "../firebase.js";
import { GoogleAuthProvider ,signInWithRedirect} from "firebase/auth";
const SignIn = () => {

	// 登录
	const onLogin = ()=>{
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	}
	return (
		<div>
			<GoogleButton onClick={onLogin}/>
		</div>
	)
}

export default SignIn
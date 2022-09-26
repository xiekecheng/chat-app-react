import React from 'react';
import { auth } from '../firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';
const style = {
	nav: 'bg-gray-800 h-20 flex justify-between items-center p-4',
};
const NavBar = () => {
	const [user, loading, error] = useAuthState(auth);
	return (
		<nav className={style.nav}>
			<h1 className='text-3xl text-white'>Chat App</h1>
			{user ? <SignOut /> : <SignIn />}
		</nav>
	);
};

export default NavBar;

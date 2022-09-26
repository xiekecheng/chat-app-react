import React from 'react';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';

const SignOut = () => {
	const onLogout = () => {
		signOut(auth);
	};
	return (
		<button
			onClick={onLogout}
			className='bg-gray-100 hover:bg-gray-300 px-4 py-2'
		>
			SignOut
		</button>
	);
};

export default SignOut;

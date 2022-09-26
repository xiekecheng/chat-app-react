import React, { useRef } from 'react';

const Chat = () => {
	const scroll = useRef();
	return (
		<>
			<main className='flex flex-col p-[12px] relative'></main>
			<span ref={scroll}></span>
		</>
	);
};

export default Chat;

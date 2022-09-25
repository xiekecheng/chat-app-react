const style = {
	appContainer: 'max-w-[728px] mx-auto text-center',
	sectionContainer:
		'flex flex-col h-[90vh] mt-10 bg-gray-100 shadow-xl border relative',
};
function App() {
	return (
		<div className={style.appContainer}>
			<section className={style.sectionContainer}></section>
		</div>
	);
}

export default App;

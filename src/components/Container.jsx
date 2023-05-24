function Container({ children }) {
	return (
		<div className="flex flex-col shadow-xl w-[500px] p-6 rounded-lg gap-8 mx-auto my-20">
			{children}
		</div>
	);
}

export default Container;

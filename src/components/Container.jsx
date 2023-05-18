function Container({ children }) {
	return (
		<div className="flex flex-col shadow-lg w-[500px] p-6 rounded-lg gap-8">
			{children}
		</div>
	);
}

export default Container;

function Response({ title, result }) {
	return (
		<section className="flex gap-2 flex-col">
			<p className="text-left text-[#66ca60] text-lg font-bold">{title}:</p>
			<code className="border-2 border-[#cc932c] w-full h-[300px] overflow-y-scroll p-2 rounded-md text-[#66ca60]">
				<pre>{result && JSON.stringify(result, null, 2)}</pre>
			</code>
		</section>
	);
}

export default Response;

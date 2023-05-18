'use client';

function Response({ title, result }) {
	return (
		<section className="flex gap-5 flex-col">
			<p className="text-left">{title}</p>
			<code className="border-2 border-indigo-300 w-full h-[300px] overflow-y-scroll p-2 rounded-md">
				{result && JSON.stringify(result, null, 4)}
			</code>
		</section>
	);
}

export default Response;

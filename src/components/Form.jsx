import useQueryStore from '@/store/useQueryStore';
import { useState } from 'react';

function Form() {
	const { query, loading } = useQueryStore((state) => state);
	const [url, setUrl] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// dont submit if url input is empty
		if (url === '') return;

		try {
			await query(url);
		} finally {
			// reset url input field
			setUrl('');
		}
	};

	const handleInputChange = (e) => {
		setUrl(e.target.value);
	};

	return (
		<form
			className="flex justify-between flex-col gap-3"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col gap-3 f">
				<label htmlFor="url">URL</label>
				<input
					value={url}
					onChange={handleInputChange}
					type="text"
					name="url"
					className="outline-none p-3 rounded-md border-gray-200 border-2 focus:border-indigo-300"
				/>
			</div>
			<button
				disabled={loading}
				className={`${
					loading ? 'bg-gray-500' : 'bg-indigo-500'
				} p-3 text-white font-semibold rounded-md `}
				type="submit"
			>
				{loading ? 'Querying...' : 'Query'}
			</button>
		</form>
	);
}

export default Form;

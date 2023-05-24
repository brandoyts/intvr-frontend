import useQueryStore from '@/store/useQueryStore';
import { useState } from 'react';

function Form() {
	const { query, loading, error } = useQueryStore((state) => state);
	const [url, setUrl] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// dont submit if url input is empty
		if (url === '') return;

		try {
			await query(url);
		} catch (error) {
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
			<div className="flex flex-col gap-2">
				<label htmlFor="api_url" className="text-[#66ca60] font-bold">
					API URL:
				</label>
				<input
					data-testid="url_input"
					autoComplete="off"
					value={url}
					onChange={handleInputChange}
					type="text"
					name="url"
					className="outline-none p-3 rounded-md border-[#cc932c] border-2 bg-transparent text-[#66ca60] font-bold"
				/>
			</div>
			<button
				data-testid="query_btn"
				disabled={loading}
				className={`${
					loading && 'animate-pulse'
				} p-3 text-white font-semibold rounded-md bg-[#cc932c] `}
				type="submit"
			>
				{loading ? 'Querying...' : 'Query'}
			</button>
		</form>
	);
}

export default Form;

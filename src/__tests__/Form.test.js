import Form from '@/components/Form';

import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

describe('render form component', () => {
	it('checks if url input and query button are in the form', () => {
		render(<Form />);
		expect(screen.getByTestId('url_input')).toBeInTheDocument();
		expect(screen.getByTestId('query_btn')).toBeInTheDocument();
	});

	it('should clear the url input after submit', () => {
		render(<Form />);
		const urlInput = screen.getByTestId('url_input');
		const queryBtn = screen.getByTestId('query_btn');

		fireEvent.click(queryBtn);

		expect(urlInput.value).toMatch('');
	});
});

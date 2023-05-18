import api from '@/lib/api';
import { create } from 'zustand';

const useQueryStore = create((set) => ({
	loading: false,
	error: false,
	results: null,

	query: async (url) => {
		// set loading once the request is submitted
		set((state) => ({
			loading: true,
		}));

		try {
			// fetch from external api's
			const response = await api.post('/api/query-with-inverted', { url });

			set((state) => ({
				results: response.data.data,
			}));
		} catch (error) {
			set((state) => ({
				error: true,
			}));
		} finally {
			set((state) => ({
				loading: false,
			}));
		}
	},
}));

export default useQueryStore;

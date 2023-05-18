import Container from '@/components/Container';
import Form from '@/components/Form';
import Response from '@/components/Response';
import useQueryStore from '@/store/useQueryStore';

export default function Home() {
	const { results, query, loading, error } = useQueryStore();

	return (
		<main className="flex justify-center items-center h-screen">
			<Container>
				<Form />
				<Response title="URL Response" result={results && results?.original} />
				<Response
					title="Inverted URL Response"
					result={results && results?.inverse}
				/>
			</Container>
		</main>
	);
}

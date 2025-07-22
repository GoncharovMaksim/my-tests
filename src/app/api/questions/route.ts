import { questions } from "@/app/data/questions";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const optionsListParam = searchParams.get('optionsList');
	const topicFilter = searchParams.get('topic');
	const partFilter = searchParams.get('part');

	if (optionsListParam !== null) {
		const optionsList = [...new Set(questions.map(q => q.topic))];
		return Response.json(optionsList);
	}

	let result = questions;

	if (topicFilter !== null) {
		result = result.filter(q => q.topic === topicFilter);
	}

	if (partFilter !== null) {
		result = result.filter(q => q.part === Number(partFilter));
	}

	return Response.json(result);
}

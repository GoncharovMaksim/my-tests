interface Question {
	id: number;
	topic: string;
	part: number;
	questionText: string;
	type: 'single' | 'multiple';
	options: {
		id: 'a' | 'b' | 'c';
		text: string;
	}[];

	correctOptions: string[];
}

const questions: Question[] = [
	{
		id: 1,
		topic: 'Животные',
		part: 1,
		questionText: "How do you say 'кошка' in English?",
		type: 'single',
		options: [
			{ id: 'a', text: 'Dog' },
			{ id: 'b', text: 'Cat' },
			{ id: 'c', text: 'Bird' },
		],
		correctOptions: ['b'],
	},
	{
		id: 2,
		part: 2,
		topic: 'Животные',
		questionText: "How do you say 'кошка' in English?",
		type: 'multiple',
		options: [
			{ id: 'a', text: 'Dog' },
			{ id: 'b', text: 'Cat' },
			{ id: 'c', text: 'Bird' },
		],
		correctOptions: ['b', 'c'],
	},
	{
		id: 3,
		part: 1,
		topic: 'Книги',
		questionText: "How do you say 'кошка' in English?",
		type: 'multiple',
		options: [
			{ id: 'a', text: 'Dog' },
			{ id: 'b', text: 'Cat' },
			{ id: 'c', text: 'Bird' },
		],
		correctOptions: ['b', 'c'],
	},
];

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

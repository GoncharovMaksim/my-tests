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
		part: 1,
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
];

export async function GET() {
	return Response.json(questions);
}
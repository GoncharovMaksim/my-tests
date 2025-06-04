import { NextResponse } from 'next/server';
import { correctAnswers } from '@/app/data/answers';

interface UserAnswer {
	questionId: number;
	selected: string[]; 
}

export async function POST(req: Request) {
	try {
		const userAnswers: UserAnswer[] = await req.json();

		const result = userAnswers.map(answer => {
			const correct = correctAnswers.find(q => q.id === answer.questionId);
			if (!correct) {
				return { questionId: answer.questionId, isCorrect: false };
			}

			const isCorrect = arraysEqual(answer.selected, correct.correctOptions);

			return { questionId: answer.questionId, isCorrect };
		});

		return NextResponse.json({ result });
	} catch (error) {
    console.error(error)
		return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
	}
}


function arraysEqual(a: string[], b: string[]) {
	if (a.length !== b.length) return false;
	const sortedA = [...a].sort();
	const sortedB = [...b].sort();
	return sortedA.every((val, index) => val === sortedB[index]);
}

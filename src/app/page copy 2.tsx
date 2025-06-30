'use client';
import { useState } from 'react';
import checkUserAnswer from './checkUserAnswer';
import styles from './page.module.css';

interface UserAnswer {
	questionId: number;
	selected: string[];
}

const questions = [
	{
		id: 1,
		topic: 'Животные',
		questionText: "How do you say 'кошка' in English?",
		type: 'single', // или "multiple" для множественного выбора
		options: [
			{ id: 'a', text: 'Dog' },
			{ id: 'b', text: 'Cat' },
			{ id: 'c', text: 'Bird' },
		],
		explanation: "Правильный ответ — 'Cat'.",
		audio: 'https://example.com/audio/cat.mp3',
		image: '/img/cat.jpg',
	},
	{
		id: 2,
		topic: 'Животные',
		questionText: "How do you say 'кошка' in English?",
		type: 'multiple', // или "multiple" для множественного выбора
		options: [
			{ id: 'a', text: 'Dog' },
			{ id: 'b', text: 'Cat' },
			{ id: 'c', text: 'Bird' },
		],
		explanation: "Правильный ответ — 'Cat'.",
		audio: 'https://example.com/audio/cat.mp3',
		image: '/img/cat.jpg',
	},
];


export default function Home() {
	const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
	const [testIsComplited, setTestIsComplited] = useState(false);
	const [resultTestIsComplited, setResultTestIsComplited] = useState(false);;
	const handleAnswerChange = (
		questionId: number,
		userSelectedOption: string[]
	) => {
		setUserAnswer(prev => [
			...prev,
			{ questionId: questionId, selected: userSelectedOption },
		]);
		console.log('questionId', questionId, 'userSelectedOption', userSelectedOption);
	};

	const handleUserAnswerCheck=async()=>{
		const responseCheckUserAnswer = await checkUserAnswer(userAnswer);
		const resultCheckUserAnswer = responseCheckUserAnswer.result.find(
			answer => !answer.isCorrect
		);
		setResultTestIsComplited(resultCheckUserAnswer?false:true);
			console.log('esultCheckUserAnswer', resultCheckUserAnswer);
			setTestIsComplited(true)
	};
if(testIsComplited){
	return (
		<div>Тест {resultTestIsComplited ? 'пройден' : 'не пройден'}</div>
	);
};
	return (
		<div className={styles.page}>
			<h1>Тестирование по литературе</h1>
			<main className={styles.main}>
				{questions.map(question => {
					return (
						<div key={question.id}>
							<h3>{question.topic}</h3>
							<p>{question.questionText}</p>
							<ul className={styles.optionsList}>
								{question.options.map(option => (
									<li key={`${question.id}-${option.id}`}>
										<label htmlFor={`${question.id}-${option.id}`}>
											<input
												type={question.type === 'single' ? 'radio' : 'checkbox'}
												id={`${question.id}-${option.id}`}
												name={`question-${question.id}`}
												onChange={() =>
													handleAnswerChange(question.id, [option.id])
												}
											/>
											<span>{option.text}</span>
										</label>
									</li>
								))}
							</ul>
						</div>
					);
				})}
				<button className={styles.button} onClick={handleUserAnswerCheck}>
					Проверить
				</button>
			</main>
		</div>
	);
}

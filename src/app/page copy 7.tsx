'use client';
import { useState } from 'react';
import checkUserAnswer from './checkUserAnswer';
import styles from './page.module.css';

interface UserAnswer {
	questionId: number;
	selected: string[];
}
interface CheckUserAnswer {
	questionId: number;
	isCorrect: boolean;
}

const questions = [
	{
		id: 1,
		topic: 'Животные',
		part:1,
		questionText: "How do you say 'кошка' in English?",
		type: 'single',
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
		type: 'multiple',
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
	const [resultTestIsComplited, setResultTestIsComplited] = useState(false);

	const handleAnswerChange = (
		questionId: number,
		optionId: string,
		isChecked: boolean,
		type: 'single' | 'multiple'
	) => {
		setUserAnswer(prev => {
			const existing = prev.find(ans => ans.questionId === questionId);

			if (type === 'single') {
				return [
					...prev.filter(ans => ans.questionId !== questionId),
					{ questionId, selected: [optionId] },
				];
			} else {
				let newSelected = existing ? [...existing.selected] : [];

				if (isChecked) {
					if (!newSelected.includes(optionId)) newSelected.push(optionId);
				} else {
					newSelected = newSelected.filter(id => id !== optionId);
				}

				return [
					...prev.filter(ans => ans.questionId !== questionId),
					{ questionId, selected: newSelected },
				];
			}
		});
	};

	const handleUserAnswerCheck = async () => {
		const { result } = await checkUserAnswer(userAnswer);

		const allCorrect =
			result.length === questions.length &&
			result.every((answer: CheckUserAnswer) => answer.isCorrect);

		setResultTestIsComplited(allCorrect);
		setTestIsComplited(true);
	};

	const handleClearResultTest = () => {
		setTestIsComplited(false);
		setUserAnswer([]);
		setResultTestIsComplited(false);
	};

	if (testIsComplited) {
		return (
			<div className={styles.page}>
				<div>Тест {resultTestIsComplited ? 'пройден' : 'не пройден'}</div>
				<button onClick={handleClearResultTest} className={styles.button}>
					Назад
				</button>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			<h1>Тест по теме: {questions[0].topic}</h1>
			<main className={styles.main}>
				{questions.map(question => (
					<div key={question.id}>
						<h3>Вопрос №{question.id}</h3>
						<p>{question.questionText}</p>
						<ul className={styles.optionsList}>
							{question.options.map(option => (
								<li key={`${question.id}-${option.id}`}>
									<label htmlFor={`${question.id}-${option.id}`}>
										<input
											type={question.type === 'single' ? 'radio' : 'checkbox'}
											id={`${question.id}-${option.id}`}
											name={`question-${question.id}`}
											onChange={e =>
												handleAnswerChange(
													question.id,
													option.id,
													e.target.checked,
													question.type as 'single' | 'multiple'
												)
											}
										/>
										<span>{option.text}</span>
									</label>
								</li>
							))}
						</ul>
					</div>
				))}
				<button className={styles.button} onClick={handleUserAnswerCheck}>
					Проверить
				</button>

				{/* {testIsComplited && (
					<div className={styles.page}>
						<div>Тест {resultTestIsComplited ? 'пройден' : 'не пройден'}</div>
						<button onClick={handleClearResultTest} className={styles.button}>
							Назад
						</button>
					</div>
				)} */}
			</main>
		</div>
	);
}

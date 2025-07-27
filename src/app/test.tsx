'use client';
import { useEffect, useState } from 'react';
import checkUserAnswer from './checkUserAnswer';
import styles from './page.module.css';
import getQuestions from './getQuestions';

interface UserAnswer {
	questionId: number;
	selected: string[];
}
interface CheckUserAnswer {
	questionId: number;
	isCorrect: boolean;
}

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

export default function Test({
	userCheckOptions,
	setStartTest,
}: {
	userCheckOptions: string;
	setStartTest: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
	const [testIsComplited, setTestIsComplited] = useState(false);
	const [resultTestIsComplited, setResultTestIsComplited] = useState(false);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		//console.log('userCheckOptions', userCheckOptions);
		getQuestions(userCheckOptions).then(response => {
			const randomQuestions = [...response];
			for (let i = randomQuestions.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[randomQuestions[i], randomQuestions[j]] = [
					randomQuestions[j],
					randomQuestions[i],
				];
			}

			setQuestions(randomQuestions.slice(0,10));
			setisLoading(false);
		});
	}, [userCheckOptions]);

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
		setStartTest(false);
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
	if (isLoading) {
		return <div className={styles.page}>Загрузка...</div>;
	}
	if (questions.length === 0) {
		return <div className={styles.page}>Нет доступных вопросов.</div>;
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
			</main>
		</div>
	);
}

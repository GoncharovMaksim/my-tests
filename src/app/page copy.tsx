'use client';
import checkUserAnswer from './checkUserAnswer';
import styles from './page.module.css';
const questions = [
	{
		id: 1,
		topic: 'Животные',
		questionText: "How do you say 'кошка' in English?",
		type: 'single', // или "multiple" для множественного выбора
		options: [
			{ id: 'a', text: 'Dog'},
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
			{ id: 'a', text: 'Dog', },
			{ id: 'b', text: 'Cat',  },
			{ id: 'c', text: 'Bird', },
		],
		explanation: "Правильный ответ — 'Cat'.",
		audio: 'https://example.com/audio/cat.mp3',
		image: '/img/cat.jpg',
	},
];
const userAnswer = [
	{ questionId: 1, selected: ['b'] },
	{ questionId: 2, selected: ['c'] },
];

export default function Home() {


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
											/>
											<span>{option.text}</span>
										</label>
									</li>
								))}
							</ul>
						</div>
					);
				})}
				<button
					className={styles.button}
					onClick={() => checkUserAnswer(userAnswer)}
				>
					Проверить
				</button>
			</main>
		</div>
	);
}

export interface Question {
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

export const questions: Question[] = [
	{
		id: 1,
		topic: 'Незнайка и его друзья',
		part: 1,
		questionText: 'Кем был Незнайка по характеру?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Серьёзным и умным' },
			{ id: 'b', text: 'Весёлым, но невежественным' },
			{ id: 'c', text: 'Замкнутым и злым' },
		],
		correctOptions: ['b'],
	},
	{
		id: 2,
		topic: 'Незнайка и его друзья',
		part: 1,
		questionText: 'Кто был лучшим другом Незнайки?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Знайка' },
			{ id: 'b', text: 'Пончик' },
			{ id: 'c', text: 'Гунька' },
		],
		correctOptions: ['a'],
	},
	{
		id: 3,
		topic: 'Незнайка и его друзья',
		part: 1,
		questionText: 'Кто из коротышек был механиком?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Винтик' },
			{ id: 'b', text: 'Шпунтик' },
			{ id: 'c', text: 'Гусля' },
		],
		correctOptions: ['a'],
	},
	{
		id: 4,
		topic: 'Незнайка и его друзья',
		part: 1,
		questionText: 'Кто был музыкантом в Цветочном городе?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Тюбик' },
			{ id: 'b', text: 'Гусля' },
			{ id: 'c', text: 'Пилюлькин' },
		],
		correctOptions: ['b'],
	},
	{
		id: 5,
		topic: 'Незнайка и его друзья',
		part: 2,
		questionText: 'Какой транспорт строили коротышки для путешествия?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Автомобиль' },
			{ id: 'b', text: 'Паровоз' },
			{ id: 'c', text: 'Воздушный шар' },
		],
		correctOptions: ['c'],
	},
	{
		id: 6,
		topic: 'Незнайка и его друзья',
		part: 2,
		questionText: 'Кто был врачом в Цветочном городе?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Пилюлькин' },
			{ id: 'b', text: 'Знайка' },
			{ id: 'c', text: 'Торопыжка' },
		],
		correctOptions: ['a'],
	},
	{
		id: 7,
		topic: 'Незнайка и его друзья',
		part: 2,
		questionText: 'Как звали художника?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Тюбик' },
			{ id: 'b', text: 'Пачкуля' },
			{ id: 'c', text: 'Знайка' },
		],
		correctOptions: ['a'],
	},
	{
		id: 8,
		topic: 'Незнайка и его друзья',
		part: 3,
		questionText: 'Что случилось во время полёта на воздушном шаре?',
		type: 'multiple',
		options: [
			{ id: 'a', text: 'Шар лопнул' },
			{ id: 'b', text: 'Они прилетели в Солнечный город' },
			{ id: 'c', text: 'Они упали в лес' },
		],
		correctOptions: ['a', 'c'],
	},
	{
		id: 9,
		topic: 'Незнайка и его друзья',
		part: 3,
		questionText: 'Как Незнайка вел себя в путешествии?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Он всем помогал' },
			{ id: 'b', text: 'Он мешал и спорил' },
			{ id: 'c', text: 'Он ничего не делал' },
		],
		correctOptions: ['b'],
	},
	{
		id: 10,
		topic: 'Незнайка и его друзья',
		part: 3,
		questionText: 'Чему научился Незнайка к концу книги?',
		type: 'multiple',
		options: [
			{ id: 'a', text: 'Ценить знания' },
			{ id: 'b', text: 'Уважать других' },
			{ id: 'c', text: 'Строить машины' },
		],
		correctOptions: ['a', 'b'],
	},
];

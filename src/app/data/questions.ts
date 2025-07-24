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
	{
		id: 1,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Как звали главного героя книги?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Карлсон' },
			{ id: 'b', text: 'Малыш' },
			{ id: 'c', text: 'Боссе' },
		],
		correctOptions: ['b'],
	},
	{
		id: 2,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Где жил Карлсон?',
		type: 'single',
		options: [
			{ id: 'a', text: 'В подвале' },
			{ id: 'b', text: 'На крыше' },
			{ id: 'c', text: 'В соседнем доме' },
		],
		correctOptions: ['b'],
	},
	{
		id: 3,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Кем был Карлсон по описанию?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Толстеньким человечком с моторчиком за спиной' },
			{ id: 'b', text: 'Худым высоким мужчиной' },
			{ id: 'c', text: 'Роботом' },
		],
		correctOptions: ['a'],
	},
	{
		id: 4,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Почему Малыш чувствовал себя одиноким?',
		type: 'single',
		options: [
			{ id: 'a', text: 'У него не было собаки' },
			{ id: 'b', text: 'Его никто не понимал' },
			{ id: 'c', text: 'Старшие братья и сёстры были заняты собой' },
		],
		correctOptions: ['c'],
	},
	{
		id: 5,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Какое домашнее животное хотел Малыш?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Кота' },
			{ id: 'b', text: 'Собаку' },
			{ id: 'c', text: 'Попугая' },
		],
		correctOptions: ['b'],
	},
	{
		id: 6,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Что удивило Малыша при первой встрече с Карлсоном?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Что он был летающим' },
			{ id: 'b', text: 'Что он был говорящим псом' },
			{ id: 'c', text: 'Что он был невидимкой' },
		],
		correctOptions: ['a'],
	},
	{
		id: 7,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Как Карлсон представился Малышу?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Карлсон, который живёт в подвале' },
			{ id: 'b', text: 'Карлсон, который живёт на крыше' },
			{ id: 'c', text: 'Карлсон, самый быстрый в мире' },
		],
		correctOptions: ['b'],
	},
	{
		id: 8,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Что делает Карлсон, когда включает моторчик?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Светится' },
			{ id: 'b', text: 'Начинает летать' },
			{ id: 'c', text: 'Издаёт громкие звуки' },
		],
		correctOptions: ['b'],
	},
	{
		id: 9,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Как Малыш отнёсся к Карлсону при первой встрече?',
		type: 'single',
		options: [
			{ id: 'a', text: 'Испугался' },
			{ id: 'b', text: 'Обрадовался и заинтересовался' },
			{ id: 'c', text: 'Не поверил в его существование' },
		],
		correctOptions: ['b'],
	},
	{
		id: 10,
		topic: 'Малыш и Карлсон',
		part: 1,
		questionText: 'Что Карлсон пообещал Малышу?',
		type: 'multiple',
		options: [
			{ id: 'a', text: 'Устроить весёлые приключения' },
			{ id: 'b', text: 'Починить телевизор' },
			{ id: 'c', text: 'Никогда не скучать' },
		],
		correctOptions: ['a', 'c'],
	},
];

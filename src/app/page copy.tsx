'use client';

import { useEffect, useState } from 'react';
import Test from './test';
import getOptionsList from './getOptionsList';
import styles from './page.module.css';

export default function Home() {
	const [optionsList, setOptionsList] = useState<string[]>([]);
	const [userCheckOptions, setUserCheckOptions] = useState<string>('');
	const [startTests, setStartTest] = useState<boolean>(false);
console.log(startTests);
	useEffect(() => {
		getOptionsList().then(response => {
			setOptionsList(response);
			setUserCheckOptions(response[0] || '');
		});
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setUserCheckOptions(e.target.value);
	};

	const handleStartTest = () => {
		setStartTest(true);
	};

	if (startTests !== true) {
		return (
			<div className={styles.page}>
				<h3>Выберите тему теста</h3>
				<select
					name='optionsList'
					id='optionsList'
					value={userCheckOptions}
					onChange={handleChange}
				>
					{optionsList.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<button onClick={handleStartTest}>Начать</button>
				{/* <Test userCheckOptions={`topic=${userCheckOptions}`} /> */}
			</div>
		);
	} else {
		return <Test userCheckOptions={`topic=${userCheckOptions}`} />;
	}


return !startTests ? (
	<div className={styles.page}>
		<h3>Выберите тему теста</h3>
		<select
			name='optionsList'
			id='optionsList'
			value={userCheckOptions}
			onChange={handleChange}
		>
			{optionsList.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
		<button onClick={handleStartTest}>Начать</button>
		{/* <Test userCheckOptions={`topic=${userCheckOptions}`} /> */}
	</div>
) : (
	<Test userCheckOptions={`topic=${userCheckOptions}`} />
);


}

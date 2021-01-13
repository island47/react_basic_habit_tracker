import React, { useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

const App = () => {
	const [habits, setHabits] = useState([
		{ id: 1, name: 'Reading', count: 0 },
		{ id: 2, name: 'Running', count: 0 },
		{ id: 3, name: 'Coding', count: 0 }
	]);

	const handleIncrement = useCallback(habit => {
		setHabits(habits => {
			habits.map(item => {
				if (item.id === habit.id) {
					return { ...habit, count: item.count + 1 };
				}
				return item;
			});
		});
	}, []);

	const handleDecrement = useCallback(habit => {
		setHabits(habits => {
			habits.map(item => {
				if (item.id === habit.id) {
					const count = item.count - 1;
					return { ...habit, count: count < 0 ? 0 : count };
				}
				return item;
			});
		});
	}, []);

	const handleDelete = useCallback(habit => {
		setHabits(habits => habits.filter(item => item.id !== habit.id));
	}, []);

	const handleAdd = useCallback(name => {
		setHabits(habits => [...habits, { id: Date.now(), name: name, count: 0 }]);
	}, []);

	const handleReset = useCallback(() => {
		setHabits(habits => {
			habits.map(habit => {
				if (habit.count !== 0) {
					return { ...habit, count: 0 };
				}
				return habit;
			});
		});
	}, []);

	return (
		<div>
			<Navbar totalCount={habits.filter(item => item.count > 0).length} />
			<HabitAddForm onAdd={handleAdd} />
			<Habits
				habits={habits}
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				onDelete={handleDelete}
				onReset={handleReset}
			/>
		</div>
	);
};

export default App;

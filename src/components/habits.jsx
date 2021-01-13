import Habit from './habit';
import React from 'react';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onReset }) => {
	return (
		<div>
			<ul>
				{habits.map(habit => (
					<Habit
						key={habit.id}
						habit={habit}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
					/>
				))}
			</ul>
			<button className="reset-btn" onClick={onReset}>
				Reset All
			</button>
		</div>
	);
};

export default Habits;

import React, { memo } from 'react';

const HabitAddForm = memo(({ onAdd }) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = e => {
		e.preventDefault();
		const name = inputRef.current.value;
		name && onAdd(name);
		formRef.current.reset();
	};
	return (
		<form ref={formRef} className="add-form" onSubmit={onSubmit}>
			<input ref={inputRef} className="add-input" type="text" placeholder="Habit" />
			<button className="add-btn">Add</button>
		</form>
	);
});

export default HabitAddForm;

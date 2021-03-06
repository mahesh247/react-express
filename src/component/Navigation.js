import React from 'react';
import ListItem from './ListItem';

const Navigation = props => {
	const handleClick = e => {
		props.onClick(e);
	};
	const {
		login,
		phone,
		cell,
		picture,
		location,
		email,
		dob,
		name
	} = props.details;
	const { password } = login;
	const { first, last } = name;
	const { date } = dob;
	const { large, medium, thumbnail } = picture;
	const { street, city, state, postcode } = location;

	let d = new Date(date);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const birthDate = [
		months[d.getMonth()] + ' ' + d.getDate(),
		d.getFullYear()
	].join(', ');

	const array = [
		first.concat(' ', last),
		email,
		birthDate,
		state,
		phone,
		password
	];
	const classnames = [
		'user-circle',
		'envelope',
		'calendar-alt',
		'map-marker-alt',
		'phone-alt',
		'key'
	];

	return (
		<nav>
			<ul>
				{array.map((item, index) => (
					<ListItem
						onClick={handleClick}
						item={item}
						name={classnames[index]}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

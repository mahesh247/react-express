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
				{/* {array.map((index, item) => {
					console.log(index);
					console.log(item);
					<ListItem item={item} />;
				})} */}
				{/* <li>
					<a href="#" className="icon solid fa-user-circle">
						<span className="label">User</span>
					</a>
				</li>
				<li>
					<a href="#" className="icon solid fa-envelope">
						<span className="label">Email</span>
					</a>
				</li>
				<li>
					<a href="#" className="icon solid fa-calendar-alt">
						<span className="label">DOB</span>
					</a>
				</li>
				<li>
					<a href="#" className="icon solid fa-map-marker-alt">
						<span className="label">Location</span>
					</a>
				</li>
				<li>
					<a href="#" className="icon solid fa-phone-alt">
						<span className="label">Phone</span>
					</a>
				</li>
				<li>
					<a href="#" className="icon solid fa-key">
						<span className="label">Password</span>
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

export default Navigation;

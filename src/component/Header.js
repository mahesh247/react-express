import React from 'react';
import HeaderContainer from './HeaderContainer';
import Navigation from './Navigation';

const useFetch = url => {
	const [name, setName] = React.useState(null);
	const [login, setLogin] = React.useState(null);
	const [email, setEmail] = React.useState(null);
	const [dob, setDOB] = React.useState(null);
	const [location, setLocation] = React.useState(null);
	const [phone, setPhone] = React.useState(null);
	const [cell, setCell] = React.useState(null);
	const [picture, setPicture] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setLoading(true);
		fetch(url)
			.then(response => response.json())
			.then(result => {
				//console.log(result.results[0]);
				const {
					name,
					dob,
					email,
					location,
					login,
					phone,
					cell,
					picture
				} = result.results[0];
				setName(name);
				setLogin(login);
				setEmail(email);
				setLocation(location);
				setDOB(dob);
				setPhone(phone);
				setCell(cell);
				setPicture(picture);
				setLoading(false);
			});
		/* async function fetchData() {
			setLoading(true);
			const response = await fetch(url);
			console.log(response);
			const result = await response.json();
			const { name } = result[0];
			setName(name);
			setLoading(false);
		}
		fetchData(); */
	}, []);
	return {
		name,
		dob,
		email,
		location,
		loading,
		login,
		phone,
		cell,
		picture
	};
};

const Header = () => {
	const url = 'https://randomuser.me/api';
	const {
		name,
		dob,
		email,
		location,
		loading,
		login,
		phone,
		cell,
		picture
	} = useFetch(url);

	const details = {
		data,
		name,
		login,
		phone,
		cell,
		picture,
		location,
		email,
		dob
	};

	const [data, setData] = React.useState(null);
	const handleClick = e => {
		e.preventDefault();
		const data = e.target.getAttribute('data-item');
		setData(data);
	};

	return (
		<div id="main">
			{!loading && (
				<header id="header">
					{name && (
						<HeaderContainer
							name={name}
							data={data}
							picture={picture.large}
						/>
					)}
					{login && (
						<Navigation onClick={handleClick} details={details} />
					)}
				</header>
			)}
		</div>
	);
};

export default Header;

import React from 'react';

const ListItem = props => {
	const handleClick = e => {
		e.preventDefault();
		props.onClick(e);
	};
	let classname = 'icon solid fa-' + props.name;
	return (
		<li>
			<a
				style={{ cursor: 'pointer' }}
				className={classname}
				data-item={props.item}
				onClick={e => handleClick(e)}
			>
				<span className="label">{props.item}</span>
			</a>
		</li>
	);
};

export default ListItem;

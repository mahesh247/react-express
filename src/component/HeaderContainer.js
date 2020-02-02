import React from 'react';

const HeaderContainer = props => {
	const { first, last } = props.name;
	const fullName = first.concat(' ', last);
	const image = props.picture;
	return (
		<>
			{fullName && (
				<h1 style={{ wordBreak: 'break-word' }}>
					{props.data ? props.data : fullName}
				</h1>
			)}
			<div
				className="image-container"
				style={{
					margin: '34px 10px 10px',
					border: '3px solid #fff',
					display: 'inline-flex',
					overflow: 'hidden',
					borderRadius: 10,
					boxShadow:
						'3px 4px 10px rgba(0,0,0, 0.3), 3px 4px 4px rgba(0,0,0, 0.2)'
				}}
			>
				<img src={image} />
			</div>
		</>
	);
};

export default HeaderContainer;

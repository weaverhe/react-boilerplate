import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	const { content } = props;

	return (
		<div>
			<button type="button">{content}</button>
		</div>
	);
};

Button.propTypes = {
	content: PropTypes.string.isRequired,
};

export default Button;

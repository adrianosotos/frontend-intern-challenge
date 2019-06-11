const validate = (inputs) => {
	let errors = {};
	if (!inputs.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		errors.email = 'Email address is invalid';
	}
	if (!inputs.name) {
		errors.name = 'Name is required';
	}
	return errors;
};

export default validate;

const validate = (inputs) => {
	let errors = {};
	if (!inputs.email) {
		errors.email = 'Favor inserir um e-mail';
	} else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		errors.email = 'E-mail invalido';
	}
	if (!inputs.name) {
		errors.name = 'Favor inserir um nome';
	}
	return errors;
};

export default validate;

import React from 'react';
import useSignUpForm from '../utils/CustomHooks';
import validate from '../utils/FormValidationRules';

const ShareForm = () => {
	const subscriber = () => {
		alert(`Subscribed
		Name: ${inputs.name}
		Email: ${inputs.email}
		`);
	};
	const { inputs, handleInputChange, handleSubmit, errors } = useSignUpForm(subscriber, validate);
	return (
		<div id="share">
			<h1>Compartilhe a novidade</h1>
			<p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
			<form onSubmit={handleSubmit} noValidate>
				<input
					className={`input ${errors.name && 'is-danger'}`}
					type="text"
					name="name"
					onChange={handleInputChange}
					value={inputs.name || ''}
					required
				/>
				{errors.name && <p className="help is-danger">{errors.name}</p>}
				<input
					className={`input ${errors.email && 'is-danger'}`}
					type="email"
					onChange={handleInputChange}
					name="email"
					value={inputs.email || ''}
					required
				/>
				{errors.email && <p className="help is-danger">{errors.email}</p>}
				<button type="submit">Enviar agora</button>
			</form>
		</div>
	);
};

export default ShareForm;

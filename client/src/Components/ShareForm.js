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
		<div id="share" className="shareForm">
			<h1 className="shareForm__title">Compartilhe a novidade</h1>
			<p className="shareForm__text">
				Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
			</p>
			<form onSubmit={handleSubmit} noValidate>
				<div className="shareForm__inputs">
					<div className="group">
						<label>Nome do seu amigo:</label>
						<input
							className={`input ${errors.name && 'is-danger'}`}
							type="text"
							name="name"
							onChange={handleInputChange}
							value={inputs.name || ''}
							required
						/>
						{errors.name && <p className="is-danger">{errors.name}</p>}
					</div>
					<div className="group">
						<label>E-mail</label>
						<input
							className={`input ${errors.email && 'is-danger'}`}
							type="email"
							onChange={handleInputChange}
							name="email"
							value={inputs.email || ''}
							required
						/>
						{errors.email && <p className="is-danger">{errors.email}</p>}
					</div>
				</div>
				<button className="shareForm__button" type="submit">
					Enviar agora
				</button>
			</form>
		</div>
	);
};

export default ShareForm;

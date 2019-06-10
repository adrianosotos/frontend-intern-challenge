import React from 'react';

const ShareForm = () => {
	return (
		<div id="share">
			<h1>Compartilhe a novidade</h1>
			<p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
			<form>
				<input type="text" />
				<input type="email" />
				<button>Enviar agora</button>
			</form>
		</div>
	);
};

export default ShareForm;

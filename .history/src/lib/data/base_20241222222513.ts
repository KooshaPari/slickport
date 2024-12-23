const firstName = 'Koosha';
const lastName = 'Paridehpour';
const suffix = 'Byteport Adapted Svelte Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;

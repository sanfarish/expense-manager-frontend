const config = (token) => {
	return { headers: { Authorization: `Bearer ${token}` } };
};

// const hostTarget = 'http://localhost:3000/api/v1';
const hostTarget = 'https://apiexpensemanager.farishasan.web.id/api/v1';

export { config, hostTarget };
const config = (token) => {
	return { headers: { Authorization: `Bearer ${token}` } };
};

// const hostTarget = 'http://localhost:3500/api/v1';
const hostTarget = 'http://98.142.245.14:30503/api/v1';

export { config, hostTarget };
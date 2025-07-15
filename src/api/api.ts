import axios from 'axios';
import { getSubdomain } from '../utils/getSubdomain';

const api = axios.create({
	baseURL: 'http://tenant1.localhost:5164', // Adjust if needed
});

api.interceptors.request.use((config) => {
	const tenant = getSubdomain();
	if (tenant) {
		config.headers['X-Tenant'] = tenant;
	}
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;

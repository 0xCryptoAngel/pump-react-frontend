import React, { createContext, useState, useEffect } from 'react';
import type { AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem('token')
	);
	const [user, setUser] = useState<string | null>(null);

	useEffect(() => {
		if (token) {
			// Example: decode token to get username or fetch user profile
			// Here we just mock the user
			setUser('admin');
		} else {
			setUser(null);
		}
	}, [token]);

	const login = (newToken: string) => {
		localStorage.setItem('token', newToken);
		setToken(newToken);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setUser(null);
		window.location.href = '/login';
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

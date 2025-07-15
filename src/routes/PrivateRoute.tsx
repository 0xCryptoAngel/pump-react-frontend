import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // your custom auth hook

const PrivateRoute: React.FC = () => {
	const { token } = useAuth();
	return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

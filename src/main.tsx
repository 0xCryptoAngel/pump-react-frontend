// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import PumpDetail from './pages/PumpDetail.tsx';
import Pumps from './pages/Pumps.tsx';
import Auth from './pages/Auth.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: '/',
						element: <Navigate to="/pumps" replace />,
					},
					{
						path: '/pumps',
						element: <Pumps />,
					},
					{
						path: '/pump/:id',
						element: <PumpDetail />,
					},
				],
			},
		],
	},
	{
		path: '/login',
		element: <Auth />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</>
);

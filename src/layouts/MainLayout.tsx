import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;

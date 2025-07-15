import { Bell, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileDialog from '../ProfileDialog/ProfileDialog';
import { useAuth } from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
	const location = useLocation();
	const { logout } = useAuth();
	const handleLogout = () => {
		logout();
	};
	const isLoginPage = location.pathname !== '/login';
	return (
		<div className="py-4 border-b border-gray-200">
			<div className="mx-auto max-w-screen-xl flex items-center gap-4 justify-between">
				<div className="flex items-center gap-8">
					<Link
						to="/"
						className="flex gap-2 text-2xl font-semibold items-center"
					>
						<Sparkle strokeWidth={2} size={24} />
						<div>PumpMaster</div>
					</Link>
					{isLoginPage && (
						<div className="flex gap-8 items-center">
							<Link to="/pumps" className="w-20 text-center">
								Dashboard
							</Link>
							<Link to="/#" className="w-20 text-center">
								Pumps
							</Link>
							<Link to="/#" className="w-20 text-center">
								Reports
							</Link>
							<Link to="/#" className="w-20 text-center">
								Alerts
							</Link>
						</div>
					)}
				</div>
				{isLoginPage && (
					<div className="flex items-center gap-8">
						<div className="w-[40px] bg-gray-300 rounded h-[40px] flex items-center justify-center">
							<Bell />
						</div>
						<div className="rounded-full bg-black w-[40px] h-[40px]">
							<ProfileDialog onLogout={handleLogout} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

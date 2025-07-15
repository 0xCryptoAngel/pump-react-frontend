import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar/Navbar';
import { login } from '../api/PumpApi';

const LoginPage = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const authContext = useContext(AuthContext);
	if (!authContext)
		throw new Error('AuthContext must be used within AuthProvider');
	const { login: loginUser } = authContext;

	const handleLogin = async () => {
		setError(null);
		try {
			const token = await login(username, password);
			loginUser(token);
			navigate('/pumps', { replace: true });
		} catch {
			setError('Invalid username or password');
		}
	};

	return (
		<div>
			<Navbar />
			<div className="flex items-center justify-center h-[80vh] ">
				<div className="w-96 -mt-24">
					<div className="text-center text-2xl font-semibold">Welcome back</div>
					<div className="flex flex-col gap-4">
						<div className="px-4">
							<label className="block" htmlFor="username">
								Username
							</label>
							<input
								type="text"
								name=""
								id="username"
								placeholder="Enter your text here"
								onChange={(e) => setUsername(e.target.value)}
								className="border rounded-[8px] border-gray-400 w-full p-2"
							/>
						</div>
						<div className="px-4">
							<label className="block" htmlFor="password">
								Password
							</label>
							<input
								type="password"
								name=""
								id="password"
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
								className="border border-gray-400   rounded-[8px] w-full p-2"
							/>
						</div>
						<button
							className="bg-[#0D80F2] text-white w-full rounded-[8px] py-2"
							onClick={handleLogin}
						>
							Log in
						</button>
						{error && <p className="text-red-600 mt-4 text-center">{error}</p>}
						<div className="text-center">Don't have an accent? Register</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

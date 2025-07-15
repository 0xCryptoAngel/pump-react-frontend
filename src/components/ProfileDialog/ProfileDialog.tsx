import { useState, useRef, useEffect } from 'react';
import type { ProfileDialogProps } from '../../types';

const ProfileDialog = ({ onLogout }: ProfileDialogProps) => {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={menuRef}>
			<button
				onClick={() => setOpen(!open)}
				className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
			>
				<span className="text-lg font-bold">👤</span>
			</button>

			{open && (
				<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
					<ul className="py-1 text-sm text-gray-700">
						<li
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
							onClick={() => {
								onLogout();
								setOpen(false);
							}}
						>
							Logout
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileDialog;

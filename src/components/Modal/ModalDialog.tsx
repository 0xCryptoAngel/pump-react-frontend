import { X } from 'lucide-react';
import type { ModalPropsType } from '../../types';

const ModalDialog = ({ isOpen, onClose, title, children }: ModalPropsType) => {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 flex items-center justify-center  bg-gray-900/70 z-50">
			<div className="bg-white rounded shadow-lg max-w-xl w-full">
				<div className="flex justify-between border-b border-gray-200 items-center p-4">
					<div className="text-xl font-semibold">{title}</div>
					<button onClick={onClose}>
						<X />
					</button>
				</div>
				<div className="p-8">{children}</div>
			</div>
		</div>
	);
};

export default ModalDialog;

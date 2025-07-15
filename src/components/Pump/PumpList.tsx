import { Link } from 'react-router-dom';
import type { PumpListProps, PumpType } from '../../types';
import { Pencil, Trash2, X } from 'lucide-react';
import ModalDialog from '../Modal/ModalDialog';
import { useState } from 'react';
import { PumpForm } from './PumpForm';

export default function PumpList({ pumps, onEdit, onDelete }: PumpListProps) {
	const [selectedPump, setSelectedPump] = useState<PumpType | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = (pump: PumpType) => {
		setSelectedPump(pump);
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setSelectedPump(null);
		setIsModalOpen(false);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (selectedPump) {
			setSelectedPump({ ...selectedPump, [name]: value });
		}
	};
	const handleSave = () => {
		if (selectedPump) {
			onEdit(selectedPump);
			closeModal();
		}
	};

	return (
		<div>
			{pumps.map((pump) => (
				<div
					key={pump.id}
					className="w-full flex items-center text-gray-600 border-t border-gray-300 py-2 px-4 hover:bg-gray-100"
				>
					<Link to={`/pump/${pump.id}`} className="flex w-[90%]">
						<div className="w-[10%]">{pump.name}</div>
						<div className="w-[10%]">{pump.type}</div>
						<div className="w-[10%]">{pump.areaBlock}</div>
						<div className="w-[10%]">{pump.latitude}</div>
						<div className="w-[10%]">{pump.longitude}</div>
						<div className="w-[10%]">{pump.flowRate}</div>
						<div className="w-[10%]">{pump.offset}</div>
						<div className="w-[10%]">{pump.currentPressure}</div>
						<div className="w-[10%]">{pump.minPressure}</div>
						<div className="w-[10%]">{pump.maxPressure}</div>
					</Link>
					<div className="flex items-center gap-2 w-[10%]">
						<button
							className="ml-2 text-blue-500 hover:underline"
							onClick={() => openModal(pump)}
						>
							<Pencil />
						</button>

						<button
							className="ml-2 text-red-500 hover:underline"
							onClick={() => onDelete(pump.id)}
						>
							<Trash2 />
						</button>
					</div>
				</div>
			))}
			<ModalDialog isOpen={isModalOpen} onClose={closeModal} title="Edit Pump">
				<div className="px-16">
					<div className="text-2xl font-bold">{selectedPump?.name}</div>
					<div className="flex justify-between py-2">
						<div>Pump ID</div>
						<div>{selectedPump?.id}</div>
					</div>
					<PumpForm pump={selectedPump} onChange={handleChange} />
					<div className="flex justify-end gap-4">
						<button
							className="bg-gray-200 rounded px-4 py-2"
							onClick={closeModal}
						>
							Cancel
						</button>
						<button
							className="bg-[#1C81EF] text-white rounded px-4 py-2"
							onClick={handleSave}
						>
							Save
						</button>
					</div>
				</div>
			</ModalDialog>
		</div>
	);
}

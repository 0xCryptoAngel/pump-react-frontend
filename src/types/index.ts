export interface PumpType {
	id: number;
	name: string;
	type: string;
	areaBlock: string;
	latitude: number;
	longitude: number;
	flowRate: number;
	offset: string;
	currentPressure: number;
	minPressure: number;
	maxPressure: number;
}

export interface ModalPropsType {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export interface ProfileDialogProps {
	onLogout: () => void;
}

export interface PumpListProps {
	pumps: PumpType[];
	onEdit: (pump: PumpType) => void;
	onDelete: (pumpId: number) => void;
}

export interface PumpFormProps {
	pump: PumpType | null;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthContextType {
	user: string | null;
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
}

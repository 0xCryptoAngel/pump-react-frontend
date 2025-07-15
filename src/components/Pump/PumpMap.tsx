import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PressureGraph from './PressureChart';

export default function PumpMap() {
	return (
		<div className="flex flex-col">
			<div className="font-bold text-xl py-4">Map</div>
			<MapContainer
				center={[52.3700761264887, 4.911927364176079]}
				zoom={10}
				className="h-96 w-full rounded"
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[52.3700761264887, 4.911927364176079]}>
					<Popup>Pump 12345</Popup>
				</Marker>
			</MapContainer>
			<div className="py-8">
				<div className="flex justify-between">
					<div className="text-xl font-bold">Pressure Over Time</div>
					<select id="period" className="border border-gray-300 rounded p-2">
						<option value="1h">Select Chart Type</option>
						<option value="1h">1h</option>
						<option value="24h">24h</option>
						<option value="7d">7d</option>
					</select>
				</div>
				<div className="w-full h-96 pt-8">
					<PressureGraph />
				</div>
			</div>
		</div>
	);
}

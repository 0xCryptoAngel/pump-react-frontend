import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PumpType } from "../types";
import { getPumpById } from "../api/PumpApi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PressureChart from "../components/Pump/PressureChart";
const PumpPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pump, setPump] = useState<PumpType>();
  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const data = await getPumpById(id);
      setPump(data);
    };
    fetchData();
  }, []);
  return (
    <div className="p-16 mx-auto max-w-5xl">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">{pump?.name}</div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-12">
            <div className="text-gray-500">PumpID</div>
            <div>{pump?.id}</div>
          </div>
          <div className="flex justify-between gap-12">
            <div className="text-gray-500">Status</div>
            <div>Operational</div>
          </div>
          <div className="flex justify-between gap-12">
            <div className="text-gray-500">Last Updated</div>
            <div>2025-01-20 14:30</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-12">
        <div className="pb-4 text-xl font-bold">Attributes</div>
        <div className="flex justify-between">
          <div>Type</div>
          <div>{pump?.type}</div>
        </div>
        <div className="flex justify-between">
          <div>Area/Block</div>
          <div>{pump?.areaBlock}</div>
        </div>
        <div className="flex justify-between">
          <div>Location(lat/lon)</div>
          <div>
            {pump?.latitude},{pump?.longitude}
          </div>
        </div>
        <div className="flex justify-between">
          <div>Flow Rate</div>
          <div>{pump?.flowRate}</div>
        </div>
        <div className="flex justify-between">
          <div>Offset</div>
          <div>{pump?.offset}</div>
        </div>
        <div className="flex justify-between">
          <div>Pressure(Current|Min|Max)</div>
          <div>
            {pump?.maxPressure} | {pump?.minPressure}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl py-4">Map</div>
        {pump?.latitude && pump?.longitude ? (
          <MapContainer
            center={[Number(pump.latitude), Number(pump.longitude)]}
            zoom={10}
            className="h-96 w-full rounded"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[Number(pump.latitude), Number(pump.longitude)]}>
              <Popup>Pump 12345</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div>Loading pump location...</div>
        )}
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
            <PressureChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpPage;

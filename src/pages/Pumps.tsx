import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import type { PumpType } from "../types";
import PumpList from "../components/Pump/PumpList";
import { createPump, deletePump, getPumps, updatePump } from "../api/PumpApi";
import ModalDialog from "../components/Modal/ModalDialog";
import { PumpForm } from "../components/Pump/PumpForm";

const OverviewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pumps, setPumps] = useState<PumpType[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPump, setNewPump] = useState<PumpType>({
    id: 0,
    tenantId: 1, // required
    name: "",
    type: "",
    areaBlock: "",
    latitude: 0,
    longitude: 0,
    flowRate: 0,
    offset: "0",
    currentPressure: 0,
    minPressure: 0,
    maxPressure: 0,
  });
  const handleEditPump = async (updatedPump: PumpType) => {
    try {
      await updatePump(updatedPump);
      setPumps((prevPumps) =>
        prevPumps.map((pump) =>
          pump.id === updatedPump.id ? updatedPump : pump
        )
      );
    } catch (error: any) {
      console.error("Failed to update pump:", error.message || error);
    }
  };
  const handleDeletePump = async (pumpId: number) => {
    try {
      await deletePump(pumpId);
      setPumps((prevPumps) => prevPumps.filter((pump) => pump.id !== pumpId));
    } catch (error: any) {
      console.error("Failed to delete pump:", error.message || error);
    }
  };
  const openCreateModal = () => {
    setNewPump({
      id: 0,
      tenantId: 1, // required
      name: "",
      type: "",
      areaBlock: "",
      latitude: 0,
      longitude: 0,
      flowRate: 0,
      offset: "0",
      currentPressure: 0,
      minPressure: 0,
      maxPressure: 0,
    });
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setNewPump((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleCreatePump = async () => {
    try {
      await createPump({
        tenantId: newPump.tenantId,
        name: newPump.name,
        type: newPump.type,
        areaBlock: newPump.areaBlock,
        latitude: newPump.latitude,
        longitude: newPump.longitude,
        flowRate: newPump.flowRate,
        offset: newPump.offset,
        currentPressure: newPump.currentPressure,
        minPressure: newPump.minPressure,
        maxPressure: newPump.maxPressure,
      });
      setPumps((prev) => [...prev, newPump]);
      closeCreateModal();
    } catch (error: any) {
      console.error("Failed to create pump:", error.message || error);
    }
  };
  const filteredPumps = pumps.filter(
    (pump) =>
      pump.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pump.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pump.areaBlock.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPumps();
      setPumps(data);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-5xl py-12">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Pumps</div>
        <button
          className="bg-gray-300 rounded-xl w-28 text-center py-2"
          onClick={openCreateModal}
        >
          New Pump
        </button>
      </div>
      <ModalDialog
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        title="Create New Pump"
      >
        <PumpForm pump={newPump} onChange={handleCreateChange} />
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-gray-200 rounded px-4 py-2"
            onClick={closeCreateModal}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white rounded px-4 py-2"
            onClick={handleCreatePump}
          >
            Save
          </button>
        </div>
      </ModalDialog>
      <div className="flex items-center py-4 px-1">
        <Search className="-mr-7" />
        <input
          type="text"
          placeholder="Search by Pump Name, Type, or Area"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded pl-8 py-1 w-1/3"
        />
      </div>
      <div className="rounded border border-gray-300">
        <div className="w-full flex items-center py-2 px-4">
          <div className="w-[9%]">
            Pump <br />
            Name
          </div>
          <div className="w-[9%]">Type</div>
          <div className="w-[9%]">Area/Block</div>
          <div className="w-[9%]">Latitude</div>
          <div className="w-[9%]">Longitude</div>
          <div className="w-[9%]">Flow Rate</div>
          <div className="w-[9%]">Offset</div>
          <div className="w-[9%]">Current Pressure</div>
          <div className="w-[9%]">Min Pressure</div>
          <div className="w-[9%]">Max Pressure</div>
          <div className="w-[10%]">Actions</div>
        </div>
        <PumpList
          pumps={filteredPumps}
          onEdit={handleEditPump}
          onDelete={handleDeletePump}
        />
      </div>
    </div>
  );
};

export default OverviewPage;

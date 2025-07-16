import type { PumpFormProps } from "../../types";

export function PumpForm({ pump, onChange }: PumpFormProps) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div>
        <label className="block " htmlFor="name">
          Pump Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={pump?.name}
          onChange={onChange}
          className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
          placeholder="Pump Name"
        />
      </div>
      <div>
        <label className="block" htmlFor="type">
          Pump Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={pump?.type}
          onChange={onChange}
          className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
          placeholder="Pump Type"
        />
      </div>
      <div>
        <label className="block" htmlFor="areaBlock">
          Area
        </label>
        <input
          type="text"
          id="areaBlock"
          name="areaBlock"
          value={pump?.areaBlock}
          onChange={onChange}
          className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
          placeholder="Area Block"
        />
      </div>
      <div>
        <div>Latitude/Longitude</div>
        <div className="flex justify-between gap-12">
          <input
            type="number"
            id="latitude"
            name="latitude"
            value={pump?.latitude}
            onChange={onChange}
            className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
            placeholder="0"
          />
          <input
            type="number"
            id="longitude"
            name="longitude"
            value={pump?.longitude}
            onChange={onChange}
            className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
            placeholder="0"
          />
        </div>
      </div>
      <div>
        <label className="block" htmlFor="areaBlock">
          Offset
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="offset"
            name="offset"
            value={pump?.offset}
            onChange={onChange}
            className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
            placeholder="0"
          />
          <div className="-ml-8">sec</div>
        </div>
      </div>
      <div>
        <div>Reassure Min / Max</div>
        <div className="flex justify-between gap-12">
          <div className="flex items-center">
            <input
              type="text"
              id="minPressure"
              name="minPressure"
              value={pump?.minPressure}
              onChange={onChange}
              className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
              placeholder="0"
            />
            <div className="-ml-8">psi</div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              id="maxPressure"
              name="maxPressure"
              value={pump?.maxPressure}
              onChange={onChange}
              className="w-full px-2 py-1 outline-none border-none bg-gray-200 rounded"
              placeholder="0"
            />
            <div className="-ml-8">psi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

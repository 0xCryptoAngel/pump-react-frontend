import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ time: '00:00', pressure: 112 },
	{ time: '01:00', pressure: 143 },
	{ time: '02:00', pressure: 122 },
	{ time: '03:00', pressure: 97 },
	{ time: '04:00', pressure: 138 },
	{ time: '05:00', pressure: 103 },
	{ time: '06:00', pressure: 157 },
	{ time: '07:00', pressure: 121 },
	{ time: '08:00', pressure: 145 },
	{ time: '09:00', pressure: 88 },
	{ time: '10:00', pressure: 149 },
	{ time: '11:00', pressure: 117 },
	{ time: '12:00', pressure: 136 },
	{ time: '13:00', pressure: 106 },
	{ time: '14:00', pressure: 130 },
	{ time: '15:00', pressure: 155 },
	{ time: '16:00', pressure: 124 },
	{ time: '17:00', pressure: 160 },
	{ time: '18:00', pressure: 98 },
];

const PressureChart: React.FC = () => {
	return (
		<div className="py-6 bg-white">
			<div className="mb-4">
				<h2 className="text-sm text-gray-500">Pressure (PSI)</h2>
				<div className="text-3xl font-semibold text-gray-800">150</div>
				<div className="text-sm text-green-600">Last 24 Hours +5%</div>
			</div>

			<div className="h-64">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<XAxis dataKey="time" stroke="#94a3b8" />
						<YAxis hide />
						<Tooltip
							contentStyle={{
								backgroundColor: 'white',
								borderRadius: '0.5rem',
								borderColor: '#e5e7eb',
							}}
							labelStyle={{ color: '#64748b' }}
							cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }}
						/>
						<Line
							type="monotone"
							dataKey="pressure"
							stroke="#64748b"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default PressureChart;

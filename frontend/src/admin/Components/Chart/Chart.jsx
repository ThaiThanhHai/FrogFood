import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

const data = [
  { name: "Tháng 1", Total: 1200 },
  { name: "Tháng 2", Total: 2100 },
  { name: "Tháng 3", Total: 800 },
  { name: "Tháng 4", Total: 1600 },
  { name: "Tháng 5", Total: 900 },
  { name: "Tháng 6", Total: 1700 },
  { name: "Tháng 7", Total: 2700 },
  { name: "Tháng 8", Total: 1000 },
  { name: "Tháng 9", Total: 700 },
  { name: "Tháng 10", Total: 500 },
  { name: "Tháng 11", Total: 2700 },
  { name: "Tháng 12", Total: 100 },
];

const Chart = ({}) => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#51873e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#51873e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#51873e" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#51873e"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

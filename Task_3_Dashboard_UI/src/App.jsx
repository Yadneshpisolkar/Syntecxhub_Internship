import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

const revenueData = [
  { week: "W1", revenue: 1200 },
  { week: "W2", revenue: 2100 },
  { week: "W3", revenue: 1800 },
  { week: "W4", revenue: 2800 },
];

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>

        <ul>
          <li>Overview</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Customers</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <h1>Business Dashboard</h1>

          <div className="filters">
            <select>
              <option>All Regions</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>

            <input type="date" />
          </div>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>Total Revenue</h3>
            <p>₹1,25,000</p>
          </div>

          <div className="kpi-card">
            <h3>Orders</h3>
            <p>850</p>
          </div>

          <div className="kpi-card">
            <h3>Customers</h3>
            <p>1,250</p>
          </div>

          <div className="kpi-card">
            <h3>Growth</h3>
            <p>+15%</p>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3>Sales Trend</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Revenue Analysis</h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="details-card">
          <h3>Drill-in Details</h3>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>iPhone 15</td>
                <td>120</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Samsung S24</td>
                <td>95</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>OnePlus 12</td>
                <td>80</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>Pixel 9</td>
                <td>75</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
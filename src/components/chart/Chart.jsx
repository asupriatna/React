import { ResponsiveContainer, LineChart, Line,XAxis, YAxis, Tooltip, CartesianGrid, Legend  } from 'recharts';
import "./chart.css"
export default function Chart({title, data,dataKey,grid}) {
 
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <XAxis dataKey="name" stroke = "#5550bd"/>
                    <YAxis />
                    <Tooltip/>
                    {grid && < CartesianGrid strokeDasharray="3 3"/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

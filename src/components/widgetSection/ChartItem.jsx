import React from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";

const ChartItem = () => {
    const data = [
        {
            time: 2023,
            value: 1
        },
        {
            time: 2024,
            value: 2
        },
        {
            time: 2025,
            value: 3
        },
        {
            time: 2026,
            value: 4
        },
        {
            time: 2027,
            value: 5
        }
    ];
    return (
        <>
            <pre>
                <ResponsiveContainer width="100%" height={150} >
                    <AreaChart data={data}>
                        <Area dataKey="value" />
                        <XAxis dataKey="time" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
            </pre>
        </>
    );
};

export default ChartItem;
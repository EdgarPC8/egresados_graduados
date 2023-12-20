import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
import {
    Box,
    Heading,
    Flex,
    Text,
} from "@chakra-ui/react";
import {
    getProfesionalsCareers,
} from "../api/chartsResquest.js";
import { useEffect, useState, useRef } from "react";

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 200 },
    { name: 'A3', value: 100 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function ChartsCareers() {
    const [ListGroupCareers, setListGroupCareers] = useState([]);


    async function fetchData() {
        try {
            const { data } = await getProfesionalsCareers();
            let countCareers = {};
            data.forEach(career => {
                countCareers[career.career] = (countCareers[career.career] || 0) + 1;
            });
            // Crear un array de objetos con el nombre de la carrera y la cantidad
            let careersCountArray = Object.keys(countCareers).map(career => {
                return { name: career, value: countCareers[career] };
            });

            console.log(data);
            setListGroupCareers(careersCountArray)

        } catch (error) {
            console.error("Error al obtener datos académicos:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <Heading textAlign={"center"}>
                Representacion grafica de las carreras
            </Heading>
            <Flex justifyContent="center" alignItems="center" mt={5}>
                <Box>
                    <Flex direction="column">
                        <Heading size="sm">Leyenda</Heading>
                        {data01.map((entry, index) => (
                            <Flex align="center" key={`legend-${index}`} mb={2}>
                                <Box w="20px" h="20px" bg={COLORS[index % COLORS.length]} mr={2} borderRadius="4px" />
                                <Text fontSize="sm">{entry.name}({entry.value})</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
                <Box ml={5} width="xl">
                    <Heading size="sm" textAlign={"center"}>Gráfico</Heading>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={ListGroupCareers}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={90}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {ListGroupCareers.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#82ca9d" label>
                        </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </Flex>
        </Box>
    );
}

export default ChartsCareers;





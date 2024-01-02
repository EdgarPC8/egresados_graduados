import { Badge, Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getLogs } from "../api/logsRequest";
import Tabl from "../components/Table";

function Logger() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      const { data } = await getLogs();
      setLogs(data);
    };

    loadLogs();
  }, []);

  const colorsBadge = {
    PUT: "yellow",
    DELETE: "red",
    POST: "green",
  };

  const columns = [
    {
      header: "Método http",
      accessorKey: "httpMethod",
      cell: (props) => (
        <Badge colorScheme={colorsBadge[props.row.original.httpMethod]}>
          {props.row.original.httpMethod}
        </Badge>
      ),
    },
    {
      header: "Punto de acceso",
      accessorKey: "endPoint",
    },
    {
      header: "Acción",
      accessorKey: "action",
    },
  ];

  return (
    <Box p={10}>
      <Heading>Actividad del sitio</Heading>
      <Tabl data={logs} columns={columns} />
    </Box>
  );
}

export default Logger;

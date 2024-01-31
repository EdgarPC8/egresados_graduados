import { Badge, Box, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getLogs } from "../api/logsRequest";
import Tabl from "../components/Table";
import { backup } from "../api/configResquest";
import { saveAs } from 'file-saver'; 

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

  const handleBackup = async () => {
    try {
      const { data } = await backup();
  
      // Lógica para guardar el archivo en una carpeta específica
      saveFileToFolder(data, './');
  
      // Puedes mostrar un mensaje de éxito o realizar otras acciones aquí
    } catch (error) {
      console.error("Error al realizar la copia de seguridad:", error);
    }
  };

  const saveFileToFolder = (fileData, folderPath) => {
    const blob = new Blob([JSON.stringify(fileData, null, 2)], { type: 'application/json' });
    const fileName = `backup_alumni${Date.now()}.json`;
    const filePath = `${folderPath}/${fileName}`;
  
    // Usa la librería file-saver para guardar el archivo
    saveAs(blob, filePath);
  };

  return (
    <Box p={10}>
      <Heading>Actividad del sitio</Heading>

      <Button onClick={handleBackup} colorScheme="blue" my={4}>
        Realizar Copia de Seguridad
      </Button>

      <Tabl data={logs} columns={columns} />
    </Box>
  );
}

export default Logger;

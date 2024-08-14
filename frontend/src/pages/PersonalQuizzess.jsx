import { Box, Button, Center, Badge } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { useAuth } from "../context/AuthContext";

import Tabl from "../components/Table";
import { getQuizzesProfessional } from "../api/quizResquest";
import { useNavigate } from "react-router-dom";

function PersonalQuizzes() {
  const { user } = useAuth();
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      header: "#",
      accessorKey: "id",
      cell: (props) => props.row.index + 1,
    },
    {
      header: "Titulo",
      accessorKey: "title",
    },
    {
      header: "Descripcion",
      accessorKey: "description",
    },
    {
      header: "Fecha",
      accessorKey: "date",
    },
    {
      header: "Estado",
      accessorKey: "Status",
      cell: (props) => {
        const completed = props.cell.row.original.matriz_quizzes.completed;
        // console.log(completed);

        if (completed != 0) {
          return (
            <Center>
              <Badge colorScheme={"green"}>{"Completada"}</Badge>
            </Center>
          );
        } else {
          return (
            <Center>
              <Button
                colorScheme={"green"}
                onClick={() => {
                  navigate(
                    `/encuesta/f/${props.cell.row.original.idQuiz}/matriz/${props.cell.row.original.matriz_quizzes.idMatriz}`,
                  );
                }}
              >
                Llenar
              </Button>
            </Center>
          );
        }
      },
    },
  ];

  useEffect(() => {
    const fetching = async () => {
      const { data } = await getQuizzesProfessional(user.userId);
      setQuizzes(data);
    };
    fetching();
  }, []);

  return (
    <Box padding={10}>
      <Tabl data={quizzes} columns={columns} />
    </Box>
  );
}

export default PersonalQuizzes;

import { Box, Button, Center, Badge, useToast } from "@chakra-ui/react";
import { useState, useRef } from "react";

import { useAuth } from "../context/AuthContext";

import Tabl from "../components/Table";

function Quizz() {
  const toast = useToast();

  const form = useRef(null);
  const { user } = useAuth();
  const [Quizzes, setQuizzes] = useState([]);
  const [IsCompleteing, setIsCompleteing] = useState(false);
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
                  handleQuiz(props.row.original);
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
  const handleQuiz = (row) => {
    setIsCompleteing(true);
    setIdQuiz(row.matriz_quizzes.quizId);
    setIdMatriz(row.matriz_quizzes.idMatriz);
    // console.log(row)
  };

  const handleSubmit = async (e) => {};
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProfessional({ ...formProfessional, [name]: value });
  };

  return (
    <Box>
      <Tabl data={Quizzes} columns={columns} />
    </Box>
  );
}

export default Quizz;

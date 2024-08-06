import {
  Heading,
  Button,
  ButtonGroup,
  Box,
  Grid,
  GridItem,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneQuiz, createQuiz } from "../api/quizResquest";
import { useState } from "react";
import Question from "../components/Question";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { FiSend } from "react-icons/fi";
function DocumentQuiz() {
  const toast = useToast();
  const { idQuiz } = useParams();
  const [documentQuiz, setDocumentQuiz] = useState({});
  const [focusQuestionId, setFocusQuestionId] = useState(0);

  const [questions, setQuestions] = useState([
    {
      options: [
        {
          id: 1,
          name: "option1",
          value: "Opción 1",
        },
      ],
      question: { name: "question-0", value: "" },
      typeInput: { type: "radio", name: "Varias opciones" },
    },
  ]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        options: [
          {
            id: prev.length,
            name: `option1-question-${prev.length}`,
            value: "Opción 1",
          },
        ],
        question: { name: `question-${prev.length}`, value: "" },
        typeInput: { type: "radio", name: "Varias opciones" },
        response: {},
      },
    ]);
  };

  const removeOption = (idQuestion, idOption) => {
    setQuestions((prev) =>
      prev.map((question, id) =>
        id === idQuestion
          ? {
              ...question,
              options: question.options.filter(
                (option) => option.id !== idOption,
              ),
            }
          : question,
      ),
    );
  };

  const addOption = (idQuestion, idOption) => {
    setQuestions((prev) =>
      prev.map((question, id) =>
        id === idQuestion
          ? {
              ...question,
              options: [
                ...question.options,
                {
                  name: `option${idOption}-question-${idQuestion}`,
                  value: `Opción ${idOption}`,
                  id: idOption,
                },
              ],
            }
          : question,
      ),
    );
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const typeInputsQuestion = [
    {
      id: 1,
      name: "Varias opciones",
      type: "radio",
    },

    {
      id: 2,
      name: "Respuesta corta",
      type: "input",
    },

    {
      id: 3,
      name: "Parrafo",
      type: "textarea",
    },
  ];

  const onChangeOption = (event, idOption, idQuestion) => {
    const { value } = event;

    setQuestions(
      questions.map((question, id) =>
        id === idQuestion
          ? {
              ...question,
              options: question.options.map((option) =>
                option.id === idOption ? { ...option, value } : option,
              ),
            }
          : question,
      ),
    );
  };
  //

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = Object.fromEntries(new FormData(event.target));
      const questionsGroup = [];
      Object.entries(formData).forEach(([name, value]) => {
        const k = name.split("-");

        const questionId = k.pop();

        if (!questionsGroup[questionId]) {
          questionsGroup[questionId] = {
            options: [],
            question: {},
            typeInput: {},
            response: {},
          };
        }

        if (name.startsWith("typeInput") && name.endsWith(questionId)) {
          questionsGroup[questionId].typeInput = {
            type: name.split("-")[2],
            name: value,
          };
        }

        if (name.startsWith(`question-${questionId}`)) {
          questionsGroup[questionId].question = { name, value };
        }

        if (
          (name.startsWith("option") &&
            name.endsWith(`question-${questionId}`)) ||
          name.startsWith("response-question")
        ) {
          questionsGroup[questionId].options.push({
            name,
            value,
            id: questionsGroup[questionId].options.length + 1,
          });
        }
      });

      const data = {
        idQuiz: documentQuiz.idQuiz,
        title: documentQuiz.title,
        questionsGroup,
      };

      console.log(questionsGroup);

      toast.promise(createQuiz(documentQuiz.idQuiz, data), {
        loading: {
          title: "Editando...",
          position: "top-right",
        },

        success: {
          title: "Encuesta",
          description: "Encuesta agregada con éxito",
          isClosable: true,
        },
        error: {
          title: "Encuesta",
          description: "Acaba de ocurrir un error",
          isClosable: true,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeTypeQuestion = ({ type, idQuestion, name }) => {
    setQuestions((prev) =>
      prev.map((question, id) =>
        id === idQuestion
          ? {
              ...question,
              typeInput: { type, name },
            }
          : question,
      ),
    );
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      const { data } = await getOneQuiz(idQuiz);

      setDocumentQuiz(data);
      if (data.document) {
        setQuestions(data.document.questionsGroup);
      }
    };
    if (idQuiz) {
      fetchQuiz();
    }
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      paddingBottom={6}
    >
      <Grid w={"60%"} gap={5} as="form" onSubmit={handleSubmit}>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderTop="8px"
          borderTopColor="ceruleanBlue.500"
          borderRight="1px"
          borderRightColor="gray.300"
          borderBottom="1px"
          borderBottomColor="gray.300"
          borderLeft="1px"
          borderLeftColor="gray.300"
          padding={5}
          borderRadius="md"
        >
          <Heading>{documentQuiz?.title}</Heading>
          <Button type="submit" rightIcon={<FiSend />}>
            Enviar
          </Button>
        </GridItem>
        {questions.map((question, index) => (
          <GridItem
            key={index}
            borderLeft={focusQuestionId === index ? "4px" : "1px"}
            borderLeftColor={
              focusQuestionId === index ? "ceruleanBlue.500" : "gray.300"
            }
            borderRight="1px"
            borderRightColor="gray.300"
            borderBottom="1px"
            borderBottomColor="gray.300"
            borderTop="1px"
            borderTopColor="gray.300"
            padding={5}
            onFocus={() => setFocusQuestionId(index)}
            borderRadius="md"
          >
            <Question
              name={question.question.name}
              value={question.question.value}
              typeInput={question.typeInput}
              id={index}
              onChangeTypeQuestion={onChangeTypeQuestion}
              typeInputsQuestion={typeInputsQuestion}
              options={
                documentQuiz.document
                  ? question.options
                  : question.options.map((option) => ({
                      ...option,
                      name: `${option.name}-question-${index}`,
                    }))
              }
              onChangeOption={(e, idOption) =>
                onChangeOption(e, idOption, index)
              }
              addOption={addOption}
              removeOption={removeOption}
            />

            <Box mt={3} display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="Add to friends"
                icon={<DeleteIcon />}
                onClick={() => removeQuestion(index)}
              />
            </Box>
          </GridItem>
        ))}

        <ButtonGroup>
          <IconButton
            aria-label="Add to friends"
            icon={<AddIcon />}
            onClick={addQuestion}
          />
        </ButtonGroup>
      </Grid>
    </Box>
  );
}
export default DocumentQuiz;

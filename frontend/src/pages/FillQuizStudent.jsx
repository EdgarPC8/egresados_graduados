import {
  Box,
  Grid,
  GridItem,
  Stack,
  Heading,
  Button,
  Text,
  FormControl,
  FormLabel,
  RadioGroup,
  Input,
  Radio,
  Flex,
  Textarea,
  useToast,
  Checkbox,
  CheckboxGroup,
  Spinner,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addAnswersQuizStudent,
  // getOneQuiz,
  verifyQuizCompletedStudent,
} from "../api/matriculaResquest";
import {
  getOneQuiz,
} from "../api/quizResquest";

function FillQuiz() {
  const toast = useToast();
  const navigate = useNavigate();
  const { quizId, studentId } = useParams();
  const [quiz, setQuiz] = useState({});
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchOneQuiz = async () => {
      const { data } = await getOneQuiz(quizId);
      setQuiz(data);
      setAnswers({
        idQuiz: quizId,
        title: data.title,
        answers: [],
      });
    };

    const verifyIsCompleted = async () => {
      const { data } = await verifyQuizCompletedStudent({ quizId, studentId });
      if (!data.completed) {
        fetchOneQuiz();
        setLoading(false);
        setCompleted(false);
        return;
      }
      setLoading(false);
      setCompleted(true);
    };

    verifyIsCompleted();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(addAnswersQuizStudent({ studentId, quizId, data: answers }), {
      loading: {
        title: "Editando...",
        position: "top-right",
      },

      success: (r) => ({
        title: "Encuesta",
        description: r.data.message,
        isClosable: true,
      }),
      error: (e) => ({
        title: "Encuesta",
        description: e.message,
        isClosable: true,
      }),
    });

    navigate("/sus-encuestas");
  };

  const onChangeValueInput = ({ event, question, questionId, type }) => {
    const { value } = event.target;
    setAnswers((prev) => {
      const updated = [...prev.answers];
      updated[questionId] = { question, answer: value, type };

      return {
        ...prev,
        answers: updated,
      };
    });
  };

  const onChangeValueOption = ({ answer, questionId, question, type }) => {
    setAnswers((prev) => {
      const updated = [...prev.answers];
      updated[questionId] = { question, answer, type };

      return {
        ...prev,
        answers: updated,
      };
    });
  };

  if (loading) {
    return (
      <Center mt={20} color="ceruleanBlue.600">
        <Spinner />
      </Center>
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      paddingBottom={6}
    >
      {completed ? (
        <Stack w={"60%"}>
          <Alert status="info">
            <AlertIcon />
            Esta encuesta ya ha sido llenada
          </Alert>
        </Stack>
      ) : (
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
            <Stack>
              <Heading>{quiz.title}</Heading>
              <Text fontSize="xl">{quiz.description}</Text>
            </Stack>
          </GridItem>
          {quiz.document?.map(({ question, typeInput, options }, index) => (
            <GridItem
              key={index}
              border="1px"
              borderColor="gray.300"
              padding={5}
              borderRadius="md"
            >
              {typeInput.type === "radio" && (
                <FormControl as="fieldset">
                  <FormLabel as="legend">{question.value}</FormLabel>
                  <RadioGroup
                    mt={3}
                    onChange={(e) =>
                      onChangeValueOption({
                        question: question.value,
                        answer: e,
                        questionId: index,
                        type: typeInput.type,
                      })
                    }
                  >
                    <Flex direction="column" gap={3}>
                      {options.map((option, i) => (
                        <Radio key={i} value={option.value} name={option.name}>
                          {option.value}
                        </Radio>
                      ))}
                    </Flex>
                  </RadioGroup>
                </FormControl>
              )}

              {typeInput.type === "checkbox" && (
                <FormControl>
                  <FormLabel as="legend">{question.value}</FormLabel>
                  <CheckboxGroup
                    colorScheme="messenger"
                    onChange={(e) =>
                      onChangeValueOption({
                        question: question.value,
                        answer: e,
                        questionId: index,
                        type: typeInput.type,
                      })
                    }
                  >
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Flex direction="column" gap={3}>
                        {options.map((option, i) => (
                          <Checkbox
                            key={i}
                            value={option.value}
                            name={option.name}
                          >
                            {option.value}
                          </Checkbox>
                        ))}
                      </Flex>
                    </Stack>
                  </CheckboxGroup>
                </FormControl>
              )}

              {typeInput.type === "input" && (
                <FormControl>
                  <FormLabel>{question.value}</FormLabel>
                  <Input
                    type={typeInput.type}
                    name={question.name}
                    onChange={(event) =>
                      onChangeValueInput({
                        event,
                        questionId: index,
                        type: typeInput.type,
                        question: question.value,
                      })
                    }
                    variant="flushed"
                  />
                </FormControl>
              )}

              {typeInput.type === "textarea" && (
                <FormControl>
                  <FormLabel>{question.value}</FormLabel>
                  <Textarea
                    name={question.name}
                    onChange={(event) =>
                      onChangeValueInput({
                        event,
                        questionId: index,
                        type: typeInput.type,
                        question: question.value,
                      })
                    }
                  />
                </FormControl>
              )}
            </GridItem>
          ))}
          <GridItem>
            <Button
              type="submit"
              bg="ceruleanBlue.600"
              color="white"
              _hover={{
                bg: "ceruleanBlue.500",
              }}
            >
              Enviar
            </Button>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default FillQuiz;

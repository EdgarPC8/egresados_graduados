import {
  Heading,
  Button,
  ButtonGroup,
  Box,
  Grid,
  GridItem,
  IconButton,
  useToast,
  Flex,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Sector,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ComposedChart,
} from "recharts";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneQuiz, createQuiz, getChartDataQuiz } from "../api/quizResquest";
import { useState } from "react";
import Question from "../components/Question";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { FiSend } from "react-icons/fi";
import { QUESTION_TYPES } from "../constants/questionTypes";

const RADIAN = Math.PI / 180;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`total: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function DocumentQuiz() {
  const toast = useToast();
  const { quizId } = useParams();
  const [documentQuiz, setDocumentQuiz] = useState({});
  const [focusQuestionId, setFocusQuestionId] = useState(0);
  const [questionsCharts, setQuestionsCharts] = useState({
    chartDataQuestions: [],
    filled: "",
  });
  const [loading, setLoading] = useState(true);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const [questions, setQuestions] = useState([
    {
      options: [
        {
          name: "option1-question-0",
          value: "Opción 1",
          id: 1,
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
            name: `option1-question-${prev.length}`,
            value: "Opción 1",
            id: prev.length,
          },
        ],
        question: { name: `question-${prev.length}`, value: "" },
        typeInput: { type: "radio", name: "Varias opciones" },
      },
    ]);
  };

  const removeOption = (idQuestion, idOption) => {
    setQuestions(
      questions.map((question, id) =>
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
      name: "Selección multiple",
      type: "checkbox",
    },

    {
      id: 3,
      name: "Respuesta corta",
      type: "input",
    },

    {
      id: 4,
      name: "Parrafo",
      type: "textarea",
    },
  ];

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      toast.promise(createQuiz(documentQuiz.idQuiz, questions), {
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
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeOptionInput = (event, idOption, idQuestion) => {
    const { value } = event.target;

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

  const onChangeQuestionInput = (event, idQuestion) => {
    const { value, name } = event.target;
    setQuestions((prev) =>
      prev.map((question, id) => {
        if (id !== idQuestion) {
          return question;
        }

        return {
          ...question,
          question: { name, value },
        };
      }),
    );
  };

  const onChangeTypeQuestion = ({ type, idQuestion, name }) => {
    setQuestions((prev) =>
      prev.map((question, id) => {
        if (id !== idQuestion) {
          return question;
        }

        if (type === QUESTION_TYPES.RADIO || type === QUESTION_TYPES.CHECKBOX) {
          return {
            ...question,
            typeInput: { type, name },
            options: [
              {
                name: `option1-question-${idQuestion}`,
                value: `Opción 1`,
                id: 1,
              },
            ],
          };
        }

        if (type === "input" || type === "textarea") {
          const { options, ...rest } = question;
          return {
            ...rest,
            typeInput: { type, name },
          };
        }
      }),
    );
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      const { data } = await getOneQuiz(quizId);

      setDocumentQuiz(data);

      if (data.document) {
        setQuestions(data?.document);
      }
    };
    if (quizId) {
      fetchQuiz();
    }
  }, []);

  const fetchDataCharts = () => {
    setLoading(true);
    getChartDataQuiz(quizId)
      .then(({ data }) => setQuestionsCharts(data))
      .catch((e) => console.error(e))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 2000),
      );
  };

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <Tabs
      isFitted
      onChange={(index) => {
        if (index === 1) {
          fetchDataCharts();
        }
      }}
    >
      <TabList>
        <Tab>Preguntas</Tab>
        <Tab>Respuestas</Tab>
      </TabList>

      <TabPanels>
        <TabPanel bg="blackAlpha.50">
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            paddingBottom={6}
          >
            <Grid w={"70%"} gap={5} as="form" onSubmit={handleSubmit}>
              <GridItem
                background="white"
                borderTop="8px"
                borderTopColor="ceruleanBlue.500"
                borderRight="1px"
                borderRightColor="gray.300"
                borderBottom="1px"
                borderBottomColor="gray.300"
                borderLeft="1px"
                borderLeftColor="gray.300"
                padding={5}
                alignContent={"end"}
                borderRadius="md"
              >
                <Stack>
                  <Heading>{documentQuiz.title}</Heading>
                  <Text fontSize="xl">{documentQuiz.description}</Text>
                </Stack>

                <Flex justify="flex-end">
                  <Button type="submit" rightIcon={<FiSend />}>
                    Enviar
                  </Button>
                </Flex>
              </GridItem>
              {questions.map((question, index) => (
                <GridItem
                  key={index}
                  borderLeft={focusQuestionId === index ? "4px" : "1px"}
                  borderLeftColor={
                    focusQuestionId === index ? "ceruleanBlue.500" : "gray.300"
                  }
                  backgroundColor="white"
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
                    onChangeQuestionInput={onChangeQuestionInput}
                    onChangeTypeQuestion={onChangeTypeQuestion}
                    typeInputsQuestion={typeInputsQuestion}
                    options={question.options}
                    addOption={addOption}
                    removeOption={removeOption}
                    onChangeOptionInput={onChangeOptionInput}
                  />

                  <Flex mt={3} justifyContent="flex-end">
                    <IconButton
                      aria-label="Add to friends"
                      icon={<DeleteIcon />}
                      onClick={() => removeQuestion(index)}
                    />
                  </Flex>
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
        </TabPanel>

        <TabPanel bg={!loading ? "blackAlpha.50" : "white"}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            paddingBottom={6}
          >
            {loading ? (
              <Spinner />
            ) : (
              <Grid w={"70%"} gap={5}>
                <GridItem
                  backgroundColor="white"
                  border="1px"
                  borderColor="gray.300"
                  padding={5}
                  borderRadius="md"
                >
                  {questionsCharts.filled ? (
                    <Text>{questionsCharts.filled} respuestas</Text>
                  ) : (
                    <Text>No existe ninguna respuesta</Text>
                  )}
                </GridItem>

                {questionsCharts.chartDataQuestions.map(
                  ({ question, type, data }, idx) => (
                    <GridItem
                      backgroundColor="white"
                      border="1px"
                      borderColor="gray.300"
                      padding={5}
                      borderRadius="md"
                      key={idx}
                    >
                      <Text mb={5}>{question}</Text>

                      {type === QUESTION_TYPES.RADIO && (
                        <ResponsiveContainer width="100%" height={400}>
                          <PieChart>
                            <Pie
                              data={data}
                              activeIndex={data.map((_, index) => index)}
                              activeShape={renderActiveShape}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              label={renderCustomizedLabel}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {data.map((_, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Legend
                              layout="vertical"
                              verticalAlign="middle"
                              wrapperStyle={style}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                      {type === QUESTION_TYPES.CHECKBOX && (
                        <ResponsiveContainer width="100%" height={400}>
                          <PieChart>
                            <Pie
                              data={data}
                              activeShape={renderActiveShape}
                              activeIndex={data.map((_, index) => index)}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {data.map((_, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Legend
                              layout="vertical"
                              verticalAlign="middle"
                              wrapperStyle={style}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      )}

                      {(type === QUESTION_TYPES.TEXTAREA ||
                        type === QUESTION_TYPES.INPUT) && (
                        <ResponsiveContainer width="100%" height={400}>
                          <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                              top: 20,
                              right: 20,
                              bottom: 20,
                              left: 20,
                            }}
                            barSize={20}
                          >
                            <XAxis type="number" />
                            <YAxis
                              dataKey="name"
                              type="category"
                              scale="band"
                            />

                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar
                              dataKey="value"
                              fill="#8884d8"
                              barSize={20}
                              background={{ fill: "#eee" }}
                            />
                          </ComposedChart>
                        </ResponsiveContainer>
                      )}
                    </GridItem>
                  ),
                )}
              </Grid>
            )}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default DocumentQuiz;

import { Matriz, MatrizQuiz } from "../Models/Matriz.js";
import { Quiz } from "../Models/Quiz.js";
const QUESTION_TYPES = {
  INPUT: "input",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  TEXTAREA: "textarea",
};

export const getOneQuiz = async (req, res) => {
  try {
    const { document, idQuiz, title, date, description } = await Quiz.findOne({
      where: {
        idQuiz: req.params.idQuiz,
      },
    });

    res.json({
      idQuiz,
      title,
      date,
      description,
      document: JSON.parse(document),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getChartDataQuiz = async (req, res) => {
  try {
    const { idQuiz } = req.params;
    const ans = await MatrizQuiz.findAll({
      attributes: [["answers", "quiz"]],
      where: {
        quizId: idQuiz,
        completed: 1,
      },
    });

    if (!ans.length) {
      return res.status(404).json({
        message: "No existe ninguna respuesta",
      });
    }

    const { document } = await Quiz.findOne({
      where: {
        idQuiz,
      },
    });

    const questions = JSON.parse(document);
    const chartDataQuestions = questions.map(({ question }) => {
      if (question.typeInput.type === QUESTION_TYPES.RADIO) {
        return {
          question: question.title,
          type: question.typeInput.type,
          data: question.options.map((option) => ({
            name: option.value,
            value: 0,
          })),
        };
      }
      if (question.typeInput.type === QUESTION_TYPES.CHECKBOX) {
        return {
          question: question.title,
          type: question.typeInput.type,
          data: question.options.map((option) => ({
            name: option.value,
            value: 0,
          })),
        };
      }

      return {
        question: question.title,
        type: question.typeInput.type,
        data: [],
      };
    });

    const answers = ans.map((answer) => ({
      quiz: JSON.parse(answer.dataValues.quiz),
    }));

    const textValues = new Set();

    answers.map(({ quiz }) => {
      quiz.answers.forEach((answer, index) => {
        if (answer.type === QUESTION_TYPES.RADIO) {
          questions[index]?.question.options.forEach((option, id) => {
            if (option.value === answer.answer) {
              chartDataQuestions[index].data[id].value += 1;
            }
          });
        }

        if (answer.type === QUESTION_TYPES.CHECKBOX) {
          questions[index]?.question.options.forEach((option, id) => {
            if (answer.answer.includes(option.value)) {
              chartDataQuestions[index].data[id].value += 1;
            }
          });
        }
        //
        if (
          answer.type === QUESTION_TYPES.TEXTAREA ||
          answer.type === QUESTION_TYPES.INPUT
        ) {
          if (textValues.has(answer.answer)) {
            chartDataQuestions[index].data.forEach(
              (_, i) => (chartDataQuestions[index].data[i].value += 1),
            );
            return;
          }

          textValues.add(answer.answer);
          chartDataQuestions[index].data.push({
            name: answer.answer,
            value: 1,
          });
        }
      });
    });

    const filled = await MatrizQuiz.count({
      where: {
        quizId: idQuiz,
        completed: 1,
      },
    });

    res.json({ chartDataQuestions, filled });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyQuizCompleted = async (req, res) => {
  try {
    const { matrizId, quizId } = req.query;
    const completed = await MatrizQuiz.findOne({
      attributes: ["completed"],
      where: {
        idMatriz: matrizId,
        quizId,
      },
    });
    res.json(completed);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getQuizzesProfessional = async (req, res) => {
  try {
    const { idProfessional } = req.params;
    const quizzes = await Matriz.findAll({
      attributes: [],
      include: [
        {
          model: Quiz,
          attributes: ["idQuiz", "title", "description", "date"],
        },
      ],
      where: {
        idProfessional: idProfessional,
      },
    });

    res.json(quizzes[0]?.quizzes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addAnswersQuiz = async (req, res) => {
  try {
    const { quizId, matrizId } = req.query;
    await MatrizQuiz.update(
      {
        answers: req.body,
        completed: 1,
      },
      {
        where: {
          idMatriz: matrizId,
          quizId,
        },
      },
    );
    res.json({ message: "Encuesta completada con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQuestionsQuiz = async (req, res) => {
  const { idQuiz } = req.params;
  const data = req.body;

  try {
    await Quiz.update(
      {
        document: data,
      },
      {
        where: {
          idQuiz,
        },
      },
    );

    res.json({ message: "Encuesta agregado con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllQuizzes = async (req, res) => {
  const data = await Quiz.findAll();
  res.json(data);
};

export const addQuiz = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    await Quiz.create(data);
    res.json({ message: "Agregado con éxito" });
    // logger({
    //   httpMethod: req.method,
    //   endPoint: req.originalUrl,
    //   action: "Se agrego la encuesta",
    // });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const editQuiz = async (req, res) => {
  try {
    const data = req.body;
    const quiz = req.params;
    await Quiz.findOne({
      where: {
        idQuiz: quiz.idQuiz,
      },
    });

    await Quiz.update(data, {
      where: {
        idQuiz: quiz.idQuiz,
      },
    });

    res.json({ message: "Encuesta Editada con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

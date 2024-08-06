import { Responses, Quiz } from "../Models/Quiz.js";
import fs from "fs/promises";
import fileDirName from "../libs/file-dirname.js";
import { join } from "path";
const { __dirname } = fileDirName(import.meta);

export const getOneQuiz = async (req, res) => {
  try {
    const { idQuiz } = req.params;

    const oneQuiz = await Quiz.findOne({
      where: {
        idQuiz,
      },
    });

    let document = null;

    try {
      const data = await fs.readFile(
        new URL(
          join(__dirname, `../../quizzes/quiz-${idQuiz}-${oneQuiz.title}.json`),
          import.meta.url,
        ),
        "utf8",
      );
      document = JSON.parse(data);
    } catch (fileError) {
      if (fileError.code === "ENOENT") {
        console.warn(`Archivo no encontrado`);
      } else {
        throw fileError;
      }
    }

    res.json({ ...oneQuiz.dataValues, document });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateQuestionsQuiz = async (req, res) => {
  const { idQuiz } = req.params;
  const { title } = req.body;

  const jsonData = JSON.stringify(req.body, null, 2);
  await fs.writeFile(
    join(__dirname, `../../quizzes/quiz-${idQuiz}-${title}.json`),
    jsonData,
    "utf8",
  );

  // si existe no actualiza el nombre de la encuesta;
  try {
    await fs.access(
      join(__dirname, `../../quizzes/quiz-${idQuiz}-${title}.json`),
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("La encuesta no existe, agregar nombre en la db");
      await Quiz.update(
        {
          document: `quiz-${idQuiz}-${title}.json`,
        },
        {
          where: {
            idQuiz,
          },
        },
      );
    }
  }

  res.json({ message: "Cuestionario agregado con éxito" });
};

export const getAllQuizzes = async (req, res) => {
  const data = await Quiz.findAll();
  res.json(data);
};

export const addQuiz = async (req, res) => {
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const newResponses = await Quiz.create(data);
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
  const data = req.body; // Suponiendo que los datos están en el cuerpo de la solicitud
  try {
    const data = req.body;
    const quiz = req.params;
    const prevDocumentName = await Quiz.findOne({
      where: {
        idQuiz: quiz.idQuiz,
      },
    });

    await Quiz.update(
      {
        ...data,
        document: `quiz-${quiz.idQuiz}-${data.title}.json`,
      },
      {
        where: {
          idQuiz: quiz.idQuiz,
        },
      },
    );

    await fs.rename(
      join(
        __dirname,
        `../../quizzes/quiz-${prevDocumentName.idQuiz}-${prevDocumentName.title}.json`,
      ),
      join(__dirname, `../../quizzes/quiz-${quiz.idQuiz}-${data.title}.json`),
    );

    res.json({ message: "Encuesta Editada con éxito" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

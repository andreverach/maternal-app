import { QuestionnaireDto } from "../interfaces/questionnaire";
import { ResponseDto } from "../interfaces/response";
import { UserDataSelected } from "../interfaces/user.data";

export const questionListEnglish : QuestionnaireDto[] = [
    {
      title: "1.	I found it hard to wind down",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    },
    {
      title: "2.	I was aware of dryness of my mouth",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    },
    {
      title: "3.	I couldn't seem to experience any positive feeling at all",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    },
    {
      title: "4.	I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    },
    {
      title: "5.	I found it difficult to work up the initiative to do things",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    },
    {
      title: "6.	I tended to over-react to situations",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ],
      answerSelected: -1
    }
];
export const questionListSpanish : QuestionnaireDto[] = [
    {
      title: "1.	Me ha costado mucho descargar la tensión",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
    {
      title: "2.	Me di cuenta que tenía la boca seca",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
    {
      title: "3.	No podía sentir ningún sentimiento positivo",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
    {
      title: "4.	Se me hizo difícil respirar",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
    {
      title: "5.	Se me hizo difícil tomar la iniciativa para hacer cosas",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
    {
      title: "6.	Reaccioné exageradamente en ciertas situaciones",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ],
      answerSelected: -1
    },
];

export const languages : string[] = [
  "Spanish",
  "English"
];


export const dataUserSelected: UserDataSelected = {
  language: 'English',
  name: ""
};

export const dataResponseC: ResponseDto = {
    summary: "Priority Well-being",
    stressUnitOfMeasure: "%",
    stressScore: "9",
    depressionDescription: "Occasional moments of sadness can affect your mood. Enjoyable activities and exercise may help to lift it.",
    depressionUnitOfMeasure: "%",
    anxietyDescription: "It appears you are having    intense concerns that may need coping strategies and possibly counseling.    ",
    description: "You're experiencing intense emotions that can impact your daily life. You're not alone; accepting help is a sign of strength and is crucial for your well-being and your baby's.",
    stressDescription: "Daily worries are normal. A healthy lifestyle and stress management techniques help maintain calm and balance",
    anxietyScore: "38",
    depressionScore: "28",
    depressionLabel: "Mild",
    stressLabel: "Normal",
    takenOnDateTime: "1705152248",
    anxietyLabel: "Severe",
    anxietyUnitOfMeasure: "%",
};
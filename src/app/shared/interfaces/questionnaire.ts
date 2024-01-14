export interface QuestionnaireDto {  
    title: string;
    answers: string[];
    answerSelected?: number;
};

export interface QuestionnaireAnswerDto {  
    title: string;
    answers: number[];
};
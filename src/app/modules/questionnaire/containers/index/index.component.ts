import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  questionListEnglish : any[] = [
    {
      title: "1.	I found it hard to wind down",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    },
    {
      title: "2.	I was aware of dryness of my mouth",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    },
    {
      title: "3.	I couldn't seem to experience any positive feeling at all",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    },
    {
      title: "4.	I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    },
    {
      title: "5.	I found it difficult to work up the initiative to do things",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    },
    {
      title: "6.	I tended to over-react to situations",
      answers: [
        "Did not apply to me at all",
        "Applied to me to some degree, or some of the time",
        "Applied to me to a considerable degree or a good part of time",
        "Applied to me very much or most of the time"
      ]
    }
  ];
  questionListSpanish : any[] = [
    {
      title: "1.	Me ha costado mucho descargar la tensión",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
    {
      title: "2.	Me di cuenta que tenía la boca seca",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
    {
      title: "3.	No podía sentir ningún sentimiento positivo",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
    {
      title: "4.	Se me hizo difícil respirar",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
    {
      title: "5.	Se me hizo difícil tomar la iniciativa para hacer cosas",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
    {
      title: "6.	Reaccioné exageradamente en ciertas situaciones",
      answers: [
        "No se aplica a mí en absoluto",
        "Aplicado a mí hasta cierto punto, o algunas veces",
        "Aplicado a mí en un grado considerable o una buena parte del tiempo",
        "Se me aplica mucho o la mayor parte del tiempo"
      ]
    },
  ];
  questionListSelected: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.questionListSelected = this.questionListEnglish;
  }

}

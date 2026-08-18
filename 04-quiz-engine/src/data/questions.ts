export type QuestionType =
    | {
          id: number;
          type: "multiple-choice";
          question: string;
          options: string[];
          answer: string[];
      }
    | {
          id: number;
          type: "true-false";
          question: string;
          answer: boolean;
      }
    | {
          id: number;
          type: "one-answer";
          question: string;
          options: string[];
          answer: string;
      };

export const questions: QuestionType[] = [
    {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following are programming languages?",
        options: ["JavaScript", "Python", "HTML", "CSS"],
        answer: ["JavaScript", "Python"],
    },

    {
        id: 2,
        type: "true-false",
        question: "The Earth revolves around the Sun.",
        answer: true,
    },

    {
        id: 3,
        type: "one-answer",
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12",
    },

    {
        id: 4,
        type: "one-answer",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars",
    },

    {
        id: 5,
        type: "true-false",
        question: "Water freezes at 0°C.",
        answer: true,
    },

    {
        id: 6,
        type: "one-answer",
        question: "What is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean",
        ],
        answer: "Pacific Ocean",
    },

    {
        id: 7,
        type: "one-answer",
        question: "Which language is primarily used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS",
    },

    {
        id: 8,
        type: "true-false",
        question: "The Moon is a star.",
        answer: false,
    },

    {
        id: 9,
        type: "one-answer",
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: "Au",
    },

    {
        id: 10,
        type: "one-answer",
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
    },
    {
        id: 11,
        type: "multiple-choice",
        question: "Which of the following are mammals?",
        options: ["Dolphin", "Eagle", "Elephant", "Shark"],
        answer: ["Dolphin", "Elephant"],
    },

    {
        id: 12,
        type: "true-false",
        question: "JavaScript can be used to make web pages interactive.",
        answer: true,
    },

    {
        id: 13,
        type: "one-answer",
        question: "What is 9 × 6?",
        options: ["42", "48", "54", "56"],
        answer: "54",
    },

    {
        id: 14,
        type: "one-answer",
        question: "What is the capital city of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris",
    },

    {
        id: 15,
        type: "true-false",
        question: "The Sun is a planet.",
        answer: false,
    },

    {
        id: 16,
        type: "multiple-choice",
        question: "Which of the following are frontend web technologies?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: ["HTML", "CSS", "JavaScript"],
    },

    {
        id: 17,
        type: "one-answer",
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: "6",
    },

    {
        id: 18,
        type: "true-false",
        question: "Python is a programming language.",
        answer: true,
    },

    {
        id: 19,
        type: "one-answer",
        question: "Which gas do humans need to breathe to survive?",
        options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
        answer: "Oxygen",
    },

    {
        id: 20,
        type: "multiple-choice",
        question: "Which of the following are primary colors of light?",
        options: ["Red", "Green", "Blue", "Yellow"],
        answer: ["Red", "Green", "Blue"],
    },
];
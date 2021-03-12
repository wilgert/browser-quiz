'use strict';
/* Program Data
  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
    your handlers will query the DOM each time they need to make a change
  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
// this is example data for the starter demo
//  delete this data when you begin and use the own quiz data instead
/**
 * data that is saved and used between user interactionss
 * @property {string} separator - the full user artwork
 * @property {string[]} lines - all the lines that have been entered
 */
export const data = {
  separator: '|',
  lines: [],
};
// here's a suggestion for your game's state, see if this works for your team
//  there are many ways to represent your game as data!
/**
 *
 */
export const quizData = {
  quiz: {
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === null?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
    wrong: 0,
    //
    currentQuestion: 0,
  },
  // the questions in the quiz
  questions: [
    {
      title: 'Variable Declaration',
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      title: 'typeof Keyword',
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      title: 'JavaScript History',
      text: 'Which company developed JavaScript?',
      answers: {
        a: 'Microsoft',
        b: 'Sun Microsystems',
        c: 'Netscape',
        d: 'Oracle',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'JavaScript - Wikipedia',
          href: 'https://en.wikipedia.org/wiki/JavaScript',
        },
        {
          text: 'JavaScript History - W3Schools',
          href: 'https://www.w3schools.com/js/js_history.asp',
        },
      ],
    },
    {
      title: 'this Keyword',
      text: 'What is this keyword in JavaScript?',
      answers: {
        a: 'refers to the object from where it was called.',
        b: 'refers to current function',
        c: 'refers to browser',
        d: 'refers to global scope',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/object-methods',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        },
      ],
    },
    {
      title: 'JavaScript Data Types',
      text: 'Which answer is not JavaScript Data Types?',
      answers: {
        a: 'String',
        b: 'Undefined',
        c: 'Object',
        d: 'Array',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
        },
      ],
    },
    {
      title: 'isNaN Function',
      text: 'What is the use of isNaN function?',
      answers: {
        a: 'returns true if the argument is not a number',
        b: 'returns false if the argument is not a number',
        c: 'returns true if the argument is not null',
        d: 'returns false if the argument is not null',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'JavaScript NaN Property',
          href: 'https://www.w3schools.com/jsref/jsref_number_nan.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN',
        },
      ],
    },
    {
      title: 'JavaScript comments',
      text: 'How do you insert a Single Line comment in a JavaScript file?',
      answers: {
        a: 'Single line comments start with \\',
        b: 'Single line comments start with */',
        c: 'Single line comments start with *',
        d: 'Single line comments start with //',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/comments',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#javascript_comments',
        },
      ],
    },
    {
      title: 'JavaScript HTML element',
      text: 'Inside which HTML element do we put the JavaScript?',
      answers: {
        a: '<js></js>',
        b: '<script></script>',
        c: '<javascript></javascript>',
        d: '<scripting></scripting>',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/hello-world',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script',
        },
      ],
    },
    {
      title: 'JavaScript WHILE loop',
      text: 'How does a WHILE loop start?',
      answers: {
        a: 'while(i <= 0)',
        b: 'while(i <= 0 i++)',
        c: 'while i <= 0',
        d: 'while (i++ i <= 0)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/while-for',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while',
        },
      ],
    },
    {
      title: 'JavaScript IF statement',
      text: 'How to write an IF statement in JavaScript?',
      answers: {
        a: 'if (i==5) ',
        b: 'if {i==5} ',
        c: 'if i==5 {} ',
        d: 'if [i==5] ',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/ifelse',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else',
        },
      ],
    },
    {
      title: 'Automatic type conversion',
      text: 'What would be the result of 3+2+"7"?',
      answers: {
        a: '327',
        b: '12',
        c: '57',
        d: '5 7',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/type-conversions',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion',
        },
      ],
    },
    {
      title: 'undefined',
      text: ' What is an undefined value in JavaScript? which answer is wrong.',
      answers: {
        a: 'Variable used in the code does not exist',
        b: 'Variable is not assigned to any value',
        c: 'Property does not exist',
        d: 'Variable is null',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
        },
        {
          text: 'undefined value',
          href:
            'https://en.wikipedia.org/wiki/Undefined_value#:~:text=In%20computing%20(particularly%2C%20in%20programming,%22%20(but%20defined)%20values.',
        },
      ],
    },
    {
      title: 'Compare operator',
      text: ' What is === operator in JavaScript ?',
      answers: {
        a: 'Compare types',
        b: 'Compare values',
        c: 'Compare functions',
        d: 'Compare values and Types',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'JavaScript Operators ',
          href: 'https://www.w3schools.com/js/js_operators.asp',
        },
        {
          text: 'Operator precedence',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence',
        },
      ],
    },
    // Add more questions here
  ],
};

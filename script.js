
document.addEventListener('DOMContentLoaded', async () => {
  const categorySelector = document.querySelector('#category-selector');
  const response = await fetch('https://codequestapi.onrender.com/api/v1/questions/categories');
  const categories = await response.json();
  console.log(categories);

  categories.results.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelector.appendChild(option);
  });
});

//Evento para cargar las preguntas//
document.querySelector('#load-question').addEventListener('click', async () => {
  document.querySelector('#question-text').textContent = 'Cargando...';
  document.querySelector('#code-example').textContent = '';
  document.querySelector('#answer-0').textContent = '';
  document.querySelector('#answer-1').textContent = '';
  document.querySelector('#answer-2').textContent = '';
  document.querySelector('#answer-3').textContent = '';
  document.querySelector('#correct-answer').textContent = '...';

  const selectedCategory = document.querySelector('#category-selector').value;
  const url = selectedCategory
  ? `https://codequestapi.onrender.com/api/v1/questions/random?categories=${selectedCategory}`
  : 'https://codequestapi.onrender.com/api/v1/questions/random?amount=1';


  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  const pregunta = datos.results[0];

  document.querySelector('#question-text').textContent = pregunta.question;

  if (pregunta.codeExamples.length > 0) {
    document.querySelector('#code-example').textContent = pregunta.codeExamples[0];
  }

  document.querySelector('#answer-0').textContent = pregunta.answerOptions[0].answer;
  document.querySelector('#answer-1').textContent = pregunta.answerOptions[1].answer;
  document.querySelector('#answer-2').textContent = pregunta.answerOptions[2].answer;
  document.querySelector('#answer-3').textContent = pregunta.answerOptions[3].answer;

  if (pregunta.answerOptions[0].isCorrect) {
    document.querySelector('#correct-answer').textContent = pregunta.answerOptions[0].answer;
  } else if (pregunta.answerOptions[1].isCorrect) {
    document.querySelector('#correct-answer').textContent = pregunta.answerOptions[1].answer;
  } else if (pregunta.answerOptions[2].isCorrect) {
    document.querySelector('#correct-answer').textContent = pregunta.answerOptions[2].answer;
  } else if (pregunta.answerOptions[3].isCorrect) {
    document.querySelector('#correct-answer').textContent = pregunta.answerOptions[3].answer;
  }
});

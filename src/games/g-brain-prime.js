import randomNum from '../random_num.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const intager = (randomNumber) => {
  let resault = true;
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      resault = false;
      break;
    }
  }
  return resault;
};

const BrainPrime = () => {
  const randomNumber = randomNum(1, 100);
  const question = randomNumber;
  const correctAnswer = intager(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rules, BrainPrime };
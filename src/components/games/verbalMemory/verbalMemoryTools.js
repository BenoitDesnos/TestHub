import { wordsList } from "./data/wordsList";

export const pickNewWord = (wordLength) => {
  const filteredWords = filterWords(wordLength);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex].label.toLowerCase();
};

export const getRandomBoolean = (probability) => {
  return Math.random() >= probability;
};

export const pickRandomWordInTheSeenList = (seenList) => {
  const randomIndex = Math.floor(Math.random() * seenList.length);
  return seenList[randomIndex];
};

const filterWords = (wordLength) => {
  return wordsList.filter((word) => wordLength < word.label.length);
};

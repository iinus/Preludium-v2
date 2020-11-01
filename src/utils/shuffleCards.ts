import { ICard } from "../types/Card";

export const shuffleCards = (cards: ICard[]) => {
  let currentIndex = cards.length,
    temporaryCard,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryCard = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryCard;
  }

  return cards;
};

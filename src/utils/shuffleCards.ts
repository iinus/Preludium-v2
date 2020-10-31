import { ICard } from "../types/Card";

export const shuffleCards = (cards: ICard[]) => {
  let currentIndex = cards.length,
    temporaryCard,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryCard = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[currentIndex].index = cards[randomIndex].index;

    cards[randomIndex] = temporaryCard;
    cards[randomIndex].index = temporaryCard.index;
  }

  return cards;
};

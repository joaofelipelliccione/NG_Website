import React from 'react';
import styles from '../../styles/components/home/EmojisScrollbar.module.css';

const emojisCards = [
  { cardId: 1, cardImgSrc: '/benefits/emoji_card_1.svg' },
  { cardId: 2, cardImgSrc: '/benefits/emoji_card_2.svg' },
  { cardId: 3, cardImgSrc: '/benefits/emoji_card_3.svg' },
  { cardId: 4, cardImgSrc: '/benefits/emoji_card_4.svg' },
  { cardId: 5, cardImgSrc: '/benefits/emoji_card_5.svg' },
];

export default function EmojisScrollbar() {
  return (
    <div className={ styles.scrollbarContainer }>
      <div className={ styles.emojisScrollbar }>
        {emojisCards.map(({ cardId, cardImgSrc }) => (
          <img
            key={ cardId }
            src={ cardImgSrc }
            alt="Card de benefícios"
            className={ styles.emojiCard }
          />
        ))}
      </div>
    </div>
  );
}

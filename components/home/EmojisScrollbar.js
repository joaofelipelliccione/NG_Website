import React from 'react';
import styles from '../../styles/components/home/EmojisScrollbar.module.css';

const emojisCards = [
  { cardId: 1, cardImgSrc: '/benefits/emoji_card_1.png' },
  { cardId: 2, cardImgSrc: '/benefits/emoji_card_2.png' },
  { cardId: 3, cardImgSrc: '/benefits/emoji_card_3.png' },
  { cardId: 4, cardImgSrc: '/benefits/emoji_card_4.png' },
  { cardId: 5, cardImgSrc: '/benefits/emoji_card_5.png' },
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

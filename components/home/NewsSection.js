import React from 'react';
import Img from '../Img';
import newsBillboard from '../../assets/news_billboard.png';
import styles from '../../styles/components/home/NewsSection.module.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: '/news/logo_forbes.png', iconHref: 'https://forbes.com.br/forbes-money/2022/08/fintech-ng-cash-recebe-aporte-historico-de-us-10-milhoes/' },
  // { iconId: 2, iconImgSrc: '/news/logo_bloomberg.png', iconHref: '' },
  { iconId: 3, iconImgSrc: '/news/logo_valor.png', iconHref: 'https://pipelinevalor.globo.com/startups/noticia/banco-da-new-generation-ngcash-capta-us-10-milhoes-com-a16z-e-monashees.ghtml' },
  { iconId: 4, iconImgSrc: '/news/logo_globo.png', iconHref: 'https://oglobo.globo.com/blogs/capital/post/2022/08/conta-digital-para-adolescentes-fundada-na-puc-rio-recebe-aporte-de-us-10-milhoes.ghtml' },
  { iconId: 5, iconImgSrc: '/news/logo_exame.png', iconHref: 'https://exame.com/negocios/ng-cash-app-financeiro-geracao-z-aporte-10-milhoes/' },
  { iconId: 6, iconImgSrc: '/news/logo_estadao.png', iconHref: 'https://link.estadao.com.br/noticias/inovacao,fintech-ngcash-recebe-us-10-milhoes-para-ser-o-banco-da-geracao-z,70004125001' },
  // { iconId: 7, iconImgSrc: '/news/logo_infomoney.png', iconHref: '' },
  { iconId: 8, iconImgSrc: '/news/logo_neofeed.png', iconHref: 'https://neofeed.com.br/blog/home/aposta-da-stone-ng-cash-capta-seed-de-us-10-milhoes-com-a16z-e-monashees/' },
];

export default function NewsSection() {
  return (
    <section className={ styles.newsSection }>
      <Img
        imgClassName={ styles.newsBillboard }
        imgSrc={ newsBillboard }
        imgAlt="Letreiro"
      />
      <div className={ styles.newsSectionWrapper }>
        {newsIcons.map(({ iconId, iconHref, iconImgSrc }) => (
          <a
            key={ iconId }
            href={ iconHref }
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ iconImgSrc }
              alt="Logo do Jornal"
              className={ styles.newsIcons }
            />
          </a>
        ))}
      </div>
    </section>
  );
}

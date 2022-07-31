import React from 'react';
import Img from '../Img';
import newsBillboard from '../../assets/news_billboard.svg';
import styles from '../../styles/components/home/NewsSection.module.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: '/news/logo_globo.png', iconHref: 'https://oglobo.globo.com/clube-o-globo/servicos/oferta/ngcash-assine-e-ganhe.ghtml' },
  { iconId: 2, iconImgSrc: '/news/logo_forbes.png', iconHref: 'https://forbes.com.br/forbes-money/2021/06/segmentacao-de-fintechs-conheca-4-bancos-digitais-criados-para-publicos-especificos/#foto4' },
  { iconId: 3, iconImgSrc: '/news/logo_estadao.png', iconHref: 'https://einvestidor.estadao.com.br/mercado/banco-neaglebank-youtubers-criancas/' },
  { iconId: 4, iconImgSrc: '/news/logo_folhaSP.png', iconHref: 'https://www1.folha.uol.com.br/mpme/2021/05/empresas-lancam-aplicativos-de-mesada-digital-e-cartao-de-credito-para-criancas.shtml' },
  { iconId: 5, iconImgSrc: '/news/logo_istoE.png', iconHref: 'https://www.istoedinheiro.com.br/tem-fintech-ate-para-criancas-e-adolescentes/' },
  { iconId: 6, iconImgSrc: '/news/logo_uol.png', iconHref: 'https://economia.uol.com.br/mais/ultimas-noticias/2021/01/27/fintechs-bancos-digitais-para-criancas-adolescentes.htm' },
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

import React from 'react';
import ImgBtn from '../ImgBtn';
import Img from '../Img';
import logoGlobo from '../../assets/news/logo_globo.svg';
import logoForbes from '../../assets/news/logo_forbes.svg';
import logoEstadao from '../../assets/news/logo_estadao.svg';
import logoFolhaSP from '../../assets/news/logo_folhaSP.svg';
import logoIstoE from '../../assets/news/logo_istoE.svg';
import logoUol from '../../assets/news/logo_uol.svg';
import newsBillboard from '../../assets/news/news_billboard.svg';
import styles from '../../styles/components/home/NewsSection.module.css';

const newsIcons = [
  { iconId: 1, iconImgSrc: logoGlobo, iconHref: 'https://oglobo.globo.com/clube-o-globo/servicos/oferta/ngcash-assine-e-ganhe.ghtml' },
  { iconId: 2, iconImgSrc: logoForbes, iconHref: 'https://forbes.com.br/forbes-money/2021/06/segmentacao-de-fintechs-conheca-4-bancos-digitais-criados-para-publicos-especificos/#foto4' },
  { iconId: 3, iconImgSrc: logoEstadao, iconHref: 'https://einvestidor.estadao.com.br/mercado/banco-neaglebank-youtubers-criancas/' },
  { iconId: 4, iconImgSrc: logoFolhaSP, iconHref: 'https://www1.folha.uol.com.br/mpme/2021/05/empresas-lancam-aplicativos-de-mesada-digital-e-cartao-de-credito-para-criancas.shtml' },
  { iconId: 5, iconImgSrc: logoIstoE, iconHref: 'https://www.istoedinheiro.com.br/tem-fintech-ate-para-criancas-e-adolescentes/' },
  { iconId: 6, iconImgSrc: logoUol, iconHref: 'https://economia.uol.com.br/mais/ultimas-noticias/2021/01/27/fintechs-bancos-digitais-para-criancas-adolescentes.htm' },
];

export default function NewsSection() {
  return (
    <section className={ styles.newsSection }>
      <div className={ styles.newsSectionWrapper }>
        {newsIcons.map(({ iconId, iconHref, iconImgSrc }) => (
          <ImgBtn
            key={ iconId }
            imgClassName={ styles.newsIcons }
            href={ iconHref }
            target="_blank"
            imgSrc={ iconImgSrc }
            imgAlt={ `Ícone do jornal ${iconId}` }
          />
        ))}
      </div>
      <Img
        imgClassName={ styles.newsBillboard }
        imgSrc={ newsBillboard }
        imgAlt="Letreiro"
      />
    </section>
  );
}

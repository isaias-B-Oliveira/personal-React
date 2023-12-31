/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { MdOutlinePortrait } from "react-icons/md";
import ImageOne from "../../images/image1.png";
import ImageTho from "../../images/image2.png";
import ImageThee from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import Imagesis from '../../images/image6.png'
import Imagesevem from '../../images/image7.png'
// import ImageSis from "../../images/image6.png";
import './style.scss'

const PortifolioDate = [
    {
        id: 2,
        name: "Cite Pessoal",
        image: ImageOne,
        link: 'https://isaias-b-oliveira.github.io/portifolio/',
        linkcode: 'https://github.com/isaias-B-Oliveira/portifolio',
    },
    {
        id: 2,
        name: "cite catalogo",
        image: ImageTho,
        link: 'https://react-sorveteria-git-branch-novo-isaias-b-oliveira.vercel.app/',
        linkcode: 'https://github.com/isaias-B-Oliveira/react-sorveteria',
    },
    {
        id: 2,
        name: "Shop Car",
        image: ImageThee,
        link: 'https://carrinho-compras-react-one.vercel.app/',
        linkcode: 'https://github.com/isaias-B-Oliveira/carrinho-compras-react',
    },
    {
        id: 2,
        name: "pagina Otica",
        image: ImageFour,
        link: 'https://react-projeto-otica-qsnusom0u-isaias-b-oliveira.vercel.app/',
        linkcode: 'https://github.com/isaias-B-Oliveira/react-projeto-otica',
    },
    {
        id: 3,
        name: "API upload/img",
        image: ImageFive,
        link: 'https://github.com/isaias-B-Oliveira/API-upload-arquivo',
        linkcode: 'https://github.com/isaias-B-Oliveira/API-upload-arquivo',
    },
    {
        id: 3,
        name: "API cadrasto usuario",
        image: Imagesis,
        link: 'https://github.com/isaias-B-Oliveira/form.node.js',
        linkcode: 'https://github.com/isaias-B-Oliveira/form.node.js',
    },
    {
        id: 4,
        name: "Todo-List",
        image: Imagesevem,
        link: 'https://github.com/isaias-B-Oliveira/crud-en-node.js/tree/main',
        linkcode: 'https://github.com/isaias-B-Oliveira/crud-en-node.js/tree/main',
    },
];

const filterData = [
    {
        filterId: 1, //all
        label: "ALL",
    },
    {
        filterId: 2,
        label: "FRONT-END",
    },
    {
        filterId: 3,
        label: "BACK-END",
    },
    {
        filterId: 4,
        label: "FULL-STAK",
    },
];

function Portfolio() {

    const [filterValue, setFilterValue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null)

    function hendlefilter(currenId) {
      setFilterValue(currenId)
    }
    // console.log(filterValue)

    const filterItems = filterValue === 1 ? PortifolioDate : 
    PortifolioDate.filter(item => item.id === filterValue)
    // console.log(filterItems)

    function handleHover(index){
        setHoveredValue(index)
    }
    // console.log(hoveredValue)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="Meu Portifolio"
                icon={<MdOutlinePortrait size={40} />}
            />

            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li className={item.filterId === filterValue ? 'active' : ''} onClick={() =>hendlefilter(item.filterId)} key={item.filterId}>{item.label}</li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                  {
                    filterItems.map((item, index) => (
                      <div className="portfolio__content__cards__item"
                       key={`cardItem ${item.name.trim()}`}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                      >
                        <div className="portfolio__content__cards__item__img-wrapper">
                          <a> 
                            <img alt="dummy data" src={item.image} />
                          </a>
                        </div>
                        <div className="overlay">
                            {
                                index === hoveredValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <a href={item.link}
                                         target="_blank" rel="noreferrer">Demo</a>
                                          <a href={item.linkcode}
                                         target="_blank" rel="noreferrer">Code</a>
                                       
                                    </div>
                                )
                            }
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { MdOutlinePortrait } from "react-icons/md";
import ImageOne from "../../images/image1.png";
import ImageTho from "../../images/image2.png";
import ImageThee from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSis from "../../images/image6.png";
import './style.scss'

const PortifolioDate = [
    {
        id: 2,
        name: "Ecommece",
        image: ImageOne,
        link: '',
    },
    {
        id: 2,
        name: "sorvete",
        image: ImageTho,
        link: '',
    },
    {
        id: 2,
        name: "personal",
        image: ImageThee,
        link: '',
    },
    {
        id: 3,
        name: "Eco",
        image: ImageFour,
        link: '',
    },
    {
        id: 3,
        name: "dode",
        image: ImageFive,
        link: '',
    },
    {
        id: 3,
        name: "back",
        image: ImageSis,
        link: '',
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
                headerText="My Portfolio"
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
                                        <button>Demo</button>
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
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
    },
    {
        id: 2,
        name: "sorvete",
        image: ImageTho,
    },
    {
        id: 2,
        name: "personal",
        image: ImageThee,
    },
    {
        id: 3,
        name: "Eco",
        image: ImageFour,
    },
    {
        id: 3,
        name: "dode",
        image: ImageFive,
    },
    {
        id: 3,
        name: "back",
        image: ImageSis,
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

    function hendlefilter(currenId) {
      setFilterValue(currenId)

    }
    console.log(filterValue)

    const filterItems = filterValue === 1 ? PortifolioDate : 
    PortifolioDate.filter(item => item.id === filterValue)
    
    console.log(filterItems)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li className={item.filterId === filterValue ? 'active' : ''} onClick={() =>hendlefilter(item.filterId)} key={item.filterId}>{item.label}</li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                  {
                    filterItems.map((item) => (
                      <div className="portfolio__content__cards__item" key={`cardItem ${item.name.trim()}`}>
                        <div className="portfolio__content__cards__item__img-wrapper">
                          <a href="#">
                            <img alt="dummy data" src={item.image} />
                          </a>
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

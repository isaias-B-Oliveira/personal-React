import './style.scss'
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { Animate } from "react-simple-animate";

const personalInfos = [
    {
        label: "Name",
        value: "Isaias",
    },
    {
        label: "Age",
        value: "27",
    },
    {
        label: "Address",
        value: "Brasil",
    },
    {
        label: "Github",
        value: "https://github.com/isaias-B-Oliveira",
    },
    {
        label: "Linkedin",
        value: "https://www.linkedin.com/in/isaias-oliveira-942219257/",
    },
];

const ResumePersonal =
    "Sou estudande de analize e desenvolvimento de sistamas na universidade UNICESUMAR, en paralelo estudo na escola de programação DEVmedia, atualmente estou focado na carreira front-end mais a meta e ser full-stack. atualmente tenho uma base nas tecnologias html-5, css-3, javascript, react.js, e git estudo e pratico todos os dias, pois a constançia e a chave para ser um bon desenvolvedor";

function About() {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="Aboute Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateX(-900px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3>Front end Developer</h3>
                    <p>{ResumePersonal}</p>
                </Animate>

                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateX(500px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3>Personal Infomation</h3>
                    <ul>
                        {personalInfos.map((item, i) => (
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </Animate>
            </div>
        </section>
    );
}

export default About;

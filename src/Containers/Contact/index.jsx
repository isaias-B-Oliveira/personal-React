/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { MdMarkEmailRead } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import "./style.scss";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sedEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("preencha todos os capos");
            return;
        }

        const templeteParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs
            .send(
                "service_olu28vq",
                "template_8mevrxs",
                templeteParams,
                "uaiidWJ3zgNFQuQ-t"
            )
            .then(
                (response) => {
                    console.log(
                        "Email Enviado",
                        response.status,
                        response.text
                    );
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (err) => {
                    console.log("erro: ", err);
                }
            );
    }

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Meus Contatos"
                icon={<MdMarkEmailRead size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">
                        Me Envie um Email
                    </h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <form
                        className="contact__content__form"
                        onSubmit={sedEmail}
                    >
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    type={"text"}
                                    name="name"
                                    className="inputname"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <label htmlFor="name" className="namelabel">
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    type={"text"}
                                    name="email"
                                    className="inputemail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <label htmlFor="email" className="emaillabel">
                                    Email
                                </label>
                            </div>
                            <div>
                                <textarea
                                    type={"text"}
                                    name="messege"
                                    className="inputdescription"
                                    rows="5"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                />
                                <label
                                    htmlFor="message"
                                    className="descriptionlabel"
                                >
                                    Assunto
                                </label>
                            </div>
                        </div>
                        <input
                            className="button"
                            type="Submit"
                            value="Enviar"
                        />
                    </form>
                </Animate>
                <Animate
                    play
                    duration={1.5}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                <div className="container">
                    <div className="container-wrapper">
                    <a href="#" className="container-wrapper-icons">
                        <BiLogoLinkedinSquare size={40} />
                    </a>

                    <a href="#" className="container-wrapper-icons">
                        <FaGithubSquare size={40} />
                    </a>  
                    </div>
                                   
                </div>
                </Animate>
            </div>
        </section>
    );
}

export default Contact;

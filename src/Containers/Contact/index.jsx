import React from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.scss'

function Contact() {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
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
                        Let´s Talk
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
                  <div className="contact__content__form">
                    <div className="contact__content__form__controlswrapper">
                      <div>
                        <input required type={'text'} name="name" className="inputname" />
                        <label htmlFor="name" className="namelabel">Name</label>
                      </div>
                      <div>
                      <input required type={'text'} name="email" className="inputemail" />
                        <label htmlFor="email" className="emaillabel">Email</label>
                      </div>
                      <div>
                      <textarea
                       required 
                       type={'text'} 
                       name="description" 
                       className="inputdescription"
                       rows='5'
                        />
                        <label htmlFor="description" className="descriptionlabel">Description</label>
                      </div>
                    </div>
                    <button>Submit</button>
                  </div>

                </Animate>
            </div>
        </section>
    );
}

export default Contact;

import React from "react";
import PageHeaderContent from "../../components/PageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { skilData } from "./utils";
import { Animate } from "react-simple-animate";
import { AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './style.scss'

function Skils() {
    return (
        <section id="skils" className="skils">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skils__content-wrapper">
                {skilData.map((item, i) => (
                    <div
                        key={i}
                        className="skils__content-wrapper__inner-content"
                    >
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: "translateX(-200px)",
                            }}
                            end={{
                                transform: "translateX(0px)",
                            }}
                        >
                            <h3 className="skils__content-wrapper__inner-content__category-text">
                                {item.label}
                            </h3>

                            <div className="skils__content-wrapper__inner-content__progressbar-container">
                                {
                                item.data.map((skilItem, j) => (
                                    <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount="1"
                                    >
                                      <div className="progressbar-wrapper" key={j}>
                                        <p>{skilItem.skillName}</p>
                                        <Line
                                          percent={skilItem.porcetage}
                                          strokeWidth='2'
                                          strokeColor='var(--theme-main-color)'
                                          trailWidth='2'
                                          strokeLinecap="square"
                                        />
                                      </div>
                                    </AnimateKeyframes>
                                ))
                                }
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skils;

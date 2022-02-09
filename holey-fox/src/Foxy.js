import React from 'react';
import './Foxy.css';
import { HiArrowSmLeft } from 'react-icons/hi';
import { GiFoxHead } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
function Foxy() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/");
    }
    return (
        <div className="Arrows">
            <div className="foxy-nav" onClick={goBack}>
                <HiArrowSmLeft />
                <h2>february 09, 2022</h2>
            </div>
            <div className="paragraphs">
                <p>the impact of our ideas manifest in the tangible expression of our work.</p>
                <p>in the last handful of years, i've embarked on a journey of self-improvement, craftmanship and creative expression through contemporary mediums</p>
                <p>i am by no means halfway done with this journey, but the time has come to put brush to the metaphorical canvas and start creating.</p>
                <p>holey fox is the canvas. reified expression will follow shortly.</p>
                <p>the time has come.</p>
                <p>
                    — mogwai<GiFoxHead />
                </p>
            </div>
        </div>
    )
}

export default Foxy;
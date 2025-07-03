import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const StyledWrapper = styled.div`
  .outer {
    width: 300px;
    height: 250px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }
  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 4rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }`;

const M_Card = ({ view }) => {
  const [Employee, setEmployee] = useState(1);
  const [Branch, setBranch] = useState(1);
  const [Client, setClient] = useState(1);
  const [Award, setAward] = useState(1);

  
  const delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10);
    })
  }
  
  useEffect(() => {
      Aos.init({
        offset: 100,
      });
  
      Aos.refresh();
    }, [])

  useEffect(() => {
    if (view && Employee === 1) {
      const counter = async () => {
        for (let index = 0; index < 150; index++) {
          await delay();
          setEmployee(index + Employee);

          if(index < 100){
            setClient(index + Client);
          };

          if(index < 20){
            await delay();
            await delay();
            setBranch(index + Branch);
          };


          if(index < 15){
            await delay();
            await delay();
            setAward(index + Award);
          };
        };
      };

      counter();
    };
  }, [view]);

  return (
    <StyledWrapper>
      <div className="cards flex xl:justify-evenly flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5">
        <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-out" className="outer">
          <div className="dot" />
          <div className="card">
            <div className="ray" />
            <div className="text">{Employee}+</div>
            <div className='font-semibold text-lg'>Employees</div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-out" className="outer">
          <div className="dot" />
          <div className="card">
            <div className="ray" />
            <div className="text">{Branch}+</div>
            <div className='font-semibold text-lg'>Branches</div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>
        
        <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-out" className="outer">
          <div className="dot" />
          <div className="card">
            <div className="ray" />
            <div className="text">{Client}+</div>
            <div className='font-semibold text-lg'>Clients</div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="ease-in-out" className="outer">
          <div className="dot" />
          <div className="card">
            <div className="ray" />
            <div className="text">{Award}+</div>
            <div className='font-semibold text-lg'>Award Achievements</div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}


export default M_Card;

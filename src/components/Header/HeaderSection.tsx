import React from "react";
import styled from "styled-components";
import BurgerMenu from "../Burger/BurgerMenu";
import MobileMenu from "../Burger/MobileMenu";

const HeaderSection = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");
    }
  };

  return (
    <Styledheader id="about" className="bg-[#EEEFF1]">
      <MobileMenu toggleMenu={toggleMenu} menuOpen={open} />
      <div className="my-container">
        <div className="flex items-center justify-between py-4">
          <div>
            <img src="/img/logo.svg" alt="logo" />
          </div>
          <div className="flex gap-6 header-nav">
            <a className="custom-link" href="#menu">
              Cafe Menu
            </a>
            <a className="custom-link" href="#about">
              About Us
            </a>
            <a className="custom-link" href="#contact">
              Find Us
            </a>
            <a className="custom-link" href="#about">
              Alowishus Catering
            </a>
          </div>
          <div className="header-burger hidden">
            <BurgerMenu toggleMenu={toggleMenu} menuOpen={open} />
          </div>
        </div>
        <div className="header-content flex justify-between py-24">
          <div className="w-[50%] header-content__text">
            <p className="text-[60px] font-bold header-content__title">
              Alowishus Delicious Coffee
            </p>
            <p className="text-[#64646A] text-[20px] my-12 header-content__description">
              A drink from the ‘My Alowishus’ bottled brews range OR grab one of
              our delicious coffee’s.
            </p>
            <div className="flex items-center gap-6">
              <button className="primary-button">DOWNLOAD APP</button>
              <a className="cursor-pointer hover:underline hover:underline-offset-8">
                SHOP COFEE
              </a>
            </div>
          </div>
          <div className="relative header-content__img">
            <img
              className="object-cover w-[500px] h-[500px] header-content__img-1"
              src="/img/header-bg.png"
              alt="img"
            />
            <img
              className="object-contain w-[120px] h-[120px] absolute top-0 right-0"
              src="/img/header-bg2.svg"
            />
            <img
              className="object-contain w-[180px] h-[120px] absolute top-[50%] left-[40px]"
              src="/img/header-bg-rate.svg  "
            />
          </div>
        </div>
      </div>
    </Styledheader>
  );
};

const Styledheader = styled.div`
  @media (max-width: 990px) {
    .header-content {
      display: block;
      padding: 40px 0;

      &__text {
        width: 100%;
        margin-bottom: 70px;
      }

      &__img {
        width: fit-content;
        margin: 0 auto;

        &-1 {
          object-fit: contain;
        }
      }

      &__title {
        font-size: 40px;
      }

      &__description {
        margin: 20px 0 60px 0;
      }
    }
  }

  @media (max-width: 700px) {
    .header-nav {
      display: none;
    }
    .header-burger {
      display: block;
    }
  }
`;

export default HeaderSection;

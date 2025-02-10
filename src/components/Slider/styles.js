import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  .swiper-slide {
    width: 30rem;
  }

  .slider-wrapper {
    position: relative;
    overflow: hidden;
  }

  .slider-wrapper::before,
  .slider-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15rem;
    overflow: visible;
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;

    &:hover {
      opacity: 0.8;
    }
  }

  .swiper-button-prev {
    left: 1rem;
  }

  .swiper-button-next {
    right: 1rem;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
    font-weight: bold;
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  .swiper-slide {
    width: 21rem;
  }

  @media (min-width: 768px) {
    .swiper-slide {
      width: 30.4rem;
    }
    .slider-wrapper::before {
      left: 0;
      background: linear-gradient(to right, ${({ theme }) => theme.COLORS.DARK_400}, rgba(255, 255, 255, 0));
      opacity: ${({ $leftShadowVisible }) => ($leftShadowVisible ? 1 : 0)};
    }

  .slider-wrapper::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.COLORS.DARK_400}, rgba(255, 255, 255, 0));
    opacity: ${({ $rightShadowVisible }) => ($rightShadowVisible ? 1 : 0)};
    }
  }
`;
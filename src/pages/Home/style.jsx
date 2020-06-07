import styled from "styled-components";

const HomeStyle = styled.div`
  margin-top: 80px;
  padding: 50px 400px;
  background: #f4f1ef;
  z-index: 1 !important;

  .pizzas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .pizza-single {
    flex-basis: 32%;
    padding: 20px;
    height: 455px;
    margin: 12.5px 6px;
    display: flex;
    border: 2px solid #e7e4e2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    cursor: pointer;
    background: #fff;

    :hover {
      border: 2px solid #c4c4c4;
    }

    .pizza-img {
      margin: 20px 0px 20px 0px;
      flex-basis: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        height: 140px;
      }
    }

    .pizza-description {
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      flex-basis: 40%;
      min-height: 190px;

      .pizza-name {
        font-size: 24px;
        font-weight: 900;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }
      .pizza-desc {
        font-weight: 300;
        letter-spacing: 1.1px;
        align-items: justify;
        min-height: 95px;
        padding: 10px 0px;
      }

      .price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .pizza-price {
          font-size: 28px;
          font-weight: 900;
        }

        svg {
          margin-left: 10px;
          height: 16px;
          path {
            fill: #fff;
          }
        }

        .btn {
          font-size: 16px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 600;
          height: 30px;
          padding: 10px 15px;
        }
      }
    }
  }

  @media screen and (max-width: 1800px) {
    padding: 10px 250px;
  }

  @media screen and (max-width: 1500px) {
    padding: 10px 150px;
  }

  @media screen and (max-width: 1300px) {
    .pizza-single {
      flex-basis: 47%;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 10px 75px;
  }

  @media screen and (max-width: 850px) {
    .pizza-single {
      flex-basis: 100%;
    }
    padding: 10px 150px;
  }

  @media screen and (max-width: 650px) {
    padding: 10px 75px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 10px;
    .pizza-single {
      height: 100%;
    }
  }
`;

export default HomeStyle;

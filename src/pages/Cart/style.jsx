import styled from "styled-components";

const CartStyle = styled.div`
  padding: 200px 400px 200px 400px;
  background: #f4f1ef;
  min-height: 100vh;

  .success-msg {
    position: absolute;
    top: 150px;
    border-radius: 5px;
    color: #3b6a40;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 999999;
    border: 1px solid green;
    background: #e5fae7;
    padding: 10px 25px;
    font-size: 24px;
    text-align: center;
    width: 800px;
  }

  .cart {
    font-size: 30px;
    position: relative;
  }

  .callback-msg {
    font-size: 25px;
    margin-top: 40px;
  }

  .products-container {
    display: flex;
    .total {
      border-radius: 5px;
      height: 300px;
      width: 300px;
      margin-left: 100px;
      margin-top: 35px;

      .summary {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .subtotal,
      .tax {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 300;
      }

      .final-total {
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 400;
        margin-top: 25px;
        padding: 7.5px 0px;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
      }

      .checkout-btn {
        width: 100%;
        margin-top: 15px;
      }
    }
    .products {
      .product {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 35px 0px;
        max-width: 900px;

        .pizza-img {
          flex-basis: 20%;
          background: #fff;
          border: 1.5px solid #c4c4c4;
          border-radius: 5px;

          img {
            width: 100%;
            min-height: 180px;
            min-width: 200px;
            border-radius: 5px;
            padding: 15px 30px;
          }
        }

        .pizza-description {
          padding: 0px 20px;
          flex-basis: 65%;
          min-height: 180px;
          display: flex;
          flex-direction: column;

          .pizza-name {
            font-size: 20px;
            font-weight: 900;
            margin-bottom: 15px !important;
          }

          .pizza-desc {
            margin-bottom: 25px;
            min-height: 65px;
            font-weight: 300;
            letter-spacing: 1.1px;
          }

          .pizza-quantity {
            height: 100%;
            display: flex;
            font-weight: 300;
            letter-spacing: 1.1px;

            .icons {
              margin-left: 20px;

              .minus {
                margin: 5px;
                cursor: pointer;
                path {
                  fill: red;
                }
              }
              .plus {
                cursor: pointer;

                path {
                  fill: green;
                }
              }
            }
          }
        }
        .pizza-price {
          flex-basis: 15%;
          min-height: 180px;
          text-align: right;
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 1800px) {
    padding: 200px 250px;
  }

  @media screen and (max-width: 1500px) {
    padding: 200px 150px;
  }

  @media screen and (max-width: 1300px) {
    .products-container {
      display: flex !important;
      flex-direction: column !important;
    }
    .product {
      .pizza-img {
        width: 200px;

        img {
          height: 200px;
          width: 200px;
        }
      }
      .pizza-description {
      }
    }
  }

  @media screen and (max-width: 950px) {
    padding: 200px 75px;
    .products-container {
      display: flex !important;
      flex-direction: column !important;
    }

    .total {
      margin: 50px 0px 50px 0px !important;
    }
  }

  @media screen and (max-width: 850px) {
    .pizza-single {
      flex-basis: 100%;
    }
    padding: 200px 50px;
  }

  @media screen and (max-width: 650px) {
    padding: 200px 50px;

    .pizza-description {
      min-height: 150px !important;
      max-height: 150px !important;
      padding: 0px !important;
      padding-left: 10px !important;

      .pizza-name {
        font-size: 18px !important;
      }

      .pizza-desc {
        margin: 0px !important;
        margin-bottom: 10px !important;
        font-size: 14px !important;
        letter-spacing: 0.5px !important;
        line-height: 1;
      }

      .pizza-quantity {
        font-size: 14px !important;
        letter-spacing: 0.5px !important;
        .icons {
          margin-left: 10px !important;
        }
        svg {
          height: 12px;
          width: 12px;
        }
      }
    }
    .pizza-img {
      flex-basis: 10%;
      img {
        width: 100px !important;
        min-width: 100px !important;
        height: 150px !important;
        min-height: 150px !important;
        padding: 2.5px !important;
      }
    }

    .pizza-price {
      min-height: 150px !important;
      height: 150px !important;
      font-size: 15px !important;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 200px 10px;
    .pizza-single {
      height: 100%;
    }
  }
`;

export default CartStyle;

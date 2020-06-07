import styled from "styled-components";

const FooterStyle = styled.div`
  background: #fff;
  padding: 100px 400px;
  -webkit-box-shadow: 0px -11px 20px 0px rgba(224, 224, 224, 1);
  -moz-box-shadow: 0px -11px 20px 0px rgba(224, 224, 224, 1);
  box-shadow: 0px -11px 20px 0px rgba(224, 224, 224, 1);
  height: 500px;
  padding: 90px 400px 60px 400px;
  color: #000 !important;
  display: flex;
  flex-direction: column;

  .mainSection {
    display: flex;
    flex-basis: 100%;
    flex-direction: row;

    .titleSection {
      flex-basis: 40%;

      .title {
        display: flex;
        flex-direction: row;
        position: relative;
        h1 {
          font-weight: bold;
        }

        svg {
          position: absolute;
          right: 20px;
          height: 60px;
          width: 60px;
        }
      }

      .address {
        margin-top: 100px;

        p {
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
    .linksSection {
      flex-basis: 60%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding: 30px 0px;

      a {
        text-decoration: none;
      }
    }
  }
  .privacySection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 5%;

    .privacy {
      opacity: 0.6;
    }

    .socialIcons {
      margin-right: 150px;
      svg {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        cursor: pointer;
        path {
          fill: #000;
          opacity: 0.7;
        }
      }
    }
  }

  @media only screen and (max-width: 1830px) {
    padding: 90px 350px 60px 350px;
  }
  @media only screen and (max-width: 1750px) {
    padding: 90px 300px 60px 300px;
  }
  @media only screen and (max-width: 1650px) {
    padding: 90px 250px 60px 250px;
  }
  @media only screen and (max-width: 1550px) {
    padding: 90px 200px 60px 200px;
  }
  @media only screen and (max-width: 1450px) {
    padding: 90px 150px 60px 150px;
  }

  @media only screen and (max-width: 1350px) {
    padding: 90px 100px 60px 100px;
  }

  @media only screen and (max-width: 1250px) {
    padding: 90px 50px 60px 50px;

    .titleSection {
      .title {
        h1 {
          width: 50px;
        }

        svg {
          right: 100px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    padding: 50px;
    height: auto;
    .mainSection {
      flex-direction: column;
      .titleSection {
        .title {
          h1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            align-items: center;
          }
          svg {
            display: none;
          }
        }
        .address {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 50px 50px 30px 50px;
        }
      }
    }

    .linksSection {
      .titleSection {
        width: fit-content;
      }
    }
    .privacySection {
      .socialIcons {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    padding: 60px 30px;
    .linksSection {
      flex-direction: column;
      align-items: center;
    }
    .privacySection {
      flex-direction: column;
      .privacy {
        text-align: center;
      }
      .socialIcons {
        margin-right: 0px;
        margin-top: 30px;
      }
    }
    .titleSection {
      .title {
        h1 {
          font-size: 35px;
          text-align: center;
        }
      }
    }
  }
`;

export default FooterStyle;

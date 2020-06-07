import styled from "styled-components";

const FooterSectionStyle = styled.div`
  width: 40%;
  margin-bottom: 50px;

  .titleSection {
    display: flex;
    /* 
    .number {
      font-size: 26px;
      opacity: 0.7;
      ::after {
        content: " - ";
      }
    } */

    .title {
      margin-left: 0px !important;
      font-size: 22px;
      font-weight: bold;
      width: fit-content;
    }
  }
  .itemsSection {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    a {
      p {
        margin: 5px 0px 0px 0px;
        margin-left: 5px;
        font-weight: 600;
        line-height: 1.1;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #000 !important;
        cursor: pointer;
        opacity: 0.7;
        width: fit-content;

        :hover {
          text-decoration: none !important;
          opacity: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .titleSection {
      width: 100%;
      .title {
        align-items: center;
      }
    }
    .itemsSection {
      justify-content: center;
      align-items: center;
      a {
        p {
          margin: 5px 0px !important;
          text-align: center;
        }
      }
    }
  }
`;

export default FooterSectionStyle;

import styled from "styled-components";

const ProfileStyle = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 100px 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding: 100px 250px;
  }

  @media screen and (max-width: 950px) {
    padding: 100px 150px;
  }

  @media screen and (max-width: 650px) {
    padding: 100px 100px;
  }

  @media screen and (max-width: 460px) {
    padding: 100px 30px;
  }
`;

export default ProfileStyle;

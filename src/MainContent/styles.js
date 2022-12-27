import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  height: 90vh;
  margin: auto;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #4F4F4F;
  }

  p {
    font-family: monospace;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    margin-bottom: 1.25rem;
  }

  .groupButtons {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }

`;

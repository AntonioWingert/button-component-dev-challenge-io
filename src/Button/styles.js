import styled from 'styled-components';

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20.27px;
  padding: 8px 16px;
  background: #E0E0E0;
  color: #3F3F3F;
  box-shadow: ${(props) => (props.disabledShadow ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)')};
  gap: .5rem;

  &:hover, &:focus  {
    background: #AEAEAE;
  }

  &:disabled {
      color: #9E9E9E;
      cursor: not-allowed;
  }

  ${(props) => props.theme.variants[props.variant]};
  ${(props) => props.theme.sizes[props.size]};
  ${(props) => props.theme.colors[props.color]};

`;

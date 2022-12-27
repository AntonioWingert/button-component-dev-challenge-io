const theme = {
  sizes: {
    sm:`
    height: 32px;`,
    md:`
    height: 36px;`,
    lg:`
    height: 42px;`,
  },
  colors: {
    primary:`
    background:#2962FF;
    color: white;

    &:hover, &:focus  {
      background: #0039CB;
    }
    `,
    secondary:`
    background:#455A64;
    color: white;

    &:hover, &:focus  {
      background: #1C313A;
    }
    `,
    danger: `
    background: #D32F2F;
    color: white;

    &:hover, &:focus {
      background: #9A0007;
    }
    `,
  },
  variants: {
    text:`
    background: none;
    color: #3D5AFE;
    border: none;
    box-shadow: none;

    &:hover  {
      background: rgba(41, 98, 255, 0.1);
    }

    &:disabled {
      color: #9E9E9E;
      cursor: not-allowed;
    }
    `,
    outline:`
    background: none;
    border: 1px solid blue;    
    color: #3D5AFE;
    box-shadow: none;

    &:hover  {
      background: rgba(41, 98, 255, 0.1);
    }

    &:disabled {
      color: #9E9E9E;
      cursor: not-allowed;
      background: #E0E0E0;
      border: none;
    }
    `,
  },
};

export default theme;
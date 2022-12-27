import { ButtonContainer } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export function Button({children = 'Default', size = 'sm', variant, color, disabled, disabledShadow, startIcon, endIcon}) {

  return (
    <ButtonContainer 
      size={size} 
      color={color} 
      variant={variant} 
      disabled={disabled} 
      disabledShadow={disabledShadow}
    >
      { startIcon ? <MdAddShoppingCart /> : null}
      {children}
      { endIcon ? <MdAddShoppingCart /> : null}
    </ButtonContainer>
  );
}

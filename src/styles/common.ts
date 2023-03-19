import styled from 'styled-components'

interface FlexboxProps {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  ${(props: FlexboxProps) => `flex-direction: ${props.flexDirection}`};
  ${(props: FlexboxProps) => `justify-content: ${props.justifyContent}`};
  ${(props: FlexboxProps) => `align-items: ${props.alignItems}`};

`;
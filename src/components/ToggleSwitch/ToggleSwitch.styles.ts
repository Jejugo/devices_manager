import styled from 'styled-components'
import { radius } from '../../styles'

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const SwitchBackground = styled.div`
  position: relative;
  width: 80px;
  height: 30px;
  border-radius: 25px;
  background-color: #eee;

  &:active .on {
    left: 50%;
  }

  &:active .on {
    left: 0;
  }
` 

export const Toggle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  border-radius: ${radius.large}px;
  transition: all 0.3s;
  opacity: 0.8;
  background-color: ${(props: { isOn: boolean }) => props.isOn ? '#048900' : '#222222'};
  ${(props: any) => props.isOn ? 'left: 60%' : 'left: 0'};
` 

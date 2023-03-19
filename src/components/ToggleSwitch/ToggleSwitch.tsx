import React from 'react'
import * as S from './ToggleSwitch.styles'

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function ToggleSwitch({ isOn, onToggle }: ToggleSwitchProps) {
  return (
    <S.SwitchContainer>
      <S.SwitchBackground onClick={onToggle}>
        <S.Toggle role="checkbox" isOn={isOn}></S.Toggle>
      </S.SwitchBackground>
    </S.SwitchContainer>
  )
}

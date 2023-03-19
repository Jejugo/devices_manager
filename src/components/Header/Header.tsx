import React, { useEffect, useRef, useState } from "react";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import * as S from "./Header.styles";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useDarkMode } from "../../providers/DarkModeProvider/DarkModeProvider";
import { BsFillMoonFill } from "react-icons/bs";
import { Flexbox } from "../../styles/common";

export default function Header() {
  const [showMenu, setShowMenu ] = useState(false)
  const { theme, toggleTheme } = useDarkMode()
  const menuRef = useRef<HTMLDivElement>(null);
  
  const handleToggle = () => {
    toggleTheme()
  }
    
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        !menuRef.current?.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo src="icons/NinjaOneLogo.svg" alt="NinjaOneLogo" />
        <S.IconContainer ref={menuRef}> 
          <S.MenuIcon onClick={() => setShowMenu(prevState => !prevState)} size={25}/>
          {showMenu && (
            <FloatingMenu>
              <Flexbox justifyContent="center" alignItems="center">
                <S.ToggleText>Dark Mode</S.ToggleText>           
                <S.DarkModeIcon>
                  <BsFillMoonFill color={theme === 'light' ? 'black' : 'white'} size={12} display="block-inline" title="HIHIH"/>
                </S.DarkModeIcon>
              </Flexbox>
              <ToggleSwitch isOn={theme === 'light' || false } onToggle={handleToggle}/>
            </FloatingMenu> 
          )}
        </S.IconContainer>
      </S.HeaderContainer>
      </S.Header>
  );
}

import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themeList";
import {
  ButtonContainer,
  HeaderInnerContainer,
  HeaderWrapper,
  StyledNavLink,
} from "./Header.styled";
export const Header = () => {
  const dispatch = useDispatch();

  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "active link" : "link";
  };
  return (
    <HeaderWrapper>
      <HeaderInnerContainer>
        <StyledNavLink to="/" className={getActiveClass}>
          ToDo
        </StyledNavLink>
        <StyledNavLink to="/list" className={getActiveClass}>
          List
        </StyledNavLink>

        <ButtonContainer>
          <button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
        </ButtonContainer>
      </HeaderInnerContainer>
    </HeaderWrapper>
  );
};

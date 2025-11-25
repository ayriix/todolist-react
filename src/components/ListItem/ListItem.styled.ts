import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  text-decoration: none;

  &.done {
    color: green;
  }
  &.notDone {
    color: red;
  }
`;

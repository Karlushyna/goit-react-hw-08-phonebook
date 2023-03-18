import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: rgb(178, 16, 30);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: rgb(255, 224, 189);
  font-size: 18px;
  font-weight: 400;

  &.active {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #051e1e;
    border-top-left-radius: 30px;
    border-start-end-radius: 30px;
  }
`;

export const User = styled.p`
  color: rgb(255, 224, 189);
  font-size: 18px;
  font-weight: 400;
`;

export const UserBar = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px; */
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 200px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Navigation = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  margin-bottom: 10px;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const NavigationIndex = ({ routes }) => {
  return (
    <Sidebar>
      <Navigation>
        {routes.map((route, index) => (
          <NavigationItem key={index}>
            <NavigationLink to={route.path}>{route.name}</NavigationLink>
          </NavigationItem>
        ))}
      </Navigation>
    </Sidebar>
  );
};

export default NavigationIndex;

import styled from "styled-components";
import { Container } from "@material-ui/core";
import React, { FC } from "react";

const CustomContainer = styled(Container)`
  margin-bottom: 30px;
`;

export const BreadcrumbsContainer: FC = ({ children }) => (
  <CustomContainer maxWidth="md">
    <>{children}></>
  </CustomContainer>
);

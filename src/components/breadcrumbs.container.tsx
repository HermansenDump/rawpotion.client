import styled from "styled-components";
import { Container } from "@material-ui/core";
import React from "react";

const CustomContainer = styled(Container)`
  margin-bottom: 30px;
`;

export const BreadcrumbsContainer = (props) => {
  return <CustomContainer maxWidth="md">{props.children}</CustomContainer>;
};

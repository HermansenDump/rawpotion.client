import React from "react";
import User from "../../src/components/User";
import DashboardWrapper from "../../src/components/layouts/dashboard.wrapper";
import { Breadcrumbs, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { BreadcrumbsContainer } from "../../src/components/breadcrumbs.container";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const getUpcomingEvents = () => {
  return [];
};

const NoEventsContainer = styled.p`
  text-align: center;
`;

const NoCurrentEvents = () => {
  return <NoEventsContainer>No upcoming events</NoEventsContainer>;
};
const ShowCurrentEvents = ({ events }) => (
  <ul>
    {events.map((event) => (
      <li key={event.id}>event.name</li>
    ))}
  </ul>
);

const Dashboard = () => {
  const events = getUpcomingEvents();

  return (
    <User>
      <DashboardWrapper>
        <BreadcrumbsContainer>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Typography color="textPrimary">App</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        <Container maxWidth="sm">
          {!events || (events.length == 0 && <NoCurrentEvents />)}
          {events && events.length > 0 && <ShowCurrentEvents events={events} />}
        </Container>
      </DashboardWrapper>
    </User>
  );
};

export default Dashboard;

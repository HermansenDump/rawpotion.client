import { gql } from "@apollo/client";

export const ALL_GROUPS_QUERY = gql`
  query allGroups {
    groups {
      id
      name
    }
  }
`;

import { NetworkStatus, useQuery } from "@apollo/client";
import { ALL_GROUPS_QUERY } from "../lib/graphql/groups";

const GroupsList = ({groups}) => {
  // const { loading, error, data, networkStatus } = useQuery(ALL_GROUPS_QUERY, {
  //   notifyOnNetworkStatusChange: true,
  // });
  //
  // const loadingMoreGroups = networkStatus === NetworkStatus.fetchMore;
  //
  // if (error) return <div>Some error occurred: {error}</div>;
  // if (loading && !loadingMoreGroups) return <div>Loading...</div>;
  //
  // const { groups } = data;
  //
  // console.log(groups);
  return (
    <ul>
      {groups.map((group: { name: string, id: string }) => (
        <li key={group.id}>{group.name}</li>
      ))}
    </ul>
  );
};

export default GroupsList;
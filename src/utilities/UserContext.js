import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const UserContext = React.createContext();

const CURRENT_USER_QUERY = gql`
  {
    me {
      id
      email
      username
      token
    }
  }
`;

const UserProvider = props => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  return (
    <UserContext.Provider
      value={{
        loading,
        error,
        data,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

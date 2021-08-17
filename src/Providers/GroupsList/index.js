import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const GroupsListContext = createContext();

export const GroupsListProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    if (nextPage !== null) {
      api
        .get(`/groups/?page=${page}`)
        .then(resp => {
          setNextPage(resp.data.next);
          setPage(page + 1);
          setGroupsList([...groupsList, ...resp.data.results]);
        })
        .catch(err => console.log(err));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsList])

  return (
    <GroupsListContext.Provider value={{ groupsList }}>
      {children}
    </GroupsListContext.Provider>
  );
}

export const useGroupsList = () => useContext(GroupsListContext);

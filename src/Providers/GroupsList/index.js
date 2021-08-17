import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const GroupsListContext = createContext();

export const GroupsListProvider = ({ children }) => {
  const [groupsList, setGroupsList] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    if (page !== null) {
      api
        .get(`/groups/?page=${page}`)
        .then(resp => {
          setNextPage(resp.data.next);
          setPrevPage(resp.data.previous);
          setGroupsList(resp.data.results);
        })
        .catch(err => console.log(err));
    }
  }, [page])

  return (
    <GroupsListContext.Provider value={{ groupsList, prevPage, nextPage, page, setPage }}>
      {children}
    </GroupsListContext.Provider>
  );
}

export const useGroupsList = () => useContext(GroupsListContext);

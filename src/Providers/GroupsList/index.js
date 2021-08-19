import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useUser } from "../User";

const GroupsListContext = createContext();

export const GroupsListProvider = ({ children }) => {
  const { user } = useUser();
  const [groupsList, setGroupsList] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    if (user.token) {
      if (nextPage !== null) {
        api
          .get(`/groups/?page=${page}`)
          .then((resp) => {
            setNextPage(resp.data.next);
            setPage(page + 1);
            setGroupsList([...groupsList, ...resp.data.results]);
          })
          .catch((err) => console.log(err));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsList, user]);

  const submitGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((resp) => {
        setGroupsList([...groupsList, resp.data]);
        toast.success("Grupo criado com sucesso!");
      })
      .catch((_) => toast.error("Falha ao cadastrar!"));
  };

  return (
    <GroupsListContext.Provider value={{ groupsList, submitGroup }}>
      {children}
    </GroupsListContext.Provider>
  );
};

export const useGroupsList = () => useContext(GroupsListContext);

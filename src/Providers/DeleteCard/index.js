// import { createContext, useContext, useState } from "react";
// import { toast } from "react-toastify";
// import api from "../../Services/api";

// // const token = JSON.parse(localStorage.getItem("@Habits:access"));

// // const DeleteContext = createContext();

// export const DeleteProvider = ({ children }) => {
//   const [habits, setHabits] = useState([]);

//   // const deleteElements = (clicked) => {
//   //   const filter = habits.filter((item) => item.id !== clicked.id);

//   //   api
//   //     .delete("habits", {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     })
//   //     .then(setHabits(filter), toast.success("Card deletado com sucesso"))
//   //     .catch((_) => toast.error("Erro de conexão"));
//   // };

//   return (
//     <DeleteContext.Provider value={{ deleteElements }}>
//       {children}
//     </DeleteContext.Provider>
//   );
// };

// export const useDelete = () => useContext(DeleteContext);

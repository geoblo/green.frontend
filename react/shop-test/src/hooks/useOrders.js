import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders(params) {
  const { orders } = useContext(AppStateContext);

  return orders;
}
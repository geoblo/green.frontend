import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes(params) {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
import { RootContext } from "../context/RootContext";
import { useContext } from "react";

export const useRoot = () => useContext(RootContext);

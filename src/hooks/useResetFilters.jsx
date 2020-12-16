import { useDispatch } from "react-redux";
import { setStatus, setLocation, setName } from "../redux/actions";

const useResetFilters = () => {
  // Resetear filtros
  const dispatcher = useDispatch();

  const resetFilters = () => {
    // Reseteamos nombre
    dispatcher(setName(""));

    // Reseteamos estado
    dispatcher(setStatus(""));

    // Reseteamos ubicación
    dispatcher(setLocation(""));
  };

  return [resetFilters];
};

export default useResetFilters;

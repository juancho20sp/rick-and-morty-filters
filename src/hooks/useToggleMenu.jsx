// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../redux/actions";

const useToggleMenu = () => {
  // Traemos el estado global
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  //   Creamos el dispatcher
  const dispatcher = useDispatch();

  //   Modificamos el estado global
  const toggle = () => dispatcher(toggleMenu());

  return [isMenuOpen, toggle];
};

export default useToggleMenu;

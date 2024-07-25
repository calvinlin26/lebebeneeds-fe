import { useEffect } from "react";
import { useShowcaseContext } from "./useShowcaseContext";

function useNavSideBar(intialNavSideBar: NavSideBar[]) {
  const { setNavSideBar } = useShowcaseContext();

  useEffect(() => {
    setNavSideBar(intialNavSideBar);
  }, [intialNavSideBar]);
}

export default useNavSideBar;

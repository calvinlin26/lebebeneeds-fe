import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function useScrollIntoView() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const releventDiv = document.getElementById(hash);
      if (releventDiv) {
        releventDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
}

export default useScrollIntoView;

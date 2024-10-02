import DetailPage from "./detail";
import { Hash } from "../../constants";
import ListPage from "./list";
import { useLocation } from "react-router-dom";

const Index: React.FC = () => {
  const { hash } = useLocation();

  if (hash === Hash.DETAIL) {
    return <DetailPage />;
  }

  return <ListPage />;
};

export default Index;

import ListPage from "./list";
import DetailPage from "./detail";
import ApprovalSetup from "./approvalSetup";
import AddLevel from "./addLevel";
import { Hash } from "../../constants";
import { useLocation } from "react-router-dom";

function AVM() {
  const { hash } = useLocation();

  if (hash === Hash.DETAIL) {
    return <DetailPage />;
  }

  if (hash === Hash.SETUP) {
    return <ApprovalSetup />;
  }

  if (hash === Hash.SETUP_LEVEL) {
    return <AddLevel />;
  }

  return <ListPage />;
}

export default AVM;

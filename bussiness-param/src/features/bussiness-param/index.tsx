import React from "react"
import BussinessParamListPage from "./list"
import { usePageParam } from "./hooks/usePageParam";
import ModifyBussinessParamPage from "./modify"

const Index: React.FC = () => {

  const code = usePageParam().get("code");
  const action = usePageParam().get("action");

  if ( action === "1" ) {
    return <ModifyBussinessParamPage code={code}/>
  }

  return <BussinessParamListPage/>;
};

export default Index;
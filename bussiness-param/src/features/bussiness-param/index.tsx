import React from "react"
import BussinessParamListPage from "./list"
import { usePageParam } from "./hooks/usePageParam";
import ModifyBussinessParamPage from "./modify"

const Index: React.FC = () => {

  const id = usePageParam().get("id");
  const action = usePageParam().get("action");

  if ( action === "1" ) {
    return <ModifyBussinessParamPage id={id}/>
  }

  return <BussinessParamListPage/>;
};

export default Index;
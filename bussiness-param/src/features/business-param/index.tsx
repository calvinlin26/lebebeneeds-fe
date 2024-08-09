import React from "react"
import BusinessParamListPage from "./list"
import { usePageParam } from "./hooks/usePageParam";
import ModifyBusinessParamPage from "./modify"

const Index: React.FC = () => {

  const code = usePageParam().get("code");
  const action = usePageParam().get("action");

  if ( action === "1" ) {
    return <ModifyBusinessParamPage code={code}/>
  }

  return <BusinessParamListPage/>;
};

export default Index;
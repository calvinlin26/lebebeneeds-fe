import React, { useEffect, useState } from "react";
import useUserAccess from "../hooks/useUserAccess";
import { useLocation, useNavigate } from "react-router-dom";

const withUserAccess = (WrappedComponent: React.FC) => (props: {}) => {
  const { accessUser, loading } = useUserAccess();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [services, setServices] = useState({});

  useEffect(() => {
    const hasAccessMenu: any = accessUser.find((item: any) =>
      currentPath.startsWith(item.url)
    );
    if (!hasAccessMenu && !loading) {
      navigate("/");
    } else if (!loading) {
      let services = {};
      Object.keys(hasAccessMenu?.services).map((key: string) => {
        services = {
          ...services,
          [hasAccessMenu?.services[key]?.serviceCode]: true,
        };
      });
      setServices(services);
    }
  }, [accessUser, currentPath]);

  if (loading) return <div>Authenticating...</div>;

  return <WrappedComponent {...props} {...services} />;
};

export default withUserAccess;

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
    const destructorMenu = accessUser.flatMap((menuItem) => [
      { url: menuItem.url, services: menuItem.services },
      ...(menuItem.items?.map((item) => ({
        url: item.url,
        services: menuItem.services,
      })) || []),
    ]);
const hasAccessMenu: any = destructorMenu.find((item: any) =>
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

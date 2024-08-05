import useUserAccess from "./useUserAccess";

function useSidebarItems() {
  const { accessUser } = useUserAccess();

  const staticItems = [
    {
      path: "/",
      label: "Dashboard",
    },
  ];

  const dynamicItems = accessUser.map((menuItem) => ({
    path: menuItem.url,
    label: menuItem.label,
    items: menuItem.items
      ? menuItem.items.map((subItem) => ({
          path: subItem.url,
          label: subItem.label,
        }))
      : undefined,
  }));

  const sidebarItems = [...staticItems, ...dynamicItems];

  return { sidebarItems };
}

export default useSidebarItems;

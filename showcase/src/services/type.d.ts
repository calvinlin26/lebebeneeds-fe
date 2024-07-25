type Item = {
  path: string;
  label: string;
};

type Group = {
  label: string;
  path: string | null;
  items: Item[] | null;
};

type GroupOrItem = Group | Item;

type NavSideBar = GroupOrItem;

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface Props {
  children: ReactNode;
}

interface ShowcaseContextType {
  navSideBar: NavSideBar[];
  setNavSideBar: Dispatch<SetStateAction<NavSideBar[]>>;
}

const contextValue = {
  navSideBar: [],
  setNavSideBar: () => {},
};

export const ShowcaseContext = createContext<ShowcaseContextType>(contextValue);

export const ShowcaseProvider = ({ children }: Readonly<Props>) => {
  const [navSideBar, setNavSideBar] = useState<NavSideBar[]>([]);

  return (
    <ShowcaseContext.Provider value={{ navSideBar, setNavSideBar }}>
      {children}
    </ShowcaseContext.Provider>
  );
};

export function useShowcaseContext() {
  return useContext(ShowcaseContext);
}

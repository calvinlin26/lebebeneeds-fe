import Avatar from "../features/components/avatar";
import BigNumberInput from "../features/components/big-number-input";
import Button from "../features/components/button";
import DropdownSelect from "../features/components/dropdown-select";
import Input from "../features/components/input";
import Label from "../features/components/label";
import Navbar from "../features/components/navbar";
import Toast from "../features/components/toast";
import Pagination from "../features/components/pagination";
import Sidebar from "../features/components/sidebar";
import TabShowcase from "../features/components/tabs";
import Table from "../features/components/table";
import Layout from "../features/components/layout";
import Tooltip from "../features/components/tooltip";
import Checkbox from "../features/components/checkbox"
import Form from "../features/components/form"
import Dialog from "../features/components/dialog"
import Footer from "../features/components/footer"

export const listComponent = [
  {
    path: "/avatar",
    label: "Avatar",
    element: <Avatar />,
    index: false,
  },
  {
    path: "/big-number-input",
    label: "Big Number Input",
    element: <BigNumberInput />,
    index: false,
  },
  {
    path: "/button",
    label: "Button",
    element: <Button />,
    index: false,
  },
  {
    path: "/checkbox",
    label: "Checkbox",
    element: <Checkbox />,
    index: false,
  },
  {
    path: "/dialog",
    label: "Dialog",
    element: <Dialog />,
    index: false,
  },
  {
    path: "/dropdown-select",
    label: "Dropdown Select",
    element: <DropdownSelect />,
    index: false,
  },
  {
    path: "/footer",
    label: "Footer",
    element: <Footer />,
    index: false,
  },
  {
    path: "/form",
    label: "Form",
    element: <Form />,
    index: false,
  },
  {
    path: "/input",
    label: "Input",
    element: <Input />,
    index: false,
  },
  {
    path: "/label",
    label: "Label",
    element: <Label />,
    index: false,
  },
  {
    path: "/layout",
    label: "Layout",
    element: <Layout />,
    index: false,
  },
  {
    path: "/navbar",
    label: "Navbar",
    element: <Navbar />,
    index: false,
  },
  {
    path: "/pagination",
    label: "Pagination",
    element: <Pagination />,
    index: false,
  },
  {
    path: "/sidebar",
    label: "Sidebar",
    element: <Sidebar />,
    index: false,
  },
  {
    path: "/table",
    label: "Table",
    element: <Table />,
    index: false,
  },
  {
    path: "/tabs",
    label: "Tabs",
    element: <TabShowcase />,
    index: false,
  },
  {
    path: "/toast",
    label: "Toast (Sonner)",
    element: <Toast />,
    index: false,
  },
  {
    path: "/tooltip",
    label: "Tooltip",
    element: <Tooltip />,
    index: false,
  },
];

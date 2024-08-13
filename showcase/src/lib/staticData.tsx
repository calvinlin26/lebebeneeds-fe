//FE Components
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
import Checkbox from "../features/components/checkbox";
import Form from "../features/components/form";
import Dialog from "../features/components/dialog";
import Footer from "../features/components/footer";
//BE Reusability
import AuthenticationAuthorization from "../features/backend/authenticationAuthorization";
import RefreshToken from "../features/backend/refresh-token";
import Introspect from "../features/backend/introspect";
import RevokeToken from "../features/backend/revoke-token";
import AdminSpesificParam from "../features/backend/admin-spesific-param";
import AdminAllParam from "../features/backend/admin-all-param";
import AdminSaveEditParam from "../features/backend/admin-save-edit-param";
import ParameterByCategory from "../features/backend/parameter-by-category";
import ParameterByParamId from "../features/backend/parameter-by-param-id";
import ParameterByParentId from "../features/backend/parameter-by-parent-id";
import FeParameterByCategory from "../features/backend/fe-parameter-by-category";
import GetAllUser from "../features/backend/get-all-user";
import GetByUsername from "../features/backend/get-by-username";
import AddUser from "../features/backend/add-user";
import EditUser from "../features/backend/edit-user";
import DeactiveUser from "../features/backend/deactive-user";
import AssignRole from "../features/backend/assign-role-user";
import GetAllRole from "../features/backend/get-all-role";
import GetByRole from "../features/backend/get-by-role";
import AddRole from "../features/backend/add-role";
import EditRole from "../features/backend/edit-role";
import DeactiveRole from "../features/backend/deactivate-role";
import AssignService from "../features/backend/assign-service-role";
import AssignMenu from "../features/backend/assign-menu-role";
import GetAllService from "../features/backend/service-all-service";
import GetAllMenu from "../features/backend/menu-all-menu";
import MenuAssignService from "../features/backend/menu-assign-service";
// MOBILE Reusability
import AppBar from "../features/mobile/app-bar";
import OtpInput from "../features/mobile/otp-input";
import ImagePicker from "../features/mobile/image-picker";
import ContactPicker from "../features/mobile/contact-picker";
import DatePicker from "../features/mobile/date-picker";
import Carousel from "../features/mobile/carousel";
import BaseButton from "../features/mobile/base-button";
import TextField from "../features/mobile/text-field";
import ListView from "../features/mobile/list-view";
import LazyLoad from "../features/mobile/lazy-load";
import TabBar from "../features/mobile/tab-bar";
import Snackbar from "../features/mobile/snackbar";
import StaticDropdown from "../features/mobile/static-dropdown";
import ApiDropdown from "../features/mobile/api-dropdown";
import CheckboxMobile from "../features/mobile/checkbox";
import QRScanner from "../features/mobile/qrscanner";
import QRUploader from "../features/mobile/qruploader";
import Switch from "../features/mobile/switch";

//FE
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

//BE
export const listComponentBackend = [
  {
    path: "/authenticationAuthorization",
    label: "Authen & Author",
    element: <AuthenticationAuthorization />,
    index: false,
  },
  {
    path: "/refresh-token",
    label: "Refresh Token",
    element: <RefreshToken />,
    index: false,
  },
  {
    path: "/introspect",
    label: "Interospect",
    element: <Introspect />,
    index: false,
  },
  {
    path: "/revoke-token",
    label: "Revoke Access Token",
    element: <RevokeToken />,
    index: false,
  },
  {
    path: "/admin-spesific-param",
    label: "Admin Spesific Parameter",
    element: <AdminSpesificParam />,
    index: false,
  },
  {
    path: "/admin-all-param",
    label: "Admin All Parameter",
    element: <AdminAllParam />,
    index: false,
  },
  {
    path: "/admin-save-edit-param",
    label: "Admin Save Edit Parameter",
    element: <AdminSaveEditParam />,
    index: false,
  },
  {
    path: "/parameter-by-category",
    label: "Backend Get Parameter By Category",
    element: <ParameterByCategory />,
    index: false,
  },
  {
    path: "/parameter-by-param-id",
    label: "Frontend Get Parameter By Param ID",
    element: <ParameterByParamId />,
    index: false,
  },
  {
    path: "/parameter-by-parent-id",
    label: "Frontend Get Parameter By Parent ID",
    element: <ParameterByParentId />,
    index: false,
  },
  {
    path: "/fe-parameter-by-category",
    label: "Frontend Get Parameter By Category",
    element: <FeParameterByCategory />,
    index: false,
  },
  {
    path: "/get-all-user",
    label: "User - Get All User",
    element: <GetAllUser />,
    index: false,
  },
  {
    path: "/get-by-username",
    label: "User - Get By Username",
    element: <GetByUsername />,
    index: false,
  },
  {
    path: "/add-user",
    label: "User - Add User",
    element: <AddUser />,
    index: false,
  },
  {
    path: "/edit-user",
    label: "User - Edit User",
    element: <EditUser />,
    index: false,
  },
  {
    path: "/deactive-user",
    label: "User - Deactive User",
    element: <DeactiveUser />,
    index: false,
  },
  {
    path: "/assign-role-user",
    label: "User - Assign Role",
    element: <AssignRole />,
    index: false,
  },
  {
    path: "/get-all-role",
    label: "Role - Get All Role",
    element: <GetAllRole />,
    index: false,
  },
  {
    path: "/get-by-role",
    label: "Role - Get by Role",
    element: <GetByRole />,
    index: false,
  },
  {
    path: "/add-role",
    label: "Role – Add Role",
    element: <AddRole />,
    index: false,
  },
  {
    path: "/edit-role",
    label: "Role – Edit Role",
    element: <EditRole />,
    index: false,
  },
  {
    path: "/deactivate-role",
    label: "Role – Deactivate By Role",
    element: <DeactiveRole />,
    index: false,
  },
  {
    path: "/assign-service-role",
    label: "Role – Assign Services",
    element: <AssignService />,
    index: false,
  },
  {
    path: "/assign-menu-role",
    label: "Role – Assign Menus",
    element: <AssignMenu />,
    index: false,
  },
  {
    path: "/get-all-service",
    label: "Service – Get All Service",
    element: <GetAllService />,
    index: false,
  },
  {
    path: "/get-all-menu",
    label: "Menu – Get All Menu",
    element: <GetAllMenu />,
    index: false,
  },
  {
    path: "/menu-assign-service",
    label: "Menu – Assign Services",
    element: <MenuAssignService />,
    index: false,
  },
];

//MOBILE
export const listComponentMobile = [
  {
    path: "/app-bar",
    label: "App Bar",
    element: <AppBar />,
    index: false,
  },
  {
    path: "/otp-input",
    label: "OTP Input",
    element: <OtpInput />,
    index: false,
  },
  {
    path: "/image-picker",
    label: "Image Picker",
    element: <ImagePicker />,
    index: false,
  },
  {
    path: "/carousel",
    label: "Carousel",
    element: <Carousel />,
    index: false,
  },
  {
    path: "/contact-picker",
    label: "Contact Picker",
    element: <ContactPicker />,
    index: false,
  },
  {
    path: "/date-picker",
    label: "Date Picker",
    element: <DatePicker />,
    index: false,
  },
  {
    path: "/base-button",
    label: "Base Button",
    element: <BaseButton />,
    index: false,
  },
  {
    path: "/text-field",
    label: "Text Field",
    element: <TextField />,
    index: false,
  },
  {
    path: "/list-view",
    label: "List View",
    element: <ListView />,
    index: false,
  },
  {
    path: "/lazy-load",
    label: "Lazy Load",
    element: <LazyLoad />,
    index: false,
  },
  {
    path: "/tab-bar",
    label: "Tab Bar",
    element: <TabBar />,
    index: false,
  },
  {
    path: "/snackbar",
    label: "Snackbar",
    element: <Snackbar />,
    index: false,
  },
  {
    path: "/static-dropdown",
    label: "Static Dropdown",
    element: <StaticDropdown />,
    index: false,
  },
  {
    path: "/api-dropdown",
    label: "API Dropdown",
    element: <ApiDropdown />,
    index: false,
  },
  {
    path: "/checkboxmobile",
    label: "Checkbox",
    element: <CheckboxMobile />,
    index: false,
  },
  {
    path: "/qrscanner",
    label: "QR Scanner",
    element: <QRScanner />,
    index: false,
  },
  {
    path: "/qruploader",
    label: "QR Uploader",
    element: <QRUploader />,
    index: false,
  },
  {
    path: "/switch",
    label: "Switch",
    element: <Switch />,
    index: false,
  },
];

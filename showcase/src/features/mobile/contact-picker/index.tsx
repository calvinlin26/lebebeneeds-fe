import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/contact-picker.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/contact-picker#preview", label: "Preview" },
    { path: "/contact-picker#dependencies", label: "Dependencies" },
    {
      path: "/contact-picker#setups",
      label: "Setups",
      items: [
        { path: "/contact-picker#android", label: "Android" },
        { path: "/contact-picker#ios", label: "IOS" },
      ],
    },
    { path: "/contact-picker#usage", label: "Usage" },
  ]);
  useScrollIntoView();

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Contact Picker
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component enables you to select contacts directly from the user's address book, with optional image picking capabilities. 
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <img className="h-[300px]" src={PreviewImage} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/ui_kit/permission/permission_call.dart (following customized permission request | unless self-modified)
/ui_kit/permission/contact_dialog.dart
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`flutter_contacts (https://pub.dev/packages/flutter_contacts)
image_picker (https://pub.dev/packages/image_picker) (optional, may be turned off as permission_call file is a customized permission request)
mime (https://pub.dev/packages/mime)
-permission_handler (https://pub.dev/packages/permission_handler)`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#dependencies">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Dependencies
        </h3>
        <hr />
        <CodeBlocks
          code={`/pubspec.yaml:

dependencies:
  permission_handler: ^[latest]
  flutter_contacts: ^[latest]`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#setups">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Setups
        </h3>
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#android"
        >
          Android
        </h5>

        <CodeBlocks
          code={`/android/app/src/main/AndroidManifest.xml

<manifest xmlns:android="https://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.READ_CONTACT" />
    <uses-permission android:name="android.permission.WRITE_CONTACT" />`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight" id="#ios">
          IOS
        </h5>
        <CodeBlocks
          code={`/ios/Runner/info.plist:
            
<key>NSCaontactsUsageDescription</key>
<string>This app requires access to the contact to autofill number</string>`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/controller/[controller file]:
            
<PermissionStatus status = await DevicePermission.requestStatus(
  context, PlatformPermisson.contact,
);
if (status == PermissionStatus.granted) {
  Contact? contact = await FlutterContacts().openExternalPick();
}
    if (contact != null) {
        resultCase.value = LoadedCase(contact)
    }`}
          language="js"
        />
        <br />
        <strong>Note:</strong> the “result” variable may vary based on
        presentation needs or UI design, int is just example
        <br />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/[screen file]:`}
          language="js"
        />
      </div>
    </div>
  );
};

export default Index;

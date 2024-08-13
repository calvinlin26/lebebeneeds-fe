import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/qruploader.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/qruploader#preview", label: "Preview" },
    { path: "/qruploader#dependencies", label: "Dependencies" },
    {
      path: "/qruploader#setups",
      label: "Setups",
      items: [
        { path: "/qruploader#android", label: "Android" },
        { path: "/qruploader#ios", label: "IOS" },
      ],
    },
    { path: "/qruploader#usage", label: "Usage" },
  ]);
  useScrollIntoView();

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          QR Uploader
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          A customizable QR uploader for Flutter applications. This component allows you to read QR codes from the gallery with ease.
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
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`flutter_scankit (https://pub.dev/packages/flutter_scankit)
permission_handler (https://pub.dev/packages/permission_handler)
mime(https://pub.dev/packages/mime)`}
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
  flutter_scankit: ^[latest]
  permission_handler: ^[latest]
  mime: ^[latest]`}
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
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
    <uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight" id="#ios">
          IOS
        </h5>
        <CodeBlocks
          code={`/ios/Runner/info.plist:
            
<key>NSCaontactsUsageDescription</key>
<string>[your reason]</string>`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/controller/[controller file]:
            
ScanKitDecoder decoder = ScanKitDecoder();
Future<void> uploadQr(BuildContext ctx) async {
    PermissionStatus? permission = await DevicePermission.requestStatus(
      ctx,
      PlatformPermission.gallery
    )

    if (permission == PermissionStatus.granted) {
        XFile ? xfile = await ImagePicker().PickImage(source: ImageSOurce.gallery)
    }
        if(xFile !== null) {
            final type == lookipMimeType(xFile_Path)
        } if(type?.toLowerCase().contains("image") == true) {
         try {
            UIntBlist buffer = await xFile.readAsBytes();

            var result = await decoder.decodeImage(buffer)
            String resVal = result.originalValue

            debugPrint("Value: $resVal");
          } catch(e) {
            debugPrint('Failed to process QR : {e.toString()}');
          }else {
            debugPrint("Unsupported file format")
          }
        } else {
          debugPrint("Cancelled")
        }
    } else {
      debugPrint("Permission denied")
    }
}

@override
void dispose(){
    qrCo.dispose();
    super.dispose()
}
`}
          language="js"
        />
        <br />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/[screen file]:
            
BaseButton(
    color: AppColors.mainColor,
    borderCOlor: AppColors.mainColor,
    textColor: Colors.white,
    title: "Upload QR",
    enabled: true,
    width: 80.w,
    paddingHorizontal: (2.5).w,
    height: 5.h
    onPressed:() {
        controller.uploadQr(context);
    },
)
`}
          language="js"
        />
      </div>
    </div>
  );
};

export default Index;

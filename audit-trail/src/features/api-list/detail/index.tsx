import { Input } from "mainApp/input";
import { Button } from "mainApp/button";
import { toast } from "sonner";
import { useState } from "react";
import { useApiDetailData } from "../hooks/useDetailApiData";
import withUserAccess from "mainApp/withUserAccess";
import { formatDate } from "../../../lib/utils";

function Index() {
    const [buttonText, setButtonText] = useState("Copy Response");
    const {apiDetailData} = useApiDetailData()

    const handleCopy = () => {
        // Simulate copying response data to clipboard
        navigator.clipboard.writeText(apiDetailData?.responseData || "")
          .then(() => {
            toast("Copied to clipboard!");
    
            // Change button text to "Copied"
            setButtonText("Copied Response");
    
            // Revert back to "Copy Response" after 2 seconds
            setTimeout(() => {
              setButtonText("Copy Response");
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      };

      const style = "disabled:cursor-default disabled:bg-gray-100 disabled:text-black"
    
      
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">API Detail</h1>

      <div>
        <label className="font-semibold">Audit ID</label>
        <Input className={style} type="text" disabled value={apiDetailData?.apiAuditId || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Username</label>
        <Input className={style} disabled value={apiDetailData?.username || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Host</label>
        <Input className={style} type="text" disabled value={apiDetailData?.host || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">User IP</label>
        <Input className={style} type="text" disabled value={apiDetailData?.userIp || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Event Date</label>
        <Input className={style} type="text" disabled value={formatDate(apiDetailData?.eventDate || "") || ""}/>
      </div>
      <br />
      <div className="shadow-lg py-4 px-8">
      <br />
      <div>
        <label className="font-semibold">Path</label>
        <Input className={style} type="text" disabled value={apiDetailData?.path || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Method</label>
        <Input className={style} type="text" disabled value={apiDetailData?.method || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Request Data</label>
        <Input className={style} type="text" disabled value={apiDetailData?.requestData || ""}/>
      </div>
      <br />
      <div>
        <div className="flex justify-between">
        <label className="font-semibold">Response Data</label>
        <Button onClick={handleCopy}>{buttonText}</Button>
        </div>
        <br />
        <textarea
          className="border rounded p-2 w-full h-32 resize-none text-gray-500 font-sans"
          disabled
          value={apiDetailData?.responseData || ""}
        />
      </div>
      </div>
    </div>
  );
}

export default withUserAccess(Index);

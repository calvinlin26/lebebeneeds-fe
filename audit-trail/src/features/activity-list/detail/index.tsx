import { Input } from "mainApp/input";
import { useActivityDetailData } from "../hooks/useDetailActivityData";
import { formatDate } from "../../../lib/utils";

function Index() {
  const style = "disabled:cursor-default disabled:bg-gray-100 disabled:text-black"
  const {activityDetailData} = useActivityDetailData()
      
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Activity Detail</h1>

      <div>
        <label className="font-semibold">Activity ID</label>
        <Input className={style} type="text" disabled value={activityDetailData?.activityId || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Username</label>
        <Input className={style} type="text" disabled value={activityDetailData?.username || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Code</label>
        <Input className={style} type="text" disabled value={activityDetailData?.actionCode || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Description</label>
        <Input className={style} type="text" disabled value={activityDetailData?.actionDescription || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">Date</label>
        <Input className={style} type="text" disabled value={formatDate(activityDetailData?.actionDate || "") || ""}/>
      </div>
      <br />
      <div>
        <label className="font-semibold">After</label>
        <Input className={style} type="text" disabled value={activityDetailData?.after || ""}/>
      </div>
    </div>
  );
}

export default Index;

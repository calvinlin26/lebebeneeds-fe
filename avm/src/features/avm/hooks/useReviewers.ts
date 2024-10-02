import { useEffect, useState } from "react";

import { getGroups, getUsers } from "../../../services";

interface ReviewersSchema {
  groups: ListSchema[];
  users: ListSchema[];
}

interface ListSchema {
  active: boolean;
  id: string;
  name: string;
}

export const useRiviewers = () => {
  const [dataReviewers, setDataReviewers] = useState<ReviewersSchema>();
  const [params, setParams] = useState({
    page: 0,
    size: 10,
    criteria: "",
    reviewerType: "GROUP",
  });
  const [reviewersTotalPages, setReviewersTotalPages] = useState(0);

  useEffect(() => {
    fetchReviewers();
  }, [params]);

  const fetchReviewers = async () => {
    const groups = await getGroups(params);
    const users = await getUsers(params);
    setReviewersTotalPages(
      params.reviewerType === "GROUP" ? groups.totalPages : users.totalPages
    );
    setDataReviewers({
      groups: groups.content.map((item: any) => ({
        ...item,
        userOrGroupId: item.id,
        userOrGroupName: item.name,
        reviewerType: "GROUP",
      })),
      users: users.content.map((item: any) => ({
        ...item,
        userOrGroupId: item.id,
        userOrGroupName: item.name,
        reviewerType: "USER",
      })),
    });
  };

  return {
    dataReviewers,
    reviewersTotalPages,
    params,
    setParams,
  };
};

import React, { useContext, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { observer } from "mobx-react-lite";
import { UserContext } from "../..";

const AdminMain = () => {
  const { userStore } = useContext(UserContext);

  useEffect(() => {
    userStore?.getSubscriptionStats();
  }, [userStore]);

  return (
    <div className="container_admin">
      <PieChart
        series={[
          {
            data: userStore?.subscriptionStats || [],
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter: (element) => `${element.value}%`,
          },
        ]}
        height={200}
      />
    </div>
  );
};

export default observer(AdminMain);

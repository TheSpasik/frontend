import React, { useContext, useState } from "react";
import "../Modal/mem-modal.css";
import { UserContext } from "../..";
import { Button, Input, Modal } from "antd";
import { observer } from "mobx-react-lite";

const MembershipsModal = () => {
  const { userStore } = useContext(UserContext);
  const [cardnumber, setCardnumber] = useState("");
  const [carddate, setCarddate] = useState("");
  const [cardcvv, setCardcvv] = useState("");

  const renderContent = () => {
    return (
      <div className="modal_box">
        <div>
          <Input
            value={cardnumber}
            placeholder="Username"
            onChange={(event) => setCardnumber(event.target.value)}
            className="modal_input"
          />
          <Input
            value={carddate}
            placeholder="Email"
            onChange={(event) => setCarddate(event.target.value)}
            className="modal_input"
          />
          <Input
            value={cardcvv}
            placeholder="Cardcvv"
            type="cardcvv"
            onChange={(event) => setCardcvv(event.target.value)}
            className="modal_input"
          />
        </div>
        <div className="btn-box">
          <Button
            className="signup-btn"
            onClick={() => userStore.changeSubscription(userStore?.user?.userId, userStore?.lookingSubscription, cardnumber, carddate, cardcvv)}
          >
            Change Subscription
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal  
      title={
        <div style={{ textAlign: "center", fontSize: "20px" }}>Change Subscription</div>
      }
      closable={false}
      open={userStore?.isChangeSubscriptionModalOpen}
      onCancel={() => userStore.setIsChangeSubscriptionModalOpen(false)}
      onOk={() => userStore.registration(cardnumber, carddate, cardcvv)}
      footer={[]}
    >
      {renderContent()}
    </Modal>
  );
};

export default observer(MembershipsModal) ;

import React, { useContext, useState, useMemo } from "react";
import "../Modal/mem-modal.css";
import { UserContext } from "../..";
import { Button, Input, Modal } from "antd";
import { observer } from "mobx-react-lite";

const MembershipsModal = () => {
  const { userStore } = useContext(UserContext);
  const [cardnumber, setCardnumber] = useState("");
  const [carddate, setCarddate] = useState("");
  const [cardcvv, setCardcvv] = useState("");

  const changeSubscriptionInDisabled = useMemo(() => {
    return (
      cardnumber?.length !== 19 ||
      carddate?.length !== 5 ||
      cardcvv?.length !== 3
    );
  }, [cardnumber, carddate, cardcvv]);

  const formatCreditCardNumber = (value) => {
    if (!value) {
      return value;
    }
    value = value.replace(/\D+/g, "");
    return `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(
      8,
      12
    )} ${value.slice(12, 19)}`.trim();
  };

  const formatCreditCardCVV = (value) => {
    return value.replace(/\D+/g, "").slice(0, 3);
  };

  const formatCreditCardExpirationDate = (value) => {
    value = value.replace(/\D+/g, "");

    if (value.length >= 3) {
      return `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
  };

  const renderContent = () => {
    return (
      <div className="modal_box">
        <div>
          <Input
            value={cardnumber}
            placeholder="Card Number"
            onChange={(event) =>
              setCardnumber(formatCreditCardNumber(event.target.value))
            }
            className="modal_input"
            maxLength={19}
          />
          <Input
            value={carddate}
            placeholder="MM/YY"
            onChange={(event) =>
              setCarddate(formatCreditCardExpirationDate(event.target.value))
            }
            className="modal_input"
            maxLength={5}
          />
          <Input
            value={cardcvv}
            placeholder="CVV"
            type="password"
            onChange={(event) =>
              setCardcvv(formatCreditCardCVV(event.target.value))
            }
            className="modal_input"
            maxLength={3}
          />
        </div>
        <div className="btn-box">
          <Button
            className="signup-btn"
            disabled={changeSubscriptionInDisabled}
            onClick={() =>
              userStore.changeSubscription(
                userStore?.user?.userId,
                userStore?.lookingSubscription,
                cardnumber,
                carddate,
                cardcvv
              )
            }
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
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Change Subscription
        </div>
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

export default observer(MembershipsModal);

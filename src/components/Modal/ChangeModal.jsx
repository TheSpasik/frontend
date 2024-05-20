import React, { useContext, useState } from "react";
import { Modal, Input, Button, Typography } from "antd";
import { UserContext } from "../..";
import { observer } from "mobx-react-lite";
import "../Modal/change-modal.css";

const ChangeModal = () => {
  const { userStore } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeBioStage = () => {
    return (
      <div className="modal_box">
        <div>
          <Input
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            className="modal_input"
          />
          <Input
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            className="modal_input"
          />
          <Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="modal_input"
          />
        </div>
        <div className="btn-box">
          <Button
            className="signup-btn"
            onClick={() => userStore.changeBio(username, email, password)}
          >
            Change Bio
          </Button>
        </div>
      </div>
    );
  };
  console.log(userStore?.isChangeBioModalOpen)
  return (
    <Modal
      title={
        <div style={{ textAlign: "center", fontSize: "20px" }}>Change Bio</div>
      }
      closable={false}
      open={userStore?.isChangeBioModalOpen}
      onCancel={() => userStore.setIsChangeBioModalOpen(false)}
      footer={[]}
    >
      {changeBioStage()}
    </Modal>
  );
};

export default observer(ChangeModal);

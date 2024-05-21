import React, { useContext, useState, useMemo } from "react";
import { Modal, Input, Button, Typography } from "antd";
import { UserContext } from "../..";
import { observer } from "mobx-react-lite";
import "../Modal/change-modal.css";

const ChangeModal = () => {
  const { userStore } = useContext(UserContext);
  const [username, setUsername] = useState(userStore?.user?.name);
  const [email, setEmail] = useState(userStore?.user?.email);
  const [password, setPassword] = useState('');

  const changeBioDisabled = useMemo(() => {
    const emailValid = RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    ).test(email);
    return !emailValid;
  }, [email]);

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
            disabled={changeBioDisabled}
            onClick={() => userStore.changeBio(username, email, password)}
          >
            Change Bio
          </Button>
        </div>
      </div>
    );
  };
  console.log(userStore?.isChangeBioModalOpen);
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

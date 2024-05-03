import React, { useContext, useState } from "react";
import { Modal, Input } from "antd";
import { UserContext } from "../..";
import { observer } from "mobx-react-lite";

const RegistrationModal = () => {
  const { userStore } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal
      title="Registration form"
      open={userStore?.isRegistrationModalOpen}
      onCancel={() => userStore.setIsRegistrationModalOpen(false)}
      onOk={() => userStore.registration(username, email, password)}
    >
      <Input
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        value={password}
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
    </Modal>
  );
};

export default observer(RegistrationModal);

import React, { useContext, useState } from "react";
import { Modal, Input, Button, Typography } from "antd";
import { UserContext } from "../..";
import { observer } from "mobx-react-lite";
import "../Modal/reg-modal.css";

const { Text } = Typography;

const RegistrationModal = () => {
  const { userStore } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginStage, setIsLoginStage] = useState(true);

  const renderSignInStage = () => {
    return (
      <div className="modal_box">
        <div>
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
          <Button onClick={() => setIsLoginStage(false)} className="signup-btn">
            Create an account
          </Button>
          <Button className="signup-btn" onClick={() => userStore.signIn(email, password)}>Login</Button>
        </div>
      </div>
    );
  };

  const renderSignUpStage = () => {
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
          <Button onClick={() => setIsLoginStage(true)} className="signup-btn">
            Already have an account?
          </Button>
          <Button className="signup-btn" onClick={() => userStore.signUp(username, email, password)}>Register</Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      title={
        isLoginStage ? (
          <div style={{ textAlign: "center", fontSize: "20px" }}>Sign In</div>
        ) : (
          <div style={{ textAlign: "center", fontSize: "20px" }}>Sign Up</div>
        )
      }
      closable={false}
      open={userStore?.isAuthModalOpen}
      onCancel={() => userStore.setIsAuthModalOpen(false)}
      onOk={() => userStore.registration(username, email, password)}
      footer={[]}
    >
      {isLoginStage ? renderSignInStage() : renderSignUpStage()}
    </Modal>
  );
};

export default observer(RegistrationModal);

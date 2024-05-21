import React, { useContext, useState, useMemo } from "react";
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

  const signInDisabled = useMemo(() => {
    return !email || !password;
  }, [email, password]);

  const signUnDisabled = useMemo(() => {
    const emailValid = RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    ).test(email);
    return !email || !emailValid || !password || !username;
  }, [email, password, username]);

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
          <Button
            className="signup-btn"
            disabled={signInDisabled}
            onClick={() => userStore.signIn(email, password)}
          >
            Login
          </Button>
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
          <Button
            className="signup-btn"
            disabled={signUnDisabled}
            onClick={() => userStore.signUp(username, email, password)}
          >
            Register
          </Button>
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

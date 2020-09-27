import React from "react";
import firebase from "utils/firebase";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Col, Row } from "antd";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
  credentialHelper: "none",
};

export const SignIn: React.FC = () => {
  return (
    <div>
      <Row justify="center">
        <Col>เข้าสู่ระบบ</Col>
      </Row>
      <Row>
        <Col>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Col>
      </Row>
    </div>
  );
};

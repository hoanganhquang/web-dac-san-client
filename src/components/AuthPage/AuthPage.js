import { useState } from "react";
import "./AuthPage.scss";
import ForgotPassForm from "./ForgotPassForm/ForgotPassForm";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

function AuthPage() {
  const [forgotTab, setForgotTab] = useState(false);

  const handleForgotTab = () => {
    setForgotTab((prev) => !prev);
  };

  return (
    <main>
      <section className="authPage">
        <div className="container">
          <div className="authPage-main">
            {forgotTab ? (
              <ForgotPassForm onForgotTab={handleForgotTab} />
            ) : (
              <>
                <SignInForm onForgotTab={handleForgotTab} />
                <SignUpForm />
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;

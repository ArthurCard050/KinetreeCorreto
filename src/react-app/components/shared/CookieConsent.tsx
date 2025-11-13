import CookieConsentLib from "react-cookie-consent";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  return (
    <CookieConsentLib
      location="bottom"
      buttonText="Aceitar"
      declineButtonText="Recusar"
      enableDeclineButton
      cookieName="kinetree-cookie-consent"
      containerClasses="cookie-consent-container"
      style={{
        position: "fixed",
        right: "0",
        left: "auto",
        width: "380px",
        maxWidth: "calc(100vw - 60px)",
        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(16, 185, 129, 0.1) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        borderRadius: "16px",
        padding: "18px",
        margin: "18px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.1)",
        display: "flex",
        zIndex: 10,
      }}
      buttonStyle={{
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "#ffffff",
        fontSize: "13px",
        padding: "8px 32px",
        borderRadius: "8px",
        fontWeight: "600",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flex: 1,
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: "13px",
        padding: "8px 32px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flex: 1,
      }}
      buttonWrapperClasses="cookie-buttons-wrapper"
      expires={365}
      onAccept={() => {
        console.log("Cookies aceitos");
      }}
      onDecline={() => {
        console.log("Cookies recusados");
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            borderRadius: "10px",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Cookie className="w-4 h-4 text-white" />
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "600",
              marginBottom: "4px",
              lineHeight: "1.3",
            }}
          >
            Cookies & Privacidade
          </h3>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "12px",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            Usamos cookies para melhorar sua experiência. Veja nossa{" "}
            <Link
              to="/politica-de-privacidade"
              style={{
                color: "#10b981",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
      <style>
        {`
          .cookie-buttons-wrapper {
            display: flex !important;
            margin-top: 0 !important;
          }
          .cookie-consent-container button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          @media (max-width: 640px) {
            .cookie-consent-container {
              bottom: 20px !important;
              right: 20px !important;
              width: calc(100vw - 40px) !important;
            }
          }
        `}
      </style>
    </CookieConsentLib>
  );
}

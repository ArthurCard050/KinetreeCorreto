declare module 'react-cookie-consent' {
  import { CSSProperties, ReactNode } from 'react';

  export interface CookieConsentProps {
    location?: 'top' | 'bottom' | 'none';
    buttonText?: string | ReactNode;
    declineButtonText?: string | ReactNode;
    cookieName?: string;
    onAccept?: () => void;
    onDecline?: () => void;
    expires?: number;
    enableDeclineButton?: boolean;
    flipButtons?: boolean;
    buttonId?: string;
    declineButtonId?: string;
    containerClasses?: string;
    buttonClasses?: string;
    declineButtonClasses?: string;
    contentClasses?: string;
    style?: CSSProperties;
    buttonStyle?: CSSProperties;
    declineButtonStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    disableStyles?: boolean;
    hideOnAccept?: boolean;
    hideOnDecline?: boolean;
    acceptOnScroll?: boolean;
    acceptOnScrollPercentage?: number;
    buttonWrapperClasses?: string;
    visible?: 'show' | 'hidden' | 'byCookieValue';
    cookieValue?: string;
    declineCookieValue?: string;
    setDeclineCookie?: boolean;
    debug?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
    cookieSecurity?: boolean;
    children?: ReactNode;
  }

  export default function CookieConsent(props: CookieConsentProps): JSX.Element;
}

import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContetx";

export const metadata = {
  title: "pilshop",
  description:
    "a ecommers website can buy product and chat support sosial feature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="cupcake">
        <ReduxProvider>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </ReduxProvider>
      </body>
    </html>
  );
}

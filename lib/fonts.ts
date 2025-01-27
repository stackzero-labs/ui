import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

export const fontSans = GeistSans;

export const fontMono = GeistMono;

export const fontRedaction = localFont({
  src: "../public/fonts/Redaction_35-Regular.woff2",
  variable: "--font-redaction",
});

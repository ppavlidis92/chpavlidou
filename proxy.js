import { NextResponse } from "next/server";
import { defaultLanguage, languages } from "./lib/i18n/settings";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const isAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".");

  if (isAsset) {
    return NextResponse.next();
  }

  const hasLocale = languages.some(
    (language) => pathname === `/${language}` || pathname.startsWith(`/${language}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLanguage}` : `/${defaultLanguage}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

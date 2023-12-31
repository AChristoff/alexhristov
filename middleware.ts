import { NextRequest, NextResponse } from "next/server"
import acceptLanguage from "accept-language"

import { fallbackLng, languages } from "./i18n/settings"

acceptLanguage.languages(languages)

export const config = {
	// Matcher ignoring `/_next/`, `/api/` '/images' and '/public' subpaths
	matcher: [
		'/((?!api|_next/static|_next/image|robots.txt|sitemap.xml|public|assets|images|manifest.json|sw.js|favicon.ico|og_image_home.png|og_image_about.jpg|og_image_portfolio.jpg|workbox-*).*)',
		'/'
	],
};

const cookieName = "i18next"

export function middleware(req: NextRequest) {
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") as string)
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}

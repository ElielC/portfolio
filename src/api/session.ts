import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next"
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler
} from "next"
import type { ParsedUrlQuery } from "querystring"

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "RSESSION",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production"
  }
}

export function withSessionRoute(handler: NextApiHandler): NextApiHandler {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
): (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => Promise<GetServerSidePropsResult<P>> {
  return withIronSessionSsr(handler, sessionOptions)
}

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/careers/admin/:path*"],
};

export function middleware(request: NextRequest) {
  const username = process.env.CAREERS_ADMIN_USER;
  const password = process.env.CAREERS_ADMIN_PASSWORD;

  if (!username || !password) {
    return new NextResponse("Not found", { status: 404 });
  }

  const authorization = request.headers.get("authorization");

  if (authorization?.startsWith("Basic ")) {
    const credentials = atob(authorization.replace("Basic ", ""));
    const separatorIndex = credentials.indexOf(":");
    const providedUsername = credentials.slice(0, separatorIndex);
    const providedPassword = credentials.slice(separatorIndex + 1);

    if (providedUsername === username && providedPassword === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    headers: {
      "WWW-Authenticate": 'Basic realm="CybHrSec Careers Admin"',
    },
    status: 401,
  });
}

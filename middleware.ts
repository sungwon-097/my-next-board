import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {verify} from "@/lib/tokenProvider";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("access")?.value;

    console.log(token)
    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
        verify(token);
    } catch (error) {
        console.error("Invalid token:", error);
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/articles/:path*", "/auth/test"],
    runtime: 'nodejs'
};

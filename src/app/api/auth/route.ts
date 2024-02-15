import {NextRequest} from "next/server";
import {authenticator} from "@/lib/Security";


export async function POST(request: NextRequest) {
    return authenticator.handleAuthRequest(request);
}
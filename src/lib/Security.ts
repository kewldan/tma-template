import {Authenticator} from "tma-jwt";
import {env} from "./env";

export const authenticator = new Authenticator('default-issuer', env.JWT_SECRET);
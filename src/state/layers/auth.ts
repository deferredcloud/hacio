import { Context, Effect, Layer } from "effect";

type IAuth = {
	checkLogin: (
		email: string,
		password: string,
	) => Effect.Effect<unknown, boolean>;
	login: (email: string, password: string) => Effect.Effect<unknown, boolean>;
	logOut: () => Effect.Effect<unknown, boolean>;
};

export class Auth extends Context.Tag("Layers/Login")<Auth, IAuth>() {}

export const AuthLive = Layer.succeed(
	Auth,
	Auth.of({
		checkLogin: (email: string, password: string) =>
			Effect.succeed(email === "test" && password === "test"),
		login: (email: string, password: string) =>
			Effect.succeed(email === "test" && password === "test"),
		logOut: () => Effect.succeed(true),
	}),
);

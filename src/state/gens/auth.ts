import { Effect } from "effect";
import { Auth } from "../layers/auth";

export const performAuth = Effect.gen(function* () {
	const auth = yield* Auth;
});

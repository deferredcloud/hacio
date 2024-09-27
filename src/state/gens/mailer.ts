import { Effect } from "effect";
import { Mailer } from "../layers/mailer";

export const performMailer = Effect.gen(function* () {
	const mailer = yield* Mailer;
});

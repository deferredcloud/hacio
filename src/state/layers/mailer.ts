import { Context, Effect, Layer } from "effect";

type Mail = {
	from: string;
	to: string;
	subject: string;
	content: string;
	cc: string[];
	bcc: string[];
	date: Date;
};

type IMailer = {
	checkMail: (userId: string) => Effect.Effect<Mail[], Error>;
	sendMail: (mail: Mail) => Effect.Effect<Response, Error>;
	deleteMail: (id: string) => Effect.Effect<Response, Error>;
};

export class Mailer extends Context.Tag("Layers/Mail")<Mailer, IMailer>() {}

export const MailerLive = Layer.succeed(
	Mailer,
	Mailer.of({
		checkMail: (userId: string) => Effect.succeed([]),
		sendMail: (mail: Mail) => Effect.succeed(new Response()),
		deleteMail: (id: string) => Effect.succeed(new Response()),
	}),
);

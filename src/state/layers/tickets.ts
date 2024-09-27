import { Context, Effect, Layer } from "effect";

type User = {
	id: string;
	name: string;
	email: string;
};

type Ticket = {
	name: string;
	description: string;
	assignee: User;
	date: Date;
};

type ITickets = {
	createTicket: (ticket: Ticket) => Effect.Effect<Response, Error>;
	deleteTicket: (id: string) => Effect.Effect<Response, Error>;
	assignTicket: (id: string, userId: string) => Effect.Effect<Response, Error>;
	updateTicket: (
		id: string,
		newContent: Ticket,
	) => Effect.Effect<Response, Error>;
	getAllTickets: () => Effect.Effect<Ticket[], Error>;
	getTicket: (id: string) => Effect.Effect<Ticket, Error>;
	getTicketByAssignee: (userId: string) => Effect.Effect<Ticket[], Error>;
	getTicketByDate: (date: Date) => Effect.Effect<Ticket[], Error>;
	sortTicketsByDate: (tickets: Ticket[]) => Effect.Effect<Ticket[], Error>;
};

export class Tickets extends Context.Tag("Layers/Tickets")<
	Tickets,
	ITickets
>() {}

export const TicketsLive = Layer.succeed(
	Tickets,
	Tickets.of({
		createTicket: (ticket: Ticket) => Effect.succeed(new Response()),
		deleteTicket: (id: string) => Effect.succeed(new Response()),
		assignTicket: (id: string, userId: string) =>
			Effect.succeed(new Response()),
		updateTicket: (id: string, newContent: Ticket) =>
			Effect.succeed(new Response()),
		getAllTickets: () => Effect.succeed([]),
		getTicket: (id: string) => Effect.succeed({} as Ticket),
		getTicketByAssignee: (userId: string) => Effect.succeed([]),
		getTicketByDate: (date: Date) => Effect.succeed([]),
		sortTicketsByDate: (tickets: Ticket[]) => Effect.succeed([]),
	}),
);

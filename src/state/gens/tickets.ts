import { Effect } from "effect";
import { Tickets } from "../layers/tickets";

export const performTickets = Effect.gen(function* () {
  const tickets = yield* Tickets;
});

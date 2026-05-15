import handler from "@tanstack/react-start/server-entry";

export const fetch = (request: Request, env: unknown, ctx: unknown) => {
  return handler.fetch(request, {
    context: { env, ctx },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);
};

export default handler;

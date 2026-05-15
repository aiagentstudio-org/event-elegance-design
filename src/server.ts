import handler from "@tanstack/react-start/server-entry";

export const fetch = (request: Request, env: unknown, ctx: unknown) => {
  return handler.fetch(request, { 
    context: { env, ctx } 
  } as any);
};

export default handler;

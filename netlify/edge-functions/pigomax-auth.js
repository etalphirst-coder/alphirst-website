const unauthorized = () =>
  new Response(
    `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pigomax Plan · Access Required</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #1e3328; color: #f4f1e8; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
      main { max-width: 520px; padding: 40px; text-align: center; }
      h1 { margin: 0 0 12px; font-family: Georgia, "Songti SC", serif; font-size: 2rem; }
      p { margin: 0; color: #cfd8cf; line-height: 1.8; }
    </style>
  </head>
  <body><main><h1>Pigomax Plan</h1><p>请输入访问密码以查看场馆合作提案。</p></main></body>
</html>`,
    {
      status: 401,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "www-authenticate": 'Basic realm="Pigomax Plan", charset="UTF-8"',
      },
    },
  );

export default async (request, context) => {
  const expectedPassword = Netlify.env.get("PIGOMAXPLAN_PASSWORD");

  if (!expectedPassword) {
    return new Response("Pigomax access password is not configured.", {
      status: 503,
      headers: { "cache-control": "no-store" },
    });
  }

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) return unauthorized();

  try {
    const decoded = atob(authorization.slice(6));
    const separator = decoded.indexOf(":");
    const password = separator >= 0 ? decoded.slice(separator + 1) : "";

    if (password === expectedPassword) {
      return context.next();
    }
  } catch {
    // Invalid Base64 credentials fall through to the same login challenge.
  }

  return unauthorized();
};

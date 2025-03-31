export async function requestAPI (method: string, route: string, body?: any): Promise<any> {
  const headers = { "Authorization": `Bearer ${process.env.KAZABURGER_API_TOKEN}` };

  if (body instanceof URLSearchParams) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }
  else if (typeof body === "object") {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(body);
  }

  const response = await fetch(process.env.KAZABURGER_API_URL + route, {
    method,
    headers,
    body,
  });

  return response.json();
}

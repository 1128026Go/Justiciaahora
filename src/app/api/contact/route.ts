export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  // Simular envío (SMTP/Nodemailer) – TODO: integrar servicio real (SMTP/SendGrid)
  await new Promise((r) => setTimeout(r, 600));
  console.log("/api/contact payload:", data);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}


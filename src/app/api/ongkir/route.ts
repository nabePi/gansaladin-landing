const ORIGIN = "PONDOKGEDE, BEKASI";
const COMMODITY = "BAD036";
const MAX_KG = 20;
const PRODUCT = "REGPACK";

type Tariff = { product: string; total_tariff: number; estimasi_sla?: string; status?: string };

export async function GET(request: Request) {
  const token = process.env.LIONPARCEL_TOKEN;
  const baseUrl = process.env.LIONPARCEL_BASE_URL;
  if (!token || !baseUrl) {
    return Response.json({ ok: false, error: "Ongkir otomatis belum aktif." }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const kecamatan = (searchParams.get("kecamatan") ?? "").trim().toUpperCase();
  const kota = (searchParams.get("kota") ?? "").trim().toUpperCase();
  const kg = Math.min(MAX_KG, Math.max(1, Math.floor(Number(searchParams.get("kg"))) || 1));
  if (kecamatan.length < 3 || kota.length < 3 || kecamatan.length > 60 || kota.length > 60) {
    return Response.json({ ok: false, error: "Kecamatan dan kota wajib diisi." }, { status: 400 });
  }

  const url = new URL("/v3/tariff", baseUrl);
  url.searchParams.set("origin", ORIGIN);
  url.searchParams.set("destination", `${kecamatan}, ${kota}`);
  url.searchParams.set("weight", String(kg));
  url.searchParams.set("commodity", COMMODITY);

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      return Response.json({ ok: false, error: "Rute tidak tersedia." }, { status: 404 });
    }
    const data = (await res.json()) as { result?: Tariff[] };
    const reg = data.result?.find((r) => r.product === PRODUCT && r.status !== "INACTIVE");
    if (!reg) {
      return Response.json({ ok: false, error: "Rute tidak tersedia." }, { status: 404 });
    }
    return Response.json({ ok: true, ongkir: reg.total_tariff, sla: reg.estimasi_sla ?? "" });
  } catch {
    return Response.json({ ok: false, error: "Ongkir belum bisa dihitung." }, { status: 502 });
  }
}

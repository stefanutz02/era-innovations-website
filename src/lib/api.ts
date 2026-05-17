// src/lib/api.ts — single source of truth for the API base URL

// Override locally via .env.local with VITE_API_URL=http://localhost:3000
export const API_URL =
  import.meta.env.VITE_API_URL || "https://email-api.erainnovations.ro";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let detail = "Failed to send message";
    try {
      const data = (await res.json()) as { error?: string };
      if (data?.error) detail = data.error;
    } catch {
    }
    throw new Error(detail);
  }
}

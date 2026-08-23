"use client";

import { useState, type FormEvent } from "react";
import { IconArrow, IconCheck } from "@/components/icons";

const fields = [
  { key: "nama", label: "Nama Lengkap", type: "text", placeholder: "Tuliskan namamu" },
  { key: "email", label: "Email", type: "email", placeholder: "email@contoh.com" },
] as const;

export default function JoinForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    peran: "",
    cerita: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 text-center">
        <div className="mb-5 flex justify-center text-maroon">
          <IconCheck />
        </div>
        <h3 className="mb-4 font-serif text-[26px] font-bold text-maroon">
          Terima kasih!
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-mid">
          Formulirmu sudah kami terima. Tim kami akan menghubungimu dalam
          3–5 hari kerja.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 bg-white p-10"
    >
      <h3 className="mb-2 font-serif text-2xl font-bold text-ink">
        Isi Formulir Bergabung
      </h3>
      {fields.map((f) => (
        <div key={f.key}>
          <label
            htmlFor={f.key}
            className="mb-2 block text-[13px] font-semibold tracking-wide text-ink"
          >
            {f.label}
          </label>
          <input
            id={f.key}
            name={f.key}
            type={f.type}
            placeholder={f.placeholder}
            required
            value={formData[f.key]}
            onChange={(e) =>
              setFormData((v) => ({ ...v, [f.key]: e.target.value }))
            }
            className="w-full border border-beige-dark bg-beige px-4 py-3 text-[15px] text-ink outline-none focus:border-maroon"
          />
        </div>
      ))}
      <div>
        <label
          htmlFor="peran"
          className="mb-2 block text-[13px] font-semibold text-ink"
        >
          Peran yang Diminati
        </label>
        <select
          id="peran"
          name="peran"
          required
          value={formData.peran}
          onChange={(e) =>
            setFormData((v) => ({ ...v, peran: e.target.value }))
          }
          className={`w-full border border-beige-dark bg-beige px-4 py-3 text-[15px] outline-none focus:border-maroon ${
            formData.peran ? "text-ink" : "text-ink-light"
          }`}
        >
          <option value="">Pilih peranmu</option>
          <option>Pendidik & Peneliti</option>
          <option>Kreator & Storyteller Digital</option>
          <option>Organisator & Penggerak Komunitas</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="cerita"
          className="mb-2 block text-[13px] font-semibold text-ink"
        >
          Ceritakan Tentang Dirimu
        </label>
        <textarea
          id="cerita"
          name="cerita"
          rows={4}
          placeholder="Latar belakang, motivasi, dan kontribusi yang ingin kamu berikan..."
          value={formData.cerita}
          onChange={(e) =>
            setFormData((v) => ({ ...v, cerita: e.target.value }))
          }
          className="w-full resize-y border border-beige-dark bg-beige px-4 py-3 text-[15px] text-ink outline-none focus:border-maroon"
        />
      </div>
      <button
        type="submit"
        className="flex w-fit items-center gap-2.5 bg-maroon px-9 py-4 text-[15px] font-semibold text-white hover:bg-maroon-light"
      >
        Kirim Formulir <IconArrow />
      </button>
    </form>
  );
}

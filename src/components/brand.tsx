import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="grid size-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_35px_rgba(34,211,238,0.25)]">
        <span className="size-5 rounded-lg bg-gradient-to-br from-cyan-300 via-pink-300 to-orange-300" />
      </span>
      <span>
        <span className="block text-lg font-semibold tracking-tight text-white">
          CybHrSec
        </span>
        <span className="block text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/70">
          Risk + Compliance
        </span>
      </span>
    </Link>
  );
}

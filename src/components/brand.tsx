import Link from "next/link";
import Image from "next/image";

export function Brand() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-fuchsia-300/30 bg-purple-950/70 p-1.5 shadow-[0_0_35px_rgba(168,85,247,0.32)]">
        <Image
          src="/cybhrsec-logo.png"
          alt="CybHrSec logo"
          width={56}
          height={56}
          className="size-full object-contain"
          priority
        />
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

import logo from "@/assets/rsgroup-logo.png";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return <img src={logo} alt="RS Group Events" className={className} width={96} height={96} />;
}

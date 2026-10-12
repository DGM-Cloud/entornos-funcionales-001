import { company } from "@/lib/site";

export function WhatsappButton() {
  const label = company.phones.find((phone) => phone.href.endsWith(company.whatsapp))?.label;

  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Escribir por WhatsApp al ${label}`}
      className="fixed right-5 bottom-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.1L1 23l6-1.6A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.6 1 1-3.5-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.5-.8-1.8-.8s-.4-.1-.6.2-.7.8-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4.1c.6.3 1.1.4 1.6.5a3.8 3.8 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
      </svg>
      <span className="sr-only">, se abre en una pestaña nueva</span>
    </a>
  );
}

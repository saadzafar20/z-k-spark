const clientLogos = [
  { name: "Client 1", placeholder: "C1" },
  { name: "Client 2", placeholder: "C2" },
  { name: "Client 3", placeholder: "C3" },
  { name: "Client 4", placeholder: "C4" },
  { name: "Client 5", placeholder: "C5" },
  { name: "Client 6", placeholder: "C6" },
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8">
          TRUSTED BY LEADING INDUSTRIAL & COMMERCIAL CLIENTS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="w-24 h-16 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground font-semibold opacity-60 hover:opacity-100 transition-opacity"
            >
              {client.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, MoveUpRight, Settings2, ShieldCheck, Smartphone, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/smartgates-logo.png";
import hero from "@/assets/smartgates-hero.jpg";
import detail from "@/assets/smartgates-detail.jpg";
import project from "@/assets/smartgates-project.webp";

const whatsapp = "https://wa.me/56978064516";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Smart Gates | Portones eléctricos a medida en Chile" },
      { name: "description", content: "Diseño, fabricación, instalación y mantención de portones eléctricos a medida. Automatiza tu acceso con Smart Gates. Cotiza sin costo." },
      { property: "og:title", content: "Smart Gates | Portones eléctricos a medida en Chile" },
      { property: "og:description", content: "Diseñamos, fabricamos y automatizamos portones eléctricos para hogares y negocios. Cotiza tu proyecto sin costo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { number: "01", icon: Settings2, title: "Diseño y fabricación", text: "Portones hechos a medida para tu espacio, con materiales resistentes y terminaciones que se adaptan a tu estilo." },
  { number: "02", icon: ShieldCheck, title: "Instalación", text: "Instalamos tu nuevo portón y motor con atención a cada detalle, para un funcionamiento seguro desde el primer día." },
  { number: "03", icon: Smartphone, title: "Automatización", text: "Abre con control remoto o desde tu celular. Integramos accesos con cámaras y sensores según tu proyecto." },
  { number: "04", icon: Wrench, title: "Mantención", text: "Revisamos, reparamos y reemplazamos componentes para que tu portón siga funcionando cuando más lo necesitas." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = `Hola Smart Gates, soy ${name}. Me interesa ${service}.${message ? ` Mi proyecto: ${message}` : ""}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="overflow-x-hidden">
      <section id="inicio" className="relative min-h-[690px] text-hero-foreground md:min-h-[760px]">
        <img src={hero} alt="Portón eléctrico negro a medida frente a una casa contemporánea" width={1600} height={1008} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-shade absolute inset-0" />
        <header className="relative z-20 mx-auto flex h-24 max-w-[1440px] items-center justify-between border-b border-line-dark px-6 md:px-10 lg:px-16">
          <a href="#inicio" aria-label="Smart Gates — inicio" className="shrink-0"><img src={logo} alt="Smart Gates" width={260} height={82} className="h-12 w-auto md:h-14" /></a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-9 text-sm font-semibold lg:flex">
            <a href="#servicios" className="transition-colors hover:text-highlight">Servicios</a>
            <a href="#nosotros" className="transition-colors hover:text-highlight">Nosotros</a>
            <a href="#proceso" className="transition-colors hover:text-highlight">Cómo trabajamos</a>
            <a href="#contacto" className="transition-colors hover:text-highlight">Contacto</a>
          </nav>
          <div className="hidden lg:block"><Button variant="hero" asChild className="h-11 rounded-sm px-6 font-bold"><a href="#contacto">Cotiza tu proyecto <ArrowUpRight /></a></Button></div>
          <Button variant="darkOutline" size="icon" className="h-11 w-11 rounded-sm lg:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </header>
        {menuOpen && <nav aria-label="Navegación móvil" className="absolute inset-x-0 top-24 z-30 flex flex-col gap-1 bg-surface-dark px-6 py-5 text-hero-foreground shadow-xl lg:hidden">{[["Servicios", "#servicios"], ["Nosotros", "#nosotros"], ["Cómo trabajamos", "#proceso"], ["Contacto", "#contacto"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-line-dark py-3 font-semibold">{label}</a>)}</nav>}
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start px-6 pb-20 pt-27 md:px-10 md:pt-36 lg:px-16">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-highlight"><span className="h-2 w-2 rounded-full bg-brand" /> Confianza y tecnología en cada acceso</div>
          <h1 className="max-w-[800px] text-[clamp(2.7rem,5.4vw,5.5rem)] font-extrabold leading-[1.08]">Portones eléctricos<br />a la medida de<br /><span className="text-highlight">tu espacio.</span></h1>
          <p className="mt-7 max-w-[530px] text-base leading-8 text-hero-foreground/85 md:text-lg">Diseñamos, fabricamos e instalamos accesos que combinan seguridad, comodidad y un diseño pensado para ti.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button variant="hero" asChild className="h-13 rounded-sm px-7 text-sm font-bold"><a href="#contacto">Cotiza sin costo <ArrowUpRight /></a></Button><Button variant="darkOutline" asChild className="h-13 rounded-sm px-7 text-sm font-semibold"><a href="#servicios">Explora nuestros servicios <ArrowDown /></a></Button></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-line-dark md:block"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-hero-foreground/75 lg:px-16"><span>Diseño · Instalación · Automatización · Mantención</span><a href="#servicios" className="flex items-center gap-2 hover:text-highlight">Descubre más <ArrowDown size={15} /></a></div></div>
      </section>

      <section id="servicios" className="scroll-mt-12 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.17em] text-muted-foreground">Lo que hacemos</p><h2 className="max-w-[650px] text-4xl font-extrabold leading-tight md:text-5xl">Una solución completa<br />para cada acceso.</h2></div><p className="max-w-sm text-base leading-7 text-muted-foreground">Desde la primera idea hasta el cuidado de tu portón, te acompañamos en cada etapa.</p></div>
          <div className="grid border-t border-border md:grid-cols-2 lg:grid-cols-4">{services.map(({number, icon: Icon, title, text}) => <article key={number} className="group flex min-h-[300px] flex-col border-b border-border px-0 py-8 md:px-6 lg:border-r lg:last:border-r-0 lg:px-7"><div className="flex items-start justify-between"><span className="text-xs font-bold text-muted-foreground">{number} / 04</span><Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} /></div><div className="mt-auto pt-12"><h3 className="mb-4 text-xl font-bold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="nosotros" className="scroll-mt-12 bg-surface-dark text-hero-foreground"><div className="grid lg:grid-cols-2"><div className="relative min-h-[400px] lg:min-h-[660px]"><img src={detail} alt="Detalle de un portón de acero automatizado y su motor" width={1200} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex flex-col justify-center px-6 py-18 md:px-12 lg:px-[clamp(3rem,6vw,7rem)]"><p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-highlight">Más que un portón</p><h2 className="max-w-[560px] text-4xl font-extrabold leading-tight md:text-5xl">Tu tranquilidad empieza en la entrada.</h2><p className="mt-7 max-w-[530px] text-base leading-8 text-surface-dark-muted">Creemos que un buen acceso debe hacerte la vida más simple. Por eso unimos fabricación a medida, tecnología y atención cercana en cada proyecto.</p><div className="mt-10 space-y-0 border-t border-line-dark">{["Materiales y terminaciones de calidad", "Control remoto o desde tu celular", "Acompañamiento después de la instalación"].map(item => <div key={item} className="flex items-center gap-4 border-b border-line-dark py-5 text-sm font-semibold"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground"><Check size={14} /></span>{item}</div>)}</div><Button variant="hero" asChild className="mt-9 h-12 w-fit rounded-sm px-6 font-bold"><a href="#contacto">Hablemos de tu proyecto <ArrowUpRight /></a></Button></div></div></section>

      <section id="proceso" className="scroll-mt-12 bg-background py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16"><div className="mb-12 md:mb-16"><p className="mb-4 text-xs font-bold uppercase tracking-[0.17em] text-muted-foreground">Cómo trabajamos</p><h2 className="text-4xl font-extrabold leading-tight md:text-5xl">De la idea al acceso perfecto.</h2></div><div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20"><div className="space-y-0">{[{n:"01", title:"Conversemos", text:"Cuéntanos qué necesitas. Evaluamos tu espacio con una visita técnica presencial u online y preparamos un presupuesto sin costo."},{n:"02", title:"Diseñamos y fabricamos", text:"Definimos contigo el diseño y los detalles. Fabricamos un portón que se adapte a tu espacio y tus necesidades."},{n:"03", title:"Instalamos y acompañamos", text:"Instalamos, automatizamos y dejamos todo funcionando. También puedes contar con nosotros para su mantención."}].map(step => <div key={step.n} className="grid grid-cols-[55px_1fr] gap-3 border-t border-border py-7"><span className="text-xs font-bold text-muted-foreground">{step.n}</span><div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-3 max-w-[440px] text-sm leading-7 text-muted-foreground">{step.text}</p></div></div>)}</div><div className="relative min-h-[390px] overflow-hidden md:min-h-[520px]"><img src={project} alt="Portón eléctrico corredizo instalado en una vivienda" width={1300} height={867} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute bottom-0 left-0 bg-brand px-6 py-5 text-brand-foreground"><span className="block text-xs font-bold uppercase tracking-[0.12em]">Hecho para durar</span><span className="mt-1 block text-lg font-bold">Diseño + tecnología + confianza</span></div></div></div></div></section>

      <section className="bg-brand py-13 text-brand-foreground"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10 lg:px-16"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.14em]">Un buen comienzo</p><h2 className="text-2xl font-extrabold md:text-3xl">Tu próximo portón empieza con una conversación.</h2></div><Button variant="default" asChild className="h-12 shrink-0 rounded-sm px-7 font-bold"><a href="#contacto">Solicita tu cotización <ArrowUpRight /></a></Button></div></section>

      <section id="contacto" className="scroll-mt-12 bg-surface-dark py-20 text-hero-foreground md:py-28"><div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-16"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-highlight">Contacto</p><h2 className="max-w-[540px] text-4xl font-extrabold leading-tight md:text-5xl">Hagamos realidad tu proyecto.</h2><p className="mt-7 max-w-md text-base leading-8 text-surface-dark-muted">Cuéntanos qué tienes en mente y conversemos sobre la mejor solución para tu espacio. La cotización es sin costo.</p><div className="mt-12 border-t border-line-dark pt-7"><p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-surface-dark-muted">Escríbenos directamente</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-xl font-bold transition-colors hover:text-highlight">+56 9 7806 4516 <MoveUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><p className="mt-2 text-sm text-surface-dark-muted">Atención por WhatsApp</p></div></div><form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold">Tu nombre <span className="text-highlight">*</span><input name="name" required placeholder="Nombre" className="mt-2 h-12 w-full rounded-sm border border-line-dark bg-transparent px-4 text-hero-foreground placeholder:text-surface-dark-muted focus:border-brand focus:outline-none" /></label><label className="block text-sm font-semibold">Tu teléfono <span className="text-highlight">*</span><input name="phone" type="tel" required placeholder="+56 9..." className="mt-2 h-12 w-full rounded-sm border border-line-dark bg-transparent px-4 text-hero-foreground placeholder:text-surface-dark-muted focus:border-brand focus:outline-none" /></label></div><label className="block text-sm font-semibold">¿Qué necesitas? <span className="text-highlight">*</span><span className="relative mt-2 block"><select name="service" required defaultValue="" className="h-12 w-full appearance-none rounded-sm border border-line-dark bg-surface-dark px-4 pr-10 text-hero-foreground focus:border-brand focus:outline-none"><option value="" disabled>Selecciona un servicio</option><option>Diseño y fabricación</option><option>Instalación</option><option>Automatización</option><option>Mantención o reparación</option><option>Otro proyecto</option></select><ChevronDown size={16} className="pointer-events-none absolute right-4 top-4 text-surface-dark-muted" /></span></label><label className="block text-sm font-semibold">Cuéntanos sobre tu proyecto<textarea name="message" rows={5} placeholder="¿Cómo podemos ayudarte?" className="mt-2 w-full resize-y rounded-sm border border-line-dark bg-transparent px-4 py-3 text-hero-foreground placeholder:text-surface-dark-muted focus:border-brand focus:outline-none" /></label><Button type="submit" variant="hero" className="h-13 w-full rounded-sm px-7 font-bold sm:w-auto">Enviar por WhatsApp <ArrowUpRight /></Button><p role="status" className="text-sm text-surface-dark-muted">{sent ? "Se abrió WhatsApp con tu mensaje preparado. Solo falta enviarlo allí." : "Al continuar, se abrirá WhatsApp con tu mensaje preparado."}</p></form></div></section>

      <footer className="border-t border-line-dark bg-surface-dark text-hero-foreground"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16"><div><a href="#inicio"><img src={logo} alt="Smart Gates" width={260} height={82} loading="lazy" className="h-12 w-auto" /></a><p className="mt-4 max-w-[330px] text-sm leading-6 text-surface-dark-muted">Portones eléctricos a medida. Confianza y tecnología para cada acceso.</p></div><div className="flex flex-col gap-5 md:items-end"><nav aria-label="Enlaces del pie" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a href="#servicios" className="hover:text-highlight">Servicios</a><a href="#nosotros" className="hover:text-highlight">Nosotros</a><a href="#proceso" className="hover:text-highlight">Cómo trabajamos</a><a href="#contacto" className="hover:text-highlight">Contacto</a></nav><p className="text-xs text-surface-dark-muted">© {new Date().getFullYear()} Smart Gates. Todos los derechos reservados.</p></div></div></footer>
      <Button variant="hero" size="icon" asChild className="fixed bottom-5 right-5 z-40 h-13 w-13 rounded-full shadow-lg md:bottom-7 md:right-7" title="Cotizar por WhatsApp"><a href={`${whatsapp}?text=${encodeURIComponent("Hola, quiero cotizar un portón")}`} target="_blank" rel="noopener noreferrer" aria-label="Cotizar por WhatsApp"><ArrowUpRight className="h-6! w-6!" /></a></Button>
    </div>
  );
}
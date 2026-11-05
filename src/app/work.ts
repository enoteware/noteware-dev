export type Project = {
  name: string;
  kind: "Client" | "Our product";
  url: string;
  host: string;
  img: string;
  what: string;
  logo?: { src: string; w: number; h: number };
};

export const naturalCatch: Project = { name: "Natural Catch", kind: "Client", url: "https://naturalcatchtuna.com", host: "naturalcatchtuna.com", img: "/work/naturalcatch.jpg", what: "Shopify theme, brand hub and packaging.", logo: { src: "/clients/natural-catch.svg", w: 1202, h: 305 } };
export const ehs: Project = { name: "EHS Analytical Solutions", kind: "Client", url: "https://ehsanalytical.com", host: "ehsanalytical.com", img: "/work/ehs.jpg", what: "WordPress site and training platform.", logo: { src: "/clients/ehs.svg", w: 300, h: 300 } };
export const iepa: Project = { name: "IEPA", kind: "Client", url: "https://reg.iepa.com", host: "reg.iepa.com", img: "/work/iepa.jpg", what: "Conference registration, payments and admin.", logo: { src: "/clients/iepa.png", w: 915, h: 267 } };
export const aca: Project = { name: "Association of California Airports", kind: "Client", url: "https://calairports.org", host: "calairports.org", img: "/work/aca.jpg", what: "WordPress site and Regably setup.", logo: { src: "/clients/aca.svg", w: 300, h: 300 } };
export const calStrat: Project = { name: "California Strategies", kind: "Client", url: "https://calstrat.com", host: "calstrat.com", img: "/work/calstrat.jpg", what: "Website tooling.", logo: { src: "/clients/calstrat.svg", w: 586, h: 309 } };
export const propFirms: Project = { name: "PropFirms", kind: "Client", url: "https://propfirms.gg", host: "propfirms.gg", img: "/work/propfirms.jpg", what: "Prop firm comparison app.", logo: { src: "/clients/propfirms.png", w: 1453, h: 397 } };
export const regably: Project = { name: "Regably", kind: "Our product", url: "https://regably.com", host: "regably.com", img: "/work/regably.jpg", what: "Membership and conference registration for associations.", logo: { src: "/clients/regably.svg", w: 32, h: 32 } };
export const invoi: Project = { name: "Invoi", kind: "Our product", url: "https://app.noteware.dev", host: "app.noteware.dev", img: "/work/invoi.jpg", what: "Our client workspace for projects, tasks and invoices." };

export const projects = [naturalCatch, ehs, propFirms, iepa, aca, calStrat, regably, invoi];

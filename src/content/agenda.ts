import { Briefcase, Scale, Building2, HeartPulse, GraduationCap } from "lucide-react";

export const agendaItems = [
  {
    id: "youth",
    title: "Youth Empowerment & Skills",
    icon: GraduationCap,
    short: "Dignified skills training, TVET funding, and youth employment pipelines for Nairobi.",
    body: "Nairobi is Africa's youngest capital — and yet thousands of qualified young people leave school each year with nowhere to go. As Senator, I will fight for a fully-funded, demand-driven TVET pipeline, county-level apprenticeship guarantees, and direct partnerships between Nairobi's industry leaders and our youth so that 'tarmacking' stops being a rite of passage."
  },
  {
    id: "workers",
    title: "Workers' Rights & Gig Economy",
    icon: Briefcase,
    short: "Formal protections, fair pay, and social security for gig and informal workers.",
    body: "Bodaboda riders, ride-hailing drivers, mama mbogas and gig workers power Nairobi's economy without a safety net. I will champion legislation guaranteeing minimum earnings, transparent platform fees, mandatory insurance, and pension access for every worker — formal or informal."
  },
  {
    id: "justice",
    title: "Access to Justice",
    icon: Scale,
    short: "Affordable legal aid for every Nairobian and serious justice-system reform.",
    body: "Justice should never depend on income. Drawing on years as an advocate and LSK Coast Chair, I will push for county legal-aid clinics in every sub-county, fast-track small-claims courts, and Senate oversight on police accountability and prosecutorial fairness."
  },
  {
    id: "business",
    title: "Ease of Doing Business",
    icon: Building2,
    short: "Cutting bureaucracy for small businesses, hustlers, and Nairobi's market traders.",
    body: "From Gikomba to Eastleigh to Westlands, Nairobi's hustlers carry the city. I will sponsor reforms to consolidate licensing, cap county levies, digitise permits, and give SMEs real protection from arbitrary harassment by enforcement officers."
  },
  {
    id: "health",
    title: "Quality & Affordable Healthcare",
    icon: HeartPulse,
    short: "Equitable health access across all 17 sub-counties of Nairobi.",
    body: "Every Nairobian — from Kibera to Karen — deserves dignified healthcare. I will push for fully-equipped Level 4 facilities in every sub-county, transparent SHA implementation, and mental-health services integrated into primary care."
  },
] as const;

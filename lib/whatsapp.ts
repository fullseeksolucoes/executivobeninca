import { site } from './data';

/** Every WhatsApp link in the site goes through here. */
export function waLink(text?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const telLink = `tel:${site.phoneE164}`;

export const messages = {
  general: 'Olá! Vim pelo site e gostaria de uma cotação de transfer.',

  quote(q: {
    origin: string;
    destination: string;
    date: string;
    time: string;
    pax: string;
    flight: string;
    starlink: string;
  }) {
    return [
      'Olá! Gostaria de uma cotação:',
      `• Saída: ${q.origin}`,
      `• Destino: ${q.destination}`,
      `• Data: ${q.date} às ${q.time}`,
      `• Passageiros: ${q.pax}`,
      `• Voo: ${q.flight}`,
      `• Carro com Starlink: ${q.starlink}`,
    ].join('\n');
  },

  route(from: string, to: string) {
    return `Olá! Quero uma cotação de transfer de ${from} para ${to}. Data e horário: `;
  },

  fleet(model: string) {
    return `Olá! Quero reservar o ${model} para uma viagem. `;
  },

  corporate(c: { company: string; name: string; email: string; volume: string }) {
    return `Olá! Sou da empresa ${c.company} (${c.name}, ${c.email}). Temos cerca de ${c.volume} viagens por mês e queremos uma proposta com nota fiscal.`;
  },
};

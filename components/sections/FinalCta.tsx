import { Icon } from '@/components/ui/Icon';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { trackAttrs } from '@/lib/analytics';
import type { Dictionary } from '@/lib/content/pt';
import { site } from '@/lib/data';
import { messages, telLink } from '@/lib/whatsapp';

export function FinalCta({ t }: { t: Dictionary }) {
  const { finalCta, ui } = t;
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="wrap py-20 md:py-28">
      <p className="label-mono mb-4">{finalCta.label}</p>
      <h2 id="contato-titulo" className="sr-only">
        {finalCta.heading}
      </h2>
      <WhatsAppLink
        location="footer"
        message={messages(t.whatsapp).general}
        newTabLabel={ui.newTab}
        className="display block w-fit text-[clamp(40px,10vw,148px)] text-gold hover:text-paper"
      >
        {site.phoneDisplay}
      </WhatsAppLink>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="label-mono">{finalCta.phoneNote}</p>
        <a href={telLink} className="btn btn-outline" {...trackAttrs('click_phone', 'footer')}>
          <Icon name="phone" size={18} /> {ui.call}
        </a>
      </div>
    </section>
  );
}

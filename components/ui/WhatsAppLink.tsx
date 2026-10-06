import { trackAttrs, type WhatsappLocation } from '@/lib/analytics';
import { waLink } from '@/lib/whatsapp';

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  message: string;
  location: WhatsappLocation;
  /** Screen-reader note, e.g. "(abre em nova aba)". */
  newTabLabel: string;
}

/** External WhatsApp link with a ready message and click tracking. */
export function WhatsAppLink({ message, location, newTabLabel, children, ...rest }: Props) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" {...trackAttrs('click_whatsapp', location)} {...rest}>
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}

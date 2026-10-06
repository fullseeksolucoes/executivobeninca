import { trackAttrs, type WhatsappLocation } from '@/lib/analytics';
import { ui } from '@/lib/data';
import { messages, waLink } from '@/lib/whatsapp';

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  message?: string;
  location: WhatsappLocation;
}

/** External WhatsApp link with a ready message and click tracking. */
export function WhatsAppLink({ message = messages.general, location, children, ...rest }: Props) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" {...trackAttrs('click_whatsapp', location)} {...rest}>
      {children}
      <span className="sr-only"> {ui.newTab}</span>
    </a>
  );
}

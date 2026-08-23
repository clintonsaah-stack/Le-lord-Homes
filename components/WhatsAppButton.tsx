'use client';

import { CONTACT_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappLink = generateWhatsAppLink(
    WHATSAPP_MESSAGES.default,
    CONTACT_CONFIG.whatsapp
  );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}

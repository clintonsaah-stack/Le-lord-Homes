/**
 * Generate WhatsApp link with pre-filled message
 * @param message The message to send
 * @param phoneNumber Phone number with country code (e.g., +447700000000)
 * @returns WhatsApp URL
 */
export function generateWhatsAppLink(
  message: string,
  phoneNumber: string
): string {
  // Remove all non-numeric characters except +
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Scroll to element by ID with offset for fixed navbar
 * @param elementId The ID of the element to scroll to
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = 80; // Navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navHeight,
      behavior: 'smooth',
    });
  }
}

/**
 * Format phone number for display
 * @param phone Raw phone number
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
}

/**
 * Check if element is in viewport
 * @param element The DOM element to check
 * @returns Boolean indicating if element is visible
 */
export function isElementInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

/**
 * Debounce function for performance optimization
 * @param func Function to debounce
 * @param wait Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

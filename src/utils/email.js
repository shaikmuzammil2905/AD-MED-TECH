// Utility function to reliably open / redirect to an email composer on all devices and browsers
export function openEmail(email, subject = '', body = '') {
  if (!email) return;

  const encSubject = subject ? encodeURIComponent(subject) : '';
  const encBody = body ? encodeURIComponent(body) : '';

  const query = [];
  if (encSubject) query.push(`subject=${encSubject}`);
  if (encBody) query.push(`body=${encBody}`);
  const queryString = query.length ? `?${query.join('&')}` : '';

  const mailtoUrl = `mailto:${email}${queryString}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}${encSubject ? `&su=${encSubject}` : ''}${encBody ? `&body=${encBody}` : ''}`;

  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // On mobile, mailto natively triggers the device's mail app (Apple Mail / Gmail app)
    window.location.href = mailtoUrl;
    return;
  }

  // On desktop browsers (e.g. Chrome/Edge on Windows):
  // 1. Trigger the OS mail client handler via mailto
  const hiddenLink = document.createElement('a');
  hiddenLink.href = mailtoUrl;
  hiddenLink.style.display = 'none';
  document.body.appendChild(hiddenLink);
  hiddenLink.click();
  document.body.removeChild(hiddenLink);

  // 2. Also open Gmail web compose in a new tab so web users without a desktop mail app
  // directly land on the email composer with the recipient pre-filled!
  window.open(gmailUrl, '_blank', 'noopener,noreferrer');
}

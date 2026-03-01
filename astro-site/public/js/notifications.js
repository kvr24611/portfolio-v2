// Lightweight DOM utility for showing a toast message
function _get(id) { return document.getElementById(id); }

// variant can be 'error' (default) or 'success'; adjusts background color
export function showToast(id = 'submission-toast', message = 'Failed to send. Please try again.', duration = 4000, variant = 'error') {
  const toast = _get(id);
  if (!toast) return;
  const inner = toast.querySelector('div');
  if (!inner) return;
  // update message and variant styling
  // if success, prepend tick icon
  const iconSvg = variant === 'success'
    ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    : '';
  inner.classList.remove('bg-red-600','bg-teal-600');
  inner.classList.add(variant === 'success' ? 'bg-teal-600' : 'bg-red-600');
  // update message span
  const messageSpan = toast.querySelector('[data-toast-message]');
  if (messageSpan) messageSpan.textContent = message;
  // insert icon before message if necessary
  if (iconSvg) {
    messageSpan.insertAdjacentHTML('beforebegin', iconSvg);
  }
  toast.classList.remove('hidden');
   // sleek slide-in animation: opacity + horizontal movement
   inner.classList.remove('translate-x-4','opacity-0');
   inner.classList.add('translate-x-0','opacity-100');
   setTimeout(() => {
     inner.classList.remove('translate-x-0','opacity-100');
     inner.classList.add('translate-x-4','opacity-0');
     toast.classList.add('hidden');
   }, duration);
}


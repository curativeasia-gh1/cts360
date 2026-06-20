/* ===== SHARED COMPONENTS ===== */

const NAV_HTML = `
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="CTS360 Home">
      <img src="assets/img/logo.png" alt="CTS360 – Curative Tech Services" width="160" height="66">
    </a>
    <div class="nav-links" role="menubar">
      <a href="index.html" role="menuitem">Home</a>
      <div class="has-dropdown" role="menuitem" aria-haspopup="true">
        <a href="services.html">Services</a>
        <div class="dropdown" role="menu">
          <a href="managed-it.html" role="menuitem">Managed IT Services</a>
          <a href="networking.html" role="menuitem">Office Networking</a>
          <a href="nas-backup.html" role="menuitem">NAS &amp; Cloud Backup</a>
          <a href="clinic-solutions.html" role="menuitem">Clinic Solutions</a>
          <a href="hardware.html" role="menuitem">Business Hardware</a>
          <a href="label-barcode.html" role="menuitem">Label &amp; Barcode</a>
        </div>
      </div>
      <a href="why-cts360.html" role="menuitem">Why CTS360</a>
      <a href="about.html" role="menuitem">About</a>
      <a href="contact.html" class="nav-cta" role="menuitem">Get a Quote</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div id="mobile-menu" class="mobile-menu" role="dialog" aria-label="Mobile navigation">
  <nav class="mobile-nav-links">
    <a href="index.html">Home</a>
    <div class="mobile-section-label">Services</div>
    <a href="services.html">All Services</a>
    <a href="managed-it.html">Managed IT Services</a>
    <a href="networking.html">Office Networking</a>
    <a href="nas-backup.html">NAS &amp; Cloud Backup</a>
    <a href="clinic-solutions.html">Clinic Solutions</a>
    <a href="hardware.html">Business Hardware</a>
    <a href="label-barcode.html">Label &amp; Barcode</a>
    <div class="mobile-section-label">Company</div>
    <a href="why-cts360.html">Why CTS360</a>
    <a href="about.html">About Us</a>
  </nav>
  <div class="mobile-cta">
    <a href="contact.html" class="btn btn-primary" style="width:100%;justify-content:center;">Get a Quote</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/img/logo.png" alt="CTS360" width="140">
        <p>Complete Technology Support, All Around Your Business. Serving SMEs across Singapore and Malaysia.</p>
        <div class="social-links">
          <a href="https://wa.me/6581946188" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.858L.057 23.998l6.305-1.655A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.003-1.366l-.36-.213-3.741.981.998-3.648-.233-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
          </a>
          <a href="mailto:info@cts360.net" class="social-link" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/curative-tech-services" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Services</div>
        <div class="footer-links">
          <a href="managed-it.html">Managed IT Services</a>
          <a href="networking.html">Office Networking</a>
          <a href="nas-backup.html">NAS &amp; Cloud Backup</a>
          <a href="clinic-solutions.html">Clinic Solutions</a>
          <a href="hardware.html">Business Hardware</a>
          <a href="label-barcode.html">Label &amp; Barcode</a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Company</div>
        <div class="footer-links">
          <a href="about.html">About Us</a>
          <a href="why-cts360.html">Why CTS360</a>
          <a href="services.html">All Services</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Contact Us</div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          <a href="mailto:info@cts360.net">info@cts360.net</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.11 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.18z"/></svg>
          <a href="https://wa.me/6581946188" target="_blank" rel="noopener">+65 8194 6188</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>Mon–Fri, 9am–6pm SGT</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Singapore &amp; Malaysia</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 CTS360 – Curative Tech Services. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});

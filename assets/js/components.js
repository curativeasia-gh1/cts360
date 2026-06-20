/* ===== SHARED COMPONENTS v2 ===== */

const NAV_HTML = `
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="CTS360 Home">
      <img src="assets/img/logo.png" alt="CTS360 – Curative Tech Services" width="140" height="58">
    </a>
    <div class="nav-links" role="menubar">
      <a href="index.html" role="menuitem">Home</a>

      <div class="has-dropdown" role="menuitem" aria-haspopup="true">
        <a href="services.html">IT Services</a>
        <div class="dropdown" role="menu">
          <a href="managed-it.html" role="menuitem">Managed IT Support</a>
          <a href="networking.html" role="menuitem">Office Networking</a>
          <a href="services.html" role="menuitem">Office IT Setup</a>
          <div class="dropdown-divider"></div>
          <a href="nas-backup.html" role="menuitem">Synology NAS &amp; Cloud Backup</a>
          <a href="clinic-solutions.html" role="menuitem">Clinic IT Solutions</a>
          <a href="hardware.html" role="menuitem">Business Hardware</a>
        </div>
      </div>

      <div class="has-dropdown" role="menuitem" aria-haspopup="true">
        <a href="cloud-apps.html">Cloud Applications</a>
        <div class="dropdown" role="menu">
          <a href="cloud-apps.html" role="menuitem">Overview</a>
          <div class="dropdown-divider"></div>
          <a href="microsoft365.html" role="menuitem">Microsoft 365</a>
          <a href="google-workspace.html" role="menuitem">Google Workspace</a>
          <a href="xero.html" role="menuitem">Xero Technical Setup</a>
        </div>
      </div>

      <div class="has-dropdown" role="menuitem" aria-haspopup="true">
        <a href="hardware.html">Products</a>
        <div class="dropdown" role="menu">
          <a href="hardware.html" role="menuitem">Business Hardware</a>
          <a href="brother-printers.html" role="menuitem">Brother Printers</a>
          <a href="label-barcode.html" role="menuitem">Brother Labelling Solutions</a>
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
    <div class="mobile-section-label">IT Services</div>
    <a href="managed-it.html">Managed IT Support</a>
    <a href="networking.html">Office Networking</a>
    <a href="services.html">Office IT Setup</a>
    <a href="nas-backup.html">Synology NAS &amp; Cloud Backup</a>
    <a href="clinic-solutions.html">Clinic IT Solutions</a>
    <a href="hardware.html">Business Hardware</a>
    <div class="mobile-section-label">Cloud Applications</div>
    <a href="cloud-apps.html">All Cloud Applications</a>
    <a href="microsoft365.html">Microsoft 365</a>
    <a href="google-workspace.html">Google Workspace</a>
    <a href="xero.html">Xero Technical Setup</a>
    <div class="mobile-section-label">Products</div>
    <a href="brother-printers.html">Brother Printers</a>
    <a href="label-barcode.html">Brother Labelling Solutions</a>
    <div class="mobile-section-label">Company</div>
    <a href="why-cts360.html">Why CTS360</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
  </nav>
  <div class="mobile-cta">
    <a href="contact.html" class="btn btn-primary" style="width:100%;justify-content:center;">Get a Quote</a>
    <a href="https://wa.me/6581946188" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px;" target="_blank" rel="noopener">WhatsApp Us</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/img/logo.png" alt="CTS360" width="130">
        <p>Practical Technology for Growing Businesses. IT support, cloud applications, Synology NAS, Brother printers and managed services — designed around how SMEs actually work.</p>
        <p style="margin-top:10px;font-size:0.82rem;color:rgba(255,255,255,0.3);">Singapore &amp; Malaysia</p>
        <div class="social-links">
          <a href="https://wa.me/6581946188" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.858L.057 23.998l6.305-1.655A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.003-1.366l-.36-.213-3.741.981.998-3.648-.233-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
          </a>
          <a href="mailto:info@cts360.net" class="social-link" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/curative-tech-services" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <div>
        <div class="footer-heading">IT Services</div>
        <div class="footer-links">
          <a href="managed-it.html">Managed IT Support</a>
          <a href="networking.html">Office Networking</a>
          <a href="services.html">Office IT Setup</a>
          <a href="nas-backup.html">Synology NAS &amp; Backup</a>
          <a href="clinic-solutions.html">Clinic IT Solutions</a>
        </div>
        <div class="footer-heading" style="margin-top:24px;">Cloud Applications</div>
        <div class="footer-links">
          <a href="microsoft365.html">Microsoft 365</a>
          <a href="google-workspace.html">Google Workspace</a>
          <a href="xero.html">Xero Setup</a>
          <a href="cloud-apps.html">All Cloud Apps</a>
        </div>
      </div>

      <div>
        <div class="footer-heading">Products</div>
        <div class="footer-links">
          <a href="hardware.html">Business Hardware</a>
          <a href="brother-printers.html">Brother Printers</a>
          <a href="label-barcode.html">Brother Labelling</a>
        </div>
        <div class="footer-heading" style="margin-top:24px;">Company</div>
        <div class="footer-links">
          <a href="about.html">About CTS360</a>
          <a href="why-cts360.html">Why CTS360</a>
          <a href="services.html">All Services</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>

      <div>
        <div class="footer-heading">Contact Us</div>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
          <a href="mailto:info@cts360.net">info@cts360.net</a>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.858L.057 23.998l6.305-1.655A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.003-1.366l-.36-.213-3.741.981.998-3.648-.233-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
          <a href="https://wa.me/6581946188" target="_blank" rel="noopener">+65 8194 6188</a>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>Mon–Fri, 9am–6pm SGT</span>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Singapore &amp; Malaysia</span>
        </div>
        <div style="margin-top:20px;">
          <a href="contact.html" class="btn btn-primary btn-sm" style="width:100%;justify-content:center;margin-bottom:8px;">Request an IT Assessment</a>
          <a href="https://wa.me/6581946188" class="btn btn-outline btn-sm" style="width:100%;justify-content:center;" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 CTS360 – Curative Tech Services. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Use</a>
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

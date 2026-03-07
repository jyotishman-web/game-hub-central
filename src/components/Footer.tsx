const Footer = () => (
  <footer className="border-t border-border/40 bg-card/50 mt-12">
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-foreground mb-3">Game Garage</h3>
          <p className="text-muted-foreground">Play free HTML5 games instantly — no downloads, no installs.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3">Pages</h3>
          <ul className="space-y-1.5">
            <li><a href="/about.html" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/contact.html" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3">Legal</h3>
          <ul className="space-y-1.5">
            <li><a href="/privacy-policy.html" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service.html" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 mt-6 pt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Game Garage. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

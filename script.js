document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function handleScroll() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    let currentSection = 'hero';
    const sections = ['hero', 'features', 'showcase', 'pricing'];
    
    sections.forEach(sectionId => {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = sectionId;
        }
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  function toggleMobileMenu() {
    const isOpen = mobileToggle.classList.contains('active');
    
    if (isOpen) {
      mobileToggle.classList.remove('active');
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      mobileToggle.classList.add('active');
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
  
  mobileToggle.addEventListener('click', toggleMobileMenu);
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileDrawer.classList.contains('open')) {
      mobileToggle.classList.remove('active');
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  const btnPreview = document.getElementById('btn-canvas-preview');
  const btnCode = document.getElementById('btn-canvas-code');
  const canvasView = document.getElementById('canvas-view');
  
  const previewLayout = `
    <div class="canvas-element drag-element-1">
      <span class="element-tag">H1 Heading</span>
      <div class="element-text">Create beautiful code.</div>
    </div>
    <div class="canvas-element drag-element-2">
      <span class="element-tag">CTA Button</span>
      <div class="element-preview-btn">Get Started</div>
    </div>
    <div class="canvas-vector-dots"></div>
  `;
  
  const codeLayout = `
    <div style="font-family: 'Fira Code', monospace; font-size: 0.775rem; color: #a1a1aa; padding: 1.5rem; overflow-y: auto; height: 100%;">
      <pre><code><span class="code-keyword">import</span> React <span class="code-keyword">from</span> <span class="code-string">"react"</span>;
<span class="code-keyword">import</span> { <span class="code-type">Button</span> } <span class="code-keyword">from</span> <span class="code-string">"./components/ui/button"</span>;

<span class="code-keyword">export default function</span> <span class="code-function">CanvasView</span>() {
  <span class="code-keyword">return</span> (
    <span class="code-tag">&lt;</span><span class="code-type">div</span> <span class="code-attr">className</span><span class="code-operator">=</span><span class="code-string">"flex flex-col gap-6"</span><span class="code-tag">&gt;</span>
      <span class="code-tag">&lt;</span><span class="code-keyword">h1</span> <span class="code-attr">className</span><span class="code-operator">=</span><span class="code-string">"text-3xl font-bold text-white"</span><span class="code-tag">&gt;</span>
        Create beautiful code.
      <span class="code-tag">&lt;/</span><span class="code-keyword">h1</span><span class="code-tag">&gt;</span>
      <span class="code-tag">&lt;</span><span class="code-type">Button</span> <span class="code-attr">variant</span><span class="code-operator">=</span><span class="code-string">"gradient"</span><span class="code-tag">&gt;</span>
        Get Started
      <span class="code-tag">&lt;/</span><span class="code-type">Button</span><span class="code-tag">&gt;</span>
    <span class="code-tag">&lt;/</span><span class="code-type">div</span><span class="code-tag">&gt;</span>
  );
}</code></pre>
    </div>
  `;
  
  if (btnPreview && btnCode && canvasView) {
    btnPreview.addEventListener('click', () => {
      btnPreview.classList.add('active');
      btnCode.classList.remove('active');
      canvasView.innerHTML = previewLayout;
    });
    
    btnCode.addEventListener('click', () => {
      btnCode.classList.add('active');
      btnPreview.classList.remove('active');
      canvasView.innerHTML = codeLayout;
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const messageSpan = document.getElementById('newsletter-message');
  
  if (newsletterForm && emailInput && messageSpan) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(emailValue)) {
        messageSpan.textContent = 'Please enter a valid email address.';
        messageSpan.className = 'form-message error';
        return;
      }
      
      messageSpan.textContent = 'Submitting...';
      messageSpan.className = 'form-message';
      messageSpan.style.color = 'var(--color-gray-400)';
      
      setTimeout(() => {
        messageSpan.textContent = 'Thank you! You have been subscribed.';
        messageSpan.className = 'form-message success';
        emailInput.value = '';
      }, 1000);
    });
  }
});

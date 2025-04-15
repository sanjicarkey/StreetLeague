<WebView
  source={{ uri: 'https://cal.com/sanji-62/30min' }}
  onMessage={handleCalendarMessage}
  injectedJavaScript={`
    const hideElements = () => {
      const selectors = [
        'header',
        '.event-title-wrapper',
        '.event-type-meta',
        '.location-wrapper',
        '.timezone-wrapper',
        '.event-type-meta + div' // sometimes description
      ];
      selectors.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.style.display = 'none';
      });
    };
    setTimeout(hideElements, 2000);
    true;
  `}
/>

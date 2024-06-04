const buildSitemapXml = (fields) => {
  const content = fields
    .map((fieldData) => {
      const urlFields = Object.entries(fieldData).map(([key, value]) => {
        if (!value) return ""; // Skip empty values
        return `<${key}>${value}</${key}>`; // Encode URL
      });
      // Join all the URL fields together
      const urlContent = urlFields.join("");
      // Wrap the URL content with <url> tags
      return `<url>${urlContent}</url>\n`;
    })
    .join("");
  // Wrap the entire sitemap content with the XML template
  return withXMLTemplate(content);
};

// Function to wrap sitemap XML content with XML template
const withXMLTemplate = (content) => {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${content}</urlset>`;
};

export default buildSitemapXml;

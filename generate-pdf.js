<><button id="generate-pdf-button">Generate PDF</button><script>
  document.getElementById('generate-pdf-button').addEventListener('click', async function() { }
  const puppeteer = require('puppeteer');
  const fs = require('fs');

  async function generatePdf() { }
  const htmlFiles = ['_includes/about.html'];
  let htmlContent = '';

  for (const file of htmlFiles) {htmlContent += fs.readFileSync(file, 'utf8')};
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.pdf({path}: 'cv.pdf',
  format: 'A4',
  printBackground: true
  });
  await browser.close();
  }

  generatePdf();
  });
</script></>

const { chromium } = require('playwright');

async function captureSlides() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const baseUrl = 'https://amimarketingstrategy-git-feature-ami-dc16de-lumasaurs-projects.vercel.app/';

  const fs = require('fs');
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  // Capture specific slides by navigating directly to their hash
  const slidesToCapture = [1, 5, 6, 7, 10, 11];

  for (const slideNum of slidesToCapture) {
    console.log(`Capturing Slide ${slideNum}...`);
    await page.goto(`${baseUrl}#${slideNum}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500); // Wait for animations
    await page.screenshot({ path: `./screenshots/slide-${slideNum}-final.png`, fullPage: false });
  }

  console.log('All screenshots captured!');

  await browser.close();
}

captureSlides().catch(console.error);

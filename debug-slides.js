const { chromium } = require('playwright');

async function debugSlides() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Navigate to the deployed site
  console.log('Loading site...');
  await page.goto('https://sushi-media-ami.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Check current URL
  const url = page.url();
  console.log('Current URL:', url);

  // Check for slide elements
  const slideElements = await page.$$('[data-slide]');
  console.log('Found', slideElements.length, 'elements with data-slide attribute');

  // Check for any section elements
  const sections = await page.$$('section');
  console.log('Found', sections.length, 'section elements');

  // Get the page title
  const title = await page.title();
  console.log('Page title:', title);

  // Try to find any slide indicators or counters
  const slideCounter = await page.$('text=/\\d+\\s*\\/\\s*\\d+/');
  if (slideCounter) {
    const counterText = await slideCounter.textContent();
    console.log('Slide counter found:', counterText);
  } else {
    console.log('No slide counter found');
  }

  // Check if there's content with "The Opportunity"
  const opportunityText = await page.$('text=/The Opportunity/i');
  if (opportunityText) {
    console.log('Found "The Opportunity" text on current view');
  } else {
    console.log('No "The Opportunity" text found - might be on a different slide');
  }

  // Take a screenshot of initial state
  await page.screenshot({ path: './screenshots/debug-initial.png', fullPage: true });
  console.log('Screenshot saved to debug-initial.png');

  await browser.close();
}

debugSlides().catch(console.error);

const { chromium } = require('playwright');

async function captureSlides() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Navigate to the deployed site
  await page.goto('https://sushi-media-ami.vercel.app/', { waitUntil: 'networkidle' });

  // Wait for initial load
  await page.waitForTimeout(3000);

  const fs = require('fs');
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  // Function to wait for slide transition
  async function waitForSlide(slideNumber) {
    await page.waitForSelector(`[data-slide="${slideNumber}"]`, { timeout: 5000 });
    await page.waitForTimeout(1000); // Wait for animations
  }

  console.log('Capturing Slide 1...');
  await page.keyboard.press('ArrowRight'); // Navigate to slide 1
  await waitForSlide(1);
  await page.screenshot({ path: './screenshots/slide-1-v2.png', fullPage: false });

  // Navigate to slide 5
  console.log('Navigating to Slide 5...');
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
  }
  await waitForSlide(5);
  await page.screenshot({ path: './screenshots/slide-5-v2.png', fullPage: false });

  // Navigate to slide 6
  console.log('Capturing Slide 6...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await waitForSlide(6);
  await page.screenshot({ path: './screenshots/slide-6-v2.png', fullPage: false });

  // Navigate to slide 7
  console.log('Capturing Slide 7...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await waitForSlide(7);
  await page.screenshot({ path: './screenshots/slide-7-v2.png', fullPage: false });

  // Navigate to slide 10
  console.log('Navigating to Slide 10...');
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
  }
  await waitForSlide(10);
  await page.screenshot({ path: './screenshots/slide-10-v2.png', fullPage: false });

  // Navigate to slide 11
  console.log('Capturing Slide 11...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await waitForSlide(11);
  await page.screenshot({ path: './screenshots/slide-11-v2.png', fullPage: false });

  console.log('All screenshots captured!');

  await browser.close();
}

captureSlides().catch(console.error);

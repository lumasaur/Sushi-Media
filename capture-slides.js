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
  await page.waitForTimeout(2000);

  // Create screenshots directory
  const fs = require('fs');
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  console.log('Capturing Slide 1...');
  await page.screenshot({ path: './screenshots/slide-1.png', fullPage: false });

  // Navigate to slide 5 (press arrow right 4 times)
  console.log('Navigating to Slide 5...');
  for (let i = 0; i < 4; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: './screenshots/slide-5.png', fullPage: false });

  // Navigate to slide 6
  console.log('Capturing Slide 6...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: './screenshots/slide-6.png', fullPage: false });

  // Navigate to slide 7
  console.log('Capturing Slide 7...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: './screenshots/slide-7.png', fullPage: false });

  // Navigate to slide 10 (3 more slides)
  console.log('Navigating to Slide 10...');
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: './screenshots/slide-10.png', fullPage: false });

  // Navigate to slide 11
  console.log('Capturing Slide 11...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: './screenshots/slide-11.png', fullPage: false });

  console.log('All screenshots captured!');

  await browser.close();
}

captureSlides().catch(console.error);

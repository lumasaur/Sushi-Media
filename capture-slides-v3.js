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

  console.log('Capturing Slide 0 (initial)...');
  await page.screenshot({ path: './screenshots/slide-0-initial.png', fullPage: false });

  // Navigate to slide 1
  console.log('Navigating to Slide 1...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: './screenshots/slide-1-v3.png', fullPage: false });

  // Navigate to slides 2-5
  for (let i = 2; i <= 5; i++) {
    console.log(`Navigating to Slide ${i}...`);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    if (i === 5) {
      await page.screenshot({ path: `./screenshots/slide-${i}-v3.png`, fullPage: false });
    }
  }

  // Slide 6
  console.log('Capturing Slide 6...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: './screenshots/slide-6-v3.png', fullPage: false });

  // Slide 7
  console.log('Capturing Slide 7...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: './screenshots/slide-7-v3.png', fullPage: false });

  // Navigate to slide 10 (8, 9, 10)
  for (let i = 8; i <= 10; i++) {
    console.log(`Navigating to Slide ${i}...`);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000);
    if (i === 10) {
      await page.screenshot({ path: `./screenshots/slide-${i}-v3.png`, fullPage: false });
    }
  }

  // Slide 11
  console.log('Capturing Slide 11...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: './screenshots/slide-11-v3.png', fullPage: false });

  console.log('All screenshots captured!');

  await browser.close();
}

captureSlides().catch(console.error);

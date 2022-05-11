import { PlaywrightTestConfig } from '@playwright/test';

const config = {
  timeout: 60000,
  retries: 0,
  testDir: './specs',

  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;

import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './Button';

test('should work', async ({ mount }) => {
  const component = await mount(<Button>Button</Button>);
  await expect(component).toHaveScreenshot();
});

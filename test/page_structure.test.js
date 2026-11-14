import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Seam 2: Semantic HTML & Navigation Anchor Integrity', () => {
  const indexPath = path.resolve('src/pages/index.astro');
  assert.ok(fs.existsSync(indexPath), 'src/pages/index.astro must exist');

  const content = fs.readFileSync(indexPath, 'utf-8');

  // Verify section anchors exist in the template
  const requiredAnchors = ['introduction', 'experience', 'skills', 'projects', 'contact'];
  for (const anchor of requiredAnchors) {
    const hasSection =
      content.includes(`id="${anchor}"`) ||
      content.includes(`id='${anchor}'`) ||
      content.includes(`<${anchor.charAt(0).toUpperCase() + anchor.slice(1)}`);
    assert.ok(hasSection, `Page must include anchor or section for #${anchor}`);
  }
});

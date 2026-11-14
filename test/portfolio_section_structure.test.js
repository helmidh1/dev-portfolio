import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Seam 2: Semantic HTML & Portfolio Section Anchor Integrity', () => {
  const indexPath = path.resolve('src/pages/index.astro');
  assert.ok(fs.existsSync(indexPath), 'Entrypoint src/pages/index.astro must exist');

  // Verify that all Portfolio Section components define proper scroll anchors
  const sectionFiles = {
    introduction: 'src/components/sections/Introduction.astro',
    experience: 'src/components/sections/Experience.astro',
    skills: 'src/components/sections/Skills.astro',
    projects: 'src/components/sections/Projects.astro',
    contact: 'src/components/sections/Contact.astro',
  };

  for (const [sectionKey, filePath] of Object.entries(sectionFiles)) {
    const fullPath = path.resolve(filePath);
    assert.ok(fs.existsSync(fullPath), `Portfolio Section file ${filePath} must exist`);
    const content = fs.readFileSync(fullPath, 'utf-8');
    assert.ok(
      content.includes(`id="${sectionKey}"`),
      `Portfolio Section ${sectionKey} must have id="${sectionKey}" anchor`
    );
    assert.ok(
      content.includes('scroll-mt-20'),
      `Portfolio Section ${sectionKey} must configure scroll-mt offset`
    );
  }
});

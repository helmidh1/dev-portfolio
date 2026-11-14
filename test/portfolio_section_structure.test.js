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

test('Seam 3: Interactive Selection & Highlight State Integrity', () => {
  // 1. Mobile Menu Highlight in NavBar
  const navPath = path.resolve('src/components/NavBar.astro');
  const navContent = fs.readFileSync(navPath, 'utf-8');
  assert.ok(
    navContent.includes('hover:bg-teal-500/10') && navContent.includes('active:bg-teal-500/25'),
    'NavBar mobile menu items must configure hover and active highlight rectangles'
  );

  // 2. Experience block selection & click-outside dismissal
  const expPath = path.resolve('src/components/sections/Experience.astro');
  const expContent = fs.readFileSync(expPath, 'utf-8');
  assert.ok(expContent.includes('experience-item'), 'Experience section must mark items with .experience-item');
  assert.ok(expContent.includes('data-selected'), 'Experience section must style data-selected');
  assert.ok(expContent.includes('e.target.closest'), 'Experience section must include click handler with outside-click detection');

  // 3. Skills badge selection & click-outside dismissal
  const skillsPath = path.resolve('src/components/sections/Skills.astro');
  const skillsContent = fs.readFileSync(skillsPath, 'utf-8');
  assert.ok(skillsContent.includes('skill-badge'), 'Skills section must mark badges with .skill-badge');
  assert.ok(skillsContent.includes('data-selected'), 'Skills section must style data-selected');
  assert.ok(skillsContent.includes('e.target.closest'), 'Skills section must include click handler with outside-click detection');

  // 4. Projects card selection & click-outside dismissal
  const projectsPath = path.resolve('src/components/sections/Projects.astro');
  const projectsContent = fs.readFileSync(projectsPath, 'utf-8');
  assert.ok(projectsContent.includes('project-card'), 'Projects section must mark cards with .project-card');
  assert.ok(projectsContent.includes('data-selected'), 'Projects section must style data-selected');
  assert.ok(projectsContent.includes('e.target.closest'), 'Projects section must include click handler with outside-click detection');
});

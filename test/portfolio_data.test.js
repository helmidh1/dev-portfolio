import test from 'node:test';
import assert from 'node:assert/strict';

test('Seam 1: Portfolio Data Contract', async () => {
  // Try importing the data module
  const { portfolioData } = await import('../src/data/portfolio.ts');

  assert.ok(portfolioData, 'portfolioData must be defined');
  assert.equal(portfolioData.name, 'Helmi Hernandez');
  assert.equal(portfolioData.fullName, 'Helmi D. Hernandez');
  assert.ok(portfolioData.email.includes('@'), 'Must contain a valid email');
  assert.ok(portfolioData.linkedinUrl.startsWith('https://'), 'Must contain LinkedIn URL');
  assert.ok(portfolioData.githubUrl.startsWith('https://'), 'Must contain GitHub URL');

  // Verify experiences
  assert.ok(Array.isArray(portfolioData.experiences), 'experiences must be an array');
  assert.ok(portfolioData.experiences.length >= 5, 'must contain at least 5 experiences');
  for (const exp of portfolioData.experiences) {
    assert.ok(exp.role, 'Experience must have role');
    assert.ok(exp.company, 'Experience must have company');
    assert.ok(exp.duration, 'Experience must have duration');
    assert.ok(exp.description, 'Experience must have description');
  }

  // Verify skills
  assert.ok(Array.isArray(portfolioData.skills), 'skills must be an array');
  assert.ok(portfolioData.skills.length >= 10, 'must contain skills');
  const categories = new Set(portfolioData.skills.map((s) => s.category));
  assert.ok(categories.has('AI'), 'Skills must contain AI category');
  assert.ok(categories.has('Programming'), 'Skills must contain Programming category');
  assert.ok(categories.has('Web & App'), 'Skills must contain Web & App category');
  assert.ok(categories.has('Game Dev'), 'Skills must contain Game Dev category');

  const skillNames = new Set(portfolioData.skills.map((s) => s.name));
  assert.ok(skillNames.has('Antigravity'), 'Skills must contain Antigravity');
  assert.ok(skillNames.has('Gemini'), 'Skills must contain Gemini');
  assert.ok(skillNames.has('Claude Code'), 'Skills must contain Claude Code');

  // Verify projects
  assert.ok(Array.isArray(portfolioData.projects), 'projects must be an array');
  assert.ok(portfolioData.projects.length >= 3, 'must contain at least 3 projects');
  for (const proj of portfolioData.projects) {
    assert.ok(proj.title, 'Project must have title');
    assert.ok(proj.description, 'Project must have description');
    assert.ok(Array.isArray(proj.tags) && proj.tags.length > 0, 'Project must have tags');
    assert.ok(proj.codeUrl.startsWith('https://'), 'Project codeUrl must be https');
    assert.ok(proj.imagePath, 'Project imagePath must be defined');
  }
});

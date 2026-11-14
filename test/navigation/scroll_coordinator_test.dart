import 'package:flutter_test/flutter_test.dart';
import 'package:website_proj_2/navigation/scroll_coordinator.dart';

void main() {
  group('PortfolioSection', () {
    test('has all expected sections with valid titles', () {
      expect(PortfolioSection.values.length, 5);
      expect(PortfolioSection.introduction.title, 'Introduction');
      expect(PortfolioSection.experience.title, 'Experience');
      expect(PortfolioSection.skills.title, 'Skills');
      expect(PortfolioSection.projects.title, 'Projects');
      expect(PortfolioSection.contact.title, 'Contact');
    });
  });

  group('FakeScrollCoordinator', () {
    test('records navigation calls and provides keys', () {
      final fake = FakeScrollCoordinator();

      expect(fake.navigatedSections, isEmpty);
      expect(fake.lastNavigatedSection, isNull);

      fake.scrollTo(PortfolioSection.projects);
      expect(fake.navigatedSections, [PortfolioSection.projects]);
      expect(fake.lastNavigatedSection, PortfolioSection.projects);

      final key1 = fake.keyFor(PortfolioSection.skills);
      final key2 = fake.keyFor(PortfolioSection.skills);
      expect(key1, same(key2));
    });
  });

  group('DefaultScrollCoordinator', () {
    test('lazily creates and caches distinct GlobalKeys per section', () {
      final coordinator = DefaultScrollCoordinator();

      final introKey = coordinator.keyFor(PortfolioSection.introduction);
      final projectsKey = coordinator.keyFor(PortfolioSection.projects);

      expect(introKey, isNotNull);
      expect(projectsKey, isNotNull);
      expect(introKey, isNot(equals(projectsKey)));

      // Repeated lookup returns the identical key instance
      expect(coordinator.keyFor(PortfolioSection.introduction), same(introKey));
      coordinator.dispose();
    });
  });
}

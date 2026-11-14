import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:website_proj_2/navigation/scroll_coordinator.dart';
import 'package:website_proj_2/widgets/navbar.dart';

void main() {
  testWidgets('NavBar navigates to section when nav link is tapped', (tester) async {
    final fakeCoordinator = FakeScrollCoordinator();

    // Set screen size to wide desktop width so nav links fit comfortably with test fallback fonts
    tester.view.physicalSize = const Size(1600, 900);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.resetPhysicalSize);

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ScrollCoordinatorScope(
            coordinator: fakeCoordinator,
            child: NavBar(
              isDark: true,
              onThemeToggle: () {},
            ),
          ),
        ),
      ),
    );

    // Tap on 'Projects' nav link
    final projectsFinder = find.text('Projects');
    expect(projectsFinder, findsOneWidget);
    await tester.tap(projectsFinder);
    await tester.pump();

    expect(fakeCoordinator.lastNavigatedSection, PortfolioSection.projects);

    // Tap on logo to navigate to introduction
    final logoFinder = find.byType(InkWell).first;
    await tester.tap(logoFinder);
    await tester.pump();

    expect(fakeCoordinator.lastNavigatedSection, PortfolioSection.introduction);
  });
}

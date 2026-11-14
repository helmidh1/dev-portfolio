import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:website_proj_2/navigation/scroll_coordinator.dart';
import 'package:website_proj_2/sections/introduction_section.dart';

void main() {
  testWidgets('IntroductionSection navigates via ScrollCoordinatorScope when action buttons tapped', (tester) async {
    final fakeCoordinator = FakeScrollCoordinator();

    tester.view.physicalSize = const Size(1200, 800);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.resetPhysicalSize);

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ScrollCoordinatorScope(
            coordinator: fakeCoordinator,
            child: const IntroductionSection(),
          ),
        ),
      ),
    );

    // Initial pump and settle animation
    await tester.pump();

    // Tap 'View Projects'
    final projectsBtn = find.text('View Projects');
    expect(projectsBtn, findsOneWidget);
    await tester.tap(projectsBtn);
    await tester.pump();

    expect(fakeCoordinator.lastNavigatedSection, PortfolioSection.projects);

    // Tap 'Contact Me'
    final contactBtn = find.text('Contact Me');
    expect(contactBtn, findsOneWidget);
    await tester.tap(contactBtn);
    await tester.pump();

    expect(fakeCoordinator.lastNavigatedSection, PortfolioSection.contact);
  });
}

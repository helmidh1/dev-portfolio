import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:website_proj_2/main.dart';
import 'package:website_proj_2/widgets/navbar.dart';

void main() {
  testWidgets('PortfolioApp mounts, renders navigation and sections cleanly', (tester) async {
    tester.view.physicalSize = const Size(1600, 900);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.resetPhysicalSize);

    await tester.pumpWidget(const PortfolioApp());
    await tester.pump();

    // Verify NavBar is rendered
    expect(find.byType(NavBar), findsOneWidget);

    // Verify theme toggle button toggles brightness without error
    final themeToggleBtn = find.byType(IconButton);
    expect(themeToggleBtn, findsOneWidget);
    await tester.tap(themeToggleBtn);
    await tester.pump();

    // Verify header title text
    expect(find.text('Helmi Hernandez'), findsWidgets);
  });
}

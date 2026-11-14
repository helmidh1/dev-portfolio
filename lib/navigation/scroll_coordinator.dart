import 'package:flutter/material.dart';

/// The distinct navigable sections of the portfolio application.
enum PortfolioSection {
  introduction('Introduction'),
  experience('Experience'),
  skills('Skills'),
  projects('Projects'),
  contact('Contact');

  final String title;
  const PortfolioSection(this.title);
}

/// The public interface for coordinating scrolling across portfolio sections.
abstract class ScrollCoordinator {
  /// Navigates the viewport to the target [section].
  void scrollTo(PortfolioSection section);

  /// Returns the [GlobalKey] associated with the given [section].
  GlobalKey keyFor(PortfolioSection section);
}

/// The production implementation of [ScrollCoordinator], encapsulating
/// scroll physics, controller lifecycle, and section alignment offsets.
class DefaultScrollCoordinator implements ScrollCoordinator {
  final ScrollController scrollController;
  final Duration duration;
  final Curve curve;
  final double alignmentOffset;

  final Map<PortfolioSection, GlobalKey> _keys = {};

  DefaultScrollCoordinator({
    ScrollController? scrollController,
    this.duration = const Duration(milliseconds: 500),
    this.curve = Curves.easeInOut,
    this.alignmentOffset = 0.1,
  }) : scrollController = scrollController ?? ScrollController();

  @override
  GlobalKey keyFor(PortfolioSection section) {
    return _keys.putIfAbsent(section, () => GlobalKey());
  }

  @override
  void scrollTo(PortfolioSection section) {
    if (section == PortfolioSection.introduction) {
      if (scrollController.hasClients) {
        scrollController.animateTo(
          0,
          duration: duration,
          curve: curve,
        );
      }
      return;
    }

    final key = _keys[section];
    if (key?.currentContext != null) {
      Scrollable.ensureVisible(
        key!.currentContext!,
        duration: duration,
        curve: curve,
        alignmentPolicy: ScrollPositionAlignmentPolicy.explicit,
        alignment: alignmentOffset,
      );
    }
  }

  void dispose() {
    scrollController.dispose();
  }
}

/// InheritedWidget providing access to the ambient [ScrollCoordinator].
class ScrollCoordinatorScope extends InheritedWidget {
  final ScrollCoordinator coordinator;

  const ScrollCoordinatorScope({
    super.key,
    required this.coordinator,
    required super.child,
  });

  static ScrollCoordinator of(BuildContext context) {
    final scope = context.dependOnInheritedWidgetOfExactType<ScrollCoordinatorScope>();
    assert(scope != null, 'No ScrollCoordinatorScope found in context');
    return scope!.coordinator;
  }

  static ScrollCoordinator? maybeOf(BuildContext context) {
    final scope = context.dependOnInheritedWidgetOfExactType<ScrollCoordinatorScope>();
    return scope?.coordinator;
  }

  @override
  bool updateShouldNotify(ScrollCoordinatorScope oldWidget) {
    return coordinator != oldWidget.coordinator;
  }
}

/// Declarative wrapper binding a [PortfolioSection] to its anchor in the scroll view.
class ScrollSection extends StatelessWidget {
  final PortfolioSection section;
  final Widget child;

  const ScrollSection({
    super.key,
    required this.section,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    final coordinator = ScrollCoordinatorScope.of(context);
    return KeyedSubtree(
      key: coordinator.keyFor(section),
      child: child,
    );
  }
}

/// Test fake recording [scrollTo] invocations for fast headless widget tests.
class FakeScrollCoordinator implements ScrollCoordinator {
  final List<PortfolioSection> navigatedSections = [];
  final Map<PortfolioSection, GlobalKey> _keys = {};

  @override
  GlobalKey keyFor(PortfolioSection section) {
    return _keys.putIfAbsent(section, () => GlobalKey());
  }

  @override
  void scrollTo(PortfolioSection section) {
    navigatedSections.add(section);
  }

  PortfolioSection? get lastNavigatedSection =>
      navigatedSections.isNotEmpty ? navigatedSections.last : null;
}

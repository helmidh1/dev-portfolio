import 'package:flutter/material.dart';
import 'package:website_proj_2/navigation/scroll_coordinator.dart';
import 'package:website_proj_2/theme/app_theme.dart';
import 'package:website_proj_2/widgets/navbar.dart';
import 'package:website_proj_2/sections/introduction_section.dart';
import 'package:website_proj_2/sections/experience_section.dart';
import 'package:website_proj_2/sections/skills_section.dart';
import 'package:website_proj_2/sections/projects_section.dart';
import 'package:website_proj_2/sections/contact_section.dart';
import 'package:website_proj_2/widgets/section_divider.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatefulWidget {
  const PortfolioApp({super.key});

  @override
  State<PortfolioApp> createState() => _PortfolioAppState();
}

class _PortfolioAppState extends State<PortfolioApp> {
  bool _isDark = true;
  late final DefaultScrollCoordinator _scrollCoordinator;

  @override
  void initState() {
    super.initState();
    _scrollCoordinator = DefaultScrollCoordinator();
  }

  @override
  void dispose() {
    _scrollCoordinator.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Helmi Hernandez - Portfolio',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: _isDark ? ThemeMode.dark : ThemeMode.light,
      builder: (context, child) {
        // Use AnimatedTheme for smooth transitions
        return AnimatedTheme(
          data: _isDark ? AppTheme.darkTheme : AppTheme.lightTheme,
          duration: const Duration(milliseconds: 300),
          child: child!,
        );
      },
      home: Scaffold(
        body: ScrollCoordinatorScope(
          coordinator: _scrollCoordinator,
          child: Stack(
            children: [
              SingleChildScrollView(
                controller: _scrollCoordinator.scrollController,
                child: const SelectionArea(
                  child: Column(
                    children: [
                      SizedBox(height: 70), // Space for fixed navbar
                      ScrollSection(
                        section: PortfolioSection.introduction,
                        child: IntroductionSection(),
                      ),
                      SectionBlurDivider(),
                      ScrollSection(
                        section: PortfolioSection.experience,
                        child: ExperienceSection(),
                      ),
                      ScrollSection(
                        section: PortfolioSection.skills,
                        child: SkillsSection(),
                      ),
                      ScrollSection(
                        section: PortfolioSection.projects,
                        child: ProjectsSection(),
                      ),
                      ScrollSection(
                        section: PortfolioSection.contact,
                        child: ContactSection(),
                      ),
                    ],
                  ),
                ),
              ),
              Positioned(
                top: 0,
                left: 0,
                right: 0,
                child: NavBar(
                  isDark: _isDark,
                  onThemeToggle: () {
                    setState(() {
                      _isDark = !_isDark;
                    });
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

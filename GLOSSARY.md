# Portfolio Site

A responsive single-page developer portfolio built with Flutter and Dart, showcasing projects, skills, and professional experience.

## Language

**Portfolio Section**:
A distinct content region of the portfolio (Introduction, Experience, Skills, Projects, Contact) navigable from the navbar and interactive hero controls.
_Avoid_: Page, screen, route, tab

**Scroll Coordinator**:
The module that manages viewport transitions, animation timing, and navbar offset clearance when navigating between portfolio sections.
_Avoid_: Router, navigator, scroll helper, page controller

**Scroll Section**:
The declarative container that anchors a specific Portfolio Section to the scroll viewport.
_Avoid_: Section anchor, section target, key wrapper

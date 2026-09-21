Esho Brain & Spine Centre — Website Redesign Guide
1. Project Direction
This is not a normal hospital website. The visual identity should communicate that Esho is a specialist brain, spine, neurological, neurosurgical and critical-care centre.
The existing website describes Esho Brain & Spine Centre as a super-specialty hospital and highlights Neurosurgery, Neurology, Neuro-radiology, Neuro-rehabilitation and Neuro-ICU/Anaesthesia. It also highlights specialist consultation, emergency/critical care, modern facilities, experienced staff and ambulance services.
Design personality
Premium
Clinical
Trustworthy
Scientific
Calm
Precise
Modern
Human
Specialist rather than generic
Primary colours
Use a white + blue + green system.
Suggested starting palette:
```txt
White:       #FFFFFF
Off-white:   #F7FAFC
Deep Blue:   #063B66
Primary Blue:#0B6EAD
Light Blue:  #EAF5FB
Green:       #159A6C
Light Green: #E8F7F1
Dark Text:   #102A43
Muted Text:  #627D98
Border:      #D9E6EF
```
Do not use all colours everywhere. White should dominate, blue should establish authority, and green should be used as an accent for care, action and positive states.
---
2. Technology Stack
```txt
Next.js
TypeScript
Tailwind CSS
GSAP
GSAP ScrollTrigger
next/image
next/font
Lucide React
```
Recommended architecture:
```txt
Next.js App Router
        |
        ├── app/
        │   ├── page.tsx
        │   ├── about/page.tsx
        │   ├── services/page.tsx
        │   └── contact/page.tsx
        │
        ├── components/
        │   ├── layout/
        │   ├── home/
        │   ├── about/
        │   ├── services/
        │   ├── contact/
        │   └── ui/
        │
        ├── data/
        │   └── services.ts
        │
        └── lib/
            └── animations.ts
```
Use reusable components instead of putting the entire website inside each page.
---
3. Global Design System
Typography
Use a modern sans-serif.
Recommended:
```tsx
Inter
```
or another clean medical/technology-oriented sans-serif available through `next/font`.
Typography hierarchy:
```txt
Hero heading:      64–88px desktop
Section heading:   42–56px
Card heading:      20–28px
Body:              16–18px
Small text:        13–15px
```
Mobile typography should scale down smoothly.
Use:
```txt
font-weight 400 → body
font-weight 500 → labels
font-weight 600 → buttons/cards
font-weight 700 → major headings
```
Avoid decorative fonts.
---
4. Global Layout Rules
Every page should have:
```txt
Navbar
Main content
CTA section where appropriate
Footer
```
Use:
```txt
max-width: 1280px
responsive horizontal padding
large vertical spacing
generous whitespace
```
The website should feel spacious rather than crowded.
Avoid:
Gradients everywhere
Excessive rounded cards
Huge drop shadows
Neon colours
Generic hospital stock-template styling
Overuse of icons
Excessive animations
Animation on every element
Use subtle borders, whitespace, typography and photography to create the premium feeling.
---
5. Navbar
Desktop
Create a clean sticky navbar.
Structure:
```txt
[Logo]

Home
About
Services
Contact

[Book an Appointment]
```
The appointment button should use the blue/green accent system.
Navbar behaviour:
Transparent/white at the top when appropriate
Becomes solid white after scrolling
Slight shadow or border after scrolling
Smooth transition
Sticky
Logo remains visible
CTA remains accessible
Mobile
Use:
```txt
[Logo]                       [Menu]
```
Opening the menu should animate a clean full-width/mobile navigation panel.
Items:
```txt
Home
About
Services
Contact
Book an Appointment
```
Animation:
```txt
menu button → panel slides/fades in
links → stagger upward
close → reverse animation
```
---
6. Global GSAP Animation Strategy
Use GSAP and ScrollTrigger.
Do not animate everything.
The animation language should feel:
```txt
slow
precise
smooth
clinical
premium
```
Recommended animation durations
```txt
Micro interaction: 0.2–0.4s
Normal reveal:     0.6–0.9s
Hero animation:    1.0–1.4s
Large section:     1.0–1.5s
```
Use easing such as:
```txt
power2.out
power3.out
expo.out
```
Standard reveal
Create a reusable component:
```tsx
<Reveal>
  <section>...</section>
</Reveal>
```
Typical animation:
```txt
opacity: 0 → 1
y: 40 → 0
```
Stagger
For cards:
```txt
card 1 → 0s
card 2 → 0.08s
card 3 → 0.16s
card 4 → 0.24s
```
Image reveal
Use:
```txt
container clip-path
image scale: 1.08 → 1
```
This should be subtle.
Important
Respect:
```css
prefers-reduced-motion
```
Users who request reduced motion should not receive large GSAP animations.
---
7. HOME PAGE
Section 1 — Hero
The hero should immediately communicate:
> Esho is a specialist brain and spine centre.
Do not make it look like a generic hospital homepage.
Layout
Desktop:
```txt
------------------------------------------------
|                                              |
|  SPECIALIST BRAIN & SPINE CARE               |
|                                              |
|  Advanced neurological and                   |
|  neurosurgical care, focused                  |
|  on the brain, spine and nervous system.      |
|                                              |
|  [Book an Appointment] [Explore Services]     |
|                                              |
|                         [Large medical image] |
|                                              |
------------------------------------------------
```
Use a high-quality neurological/neurosurgical visual.
Possible visual direction:
Brain imaging
Neurosurgical environment
Specialist doctor
MRI/neuro-imaging
Brain/spine medical photography
Do not use generic smiling hospital staff imagery as the primary hero visual.
Hero animation
On page load:
Eyebrow fades upward
Heading reveals line-by-line
Description fades upward
CTA buttons stagger
Image reveals through clip-path
Small decorative medical/technical elements move subtly
Keep it professional.
---
8. Home — Specialities Section
This is one of the most important sections.
Title:
```txt
Specialised Care.
Focused Expertise.
```
Subtitle explaining that the centre focuses specifically on neurological and neurosurgical care.
Create 5 speciality cards:
1. Neurosurgery
Brain and spine surgical care.
2. Neurology
Diagnosis and management of neurological conditions.
3. Neuro-radiology
Specialised neurological imaging and image interpretation.
4. Neuro-rehabilitation
Recovery-focused rehabilitation for neurological and neurosurgical patients.
5. Neuro-ICU / Anaesthesia
Critical care and anaesthetic support for complex neurological and neurosurgical cases.
Each card:
```txt
Icon / visual
Number
Speciality
Short description
Explore →
```
Use blue/green accents.
Animation
On scroll:
```txt
heading → reveal
cards → stagger from y: 50
card hover → tiny y movement + border/accent transition
```
---
9. Home — Why Esho
Create a premium split section.
Left:
```txt
Why Esho Brain & Spine?
```
Right:
3–4 strong points.
Suggested content based on the existing site:
```txt
Specialist Expertise
Modern Facilities
Critical Care Capability
Experienced Medical Team
```
The existing site specifically highlights modern facilities, experienced doctors/staff and ambulance services.
Use a large image alongside the content.
Scroll effect
Image:
```txt
scale 1.08 → 1
```
Text:
```txt
opacity 0 → 1
x: -40 → 0
```
---
10. Home — Conditions We Treat
The existing website highlights neurological and neurosurgical conditions including:
```txt
Head Injury
Spinal Injury
Brain Tumours
Spondylosis / Back Pain
Brain & Spinal Infections
Stroke
Seizures / Epilepsy
Headache
```
Present them as a clean grid rather than a plain list.
Example:
```txt
01  Head Injury
02  Spinal Injury
03  Brain Tumours
04  Spondylosis / Back Pain

05  Brain & Spinal Infections
06  Stroke
07  Seizures / Epilepsy
08  Headache
```
Interaction:
Number remains visible
Hover changes accent
Card shifts by 2–4px
Arrow appears
Do not make the hover effect excessive.
---
11. Home — Facilities / Critical Care
Create a high-trust section around the centre's specialist infrastructure.
The existing website describes a 3-bedded ICU with monitoring capabilities and an equipped operating theatre.
Possible content blocks:
```txt
Specialist ICU
Operating Theatre
Neuro-endoscopy
Advanced Monitoring
Critical Transport
```
Use a horizontal/vertical editorial layout.
This section should communicate capability without looking like an equipment catalogue.
---
12. Home — Appointment CTA
Create a strong blue section near the bottom.
Example:
```txt
Need specialist neurological or neurosurgical care?

Speak with our team.

[Make an Appointment]
```
Use green for the primary action accent.
Animation:
```txt
section background reveal
heading fade-up
button scale/fade
```
---
13. Home — Footer
Footer structure:
```txt
Logo
Short description

Quick Links
Home
About
Services
Contact

Specialities
Neurosurgery
Neurology
Neuro-radiology
Neuro-rehabilitation
Neuro-ICU / Anaesthesia

Contact
Address
Phone
Email

Emergency / Critical Care
```
Existing contact details include:
```txt
Beside Wemdel Mart,
Off Ilesa Garage Roundabout,
Osogbo, Nigeria

info@eshobrainandspine.com

+234-8073944444
```
Verify all contact details with the centre before launch.
---
14. ABOUT PAGE
The About page should feel more institutional and trustworthy.
Section 1 — About Hero
Heading:
```txt
Specialist care for the
brain, spine and nervous system.
```
Include a strong image.
Animation:
```txt
heading → line reveal
image → clip-path reveal
```
---
15. About — Who We Are
Explain:
What Esho Brain & Spine Centre is
Its specialist focus
Its location
Its commitment to neurological and neurosurgical care
Its emphasis on accessible specialist care
The current website states that inpatient services commenced in August 2016 and describes the organisation as focused on world-class and affordable neurosurgical services.
Keep the copy concise and modern rather than copying the old site's long paragraphs.
---
16. About — Medical Director
Create a dedicated profile section for the Medical Director / Consultant Neurosurgeon.
Layout:
```txt
[Professional portrait]

MEDICAL DIRECTOR
CONSULTANT NEUROSURGEON

Dr. Taopheeq Bamidele Rabiu

Short professional biography

[Read full profile]
```
The current site contains a detailed biography and multiple professional distinctions.
Do not put the entire biography into one huge paragraph.
Break it into:
```txt
Education
Specialist Training
Professional Experience
Research Interests
Awards & Distinctions
Leadership
```
Use expandable sections if the biography is very long.
---
17. About — Our Capabilities
Show specialist capabilities:
```txt
Neurosurgical care
Neurological care
Neuro-imaging
Neuro-rehabilitation
Critical care
Anaesthesia
```
Use large typography and subtle scroll animations.
---
18. About — Facility Story
Use an image-driven editorial section.
Structure:
```txt
IMAGE
+
Facility / Care story
```
Possible topics:
```txt
ICU
Operating theatre
Patient rooms
Specialist equipment
Critical transport
```
The goal is to demonstrate capability and trust.
---
19. SERVICES PAGE
This should be one of the most important pages.
Create a service overview hero:
```txt
Specialist Services

Focused neurological and neurosurgical
care across diagnosis, treatment,
surgery, rehabilitation and critical care.
```
---
20. Services — Five Speciality Sections
Create five major service sections.
Neurosurgery
Content areas:
```txt
Brain surgery
Spine surgery
Brain tumours
Head injury
Spinal injury
Hydrocephalus
Other specialist neurosurgical conditions
```
Only publish procedures/services that the centre confirms.
---
Neurology
Possible areas based on the existing website:
```txt
Stroke
Dementia
Brain infections
Seizures / Epilepsy
Headache
```
---
Neuro-radiology
Current site highlights:
```txt
Digital X-rays
CT
MRI
Imaging reports
Second opinions on imaging reports
```
Separate imaging/investigation services from specialist neuro-radiology where appropriate.
---
Neuro-rehabilitation
Create a recovery-focused section.
Possible structure:
```txt
Assessment
Recovery planning
Physiotherapy
Functional rehabilitation
Follow-up
```
Confirm exact services with the centre before launch.
---
Neuro-ICU / Anaesthesia
Create a serious critical-care section.
Possible themes:
```txt
Critical monitoring
Neuro-intensive care
Perioperative care
Anaesthesia
Emergency support
```
Do not make unsupported medical claims.
---
21. Services Page — Service Card Interaction
Each speciality can have a large editorial card.
Desktop:
```txt
-----------------------------------------------
| 01                         [IMAGE]           |
|                                              |
| NEUROSURGERY                                  |
|                                              |
| Specialist surgical care for the brain       |
| and spine.                                   |
|                                              |
| Explore service →                            |
-----------------------------------------------
```
On hover:
```txt
image scale: 1 → 1.04
arrow: x 0 → 6
border/accent changes
```
On scroll:
```txt
cards reveal sequentially
```
---
22. CONTACT PAGE
The Contact page should focus on conversion and accessibility.
Hero
```txt
Let's talk about your care.

Reach our team for appointments,
specialist consultations and enquiries.
```
---
23. Contact — Contact Information
Create three/four blocks:
```txt
Address
Phone
Email
Emergency / Critical Care
```
Use icons but keep them secondary.
---
24. Contact — Appointment Form
Form:
```txt
Full Name
Email
Phone
Preferred Date
Service / Speciality
Message

[Request Appointment]
```
Validation:
Required fields
Email validation
Phone validation
Accessible labels
Clear success state
Clear error state
Do not collect unnecessary medical information through a basic public contact form.
---
25. Contact — Map
Include an embedded map for the verified location.
Use:
```txt
Beside Wemdel Mart,
Off Ilesa Garage Roundabout,
Osogbo, Nigeria
```
Verify the exact map pin before production.
Add:
```txt
Get Directions
```
if the final implementation supports it.
---
26. Contact — Emergency Notice
Because the existing website states that the centre is open for emergencies and critical care, create a clear emergency/critical-care notice.
Example:
```txt
Emergency or critical neurological care?

Contact the centre directly.

[Call Now]
```
Verify the exact emergency workflow and number with the hospital before launch.
---
27. Page Transitions
Do not build a complicated SPA-like transition.
Use a subtle transition:
```txt
current page fades/slides
new page enters
```
Duration:
```txt
0.4–0.6s
```
The user should never feel delayed by animation.
---
28. Scroll Animations By Page
Home
```txt
Hero
→ intro reveal

Specialities
→ stagger cards

Why Esho
→ image parallax + text reveal

Conditions
→ grid stagger

Facilities
→ image reveal

CTA
→ fade/slide
```
About
```txt
Hero
→ title reveal

Who We Are
→ split reveal

Medical Director
→ portrait + biography stagger

Capabilities
→ text reveal

Facilities
→ image clip-path
```
Services
```txt
Hero
→ title reveal

Service sections
→ alternating image/text reveal

Service cards
→ stagger

CTA
→ fade-up
```
Contact
```txt
Hero
→ title reveal

Contact details
→ stagger

Form
→ fade-up

Map
→ reveal
```
---
29. GSAP Implementation Pattern
Create a reusable animation utility.
Example:
```ts
// lib/animations.ts

export const fadeUp = {
  opacity: 0,
  y: 40,
};

export const reveal = {
  opacity: 1,
  y: 0,
};
```
For React components, use GSAP in client components.
Typical pattern:
```tsx
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Section() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".reveal", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      ...
    </section>
  );
}
```
Keep animation logic local to the relevant component.
---
30. Component List
Build these reusable components first.
Layout
```txt
Navbar
Footer
MobileMenu
PageContainer
SectionHeading
```
UI
```txt
Button
IconButton
Badge
Reveal
ImageReveal
SectionDivider
```
Home
```txt
Hero
SpecialityGrid
SpecialityCard
WhyEsho
ConditionsGrid
FacilitySection
AppointmentCTA
```
About
```txt
AboutHero
AboutIntro
DirectorProfile
CapabilityGrid
FacilityStory
```
Services
```txt
ServicesHero
ServiceSection
ServiceCard
ServiceList
```
Contact
```txt
ContactHero
ContactDetails
AppointmentForm
MapSection
EmergencyCTA
```
---
31. Data Architecture
Do not hardcode repeated service information inside JSX.
Create:
```ts
// data/services.ts

export const specialities = [
  {
    title: "Neurosurgery",
    description: "...",
    icon: "...",
  },
  {
    title: "Neurology",
    description: "...",
    icon: "...",
  },
  {
    title: "Neuro-radiology",
    description: "...",
    icon: "...",
  },
  {
    title: "Neuro-rehabilitation",
    description: "...",
    icon: "...",
  },
  {
    title: "Neuro-ICU / Anaesthesia",
    description: "...",
    icon: "...",
  },
];
```
This makes future editing much easier.
---
32. Responsive Design
Desktop
Use:
```txt
1440px+
1280px content width
large imagery
2-column layouts
```
Tablet
Use:
```txt
2-column grids where appropriate
reduced heading sizes
```
Mobile
Everything should become:
```txt
single column
large readable typography
full-width CTA
comfortable touch targets
```
Important mobile requirements:
Sticky navbar
No horizontal overflow
Buttons easy to tap
Form fields full width
Images responsive
Cards do not become excessively tall
Animations remain lightweight
---
33. Accessibility
Implement:
```txt
semantic HTML
proper heading hierarchy
alt text
keyboard navigation
visible focus states
accessible forms
ARIA labels where needed
sufficient colour contrast
reduced-motion support
```
Do not use colour alone to communicate an error or success state.
---
34. SEO
Each page should have unique metadata.
Home
```txt
Title:
Esho Brain & Spine Centre | Specialist Neurological & Neurosurgical Care

Description:
Specialist neurological, neurosurgical, neuro-radiology,
neuro-rehabilitation and neuro-critical care in Osogbo, Nigeria.
```
About
```txt
Esho Brain & Spine Centre | About Us
```
Services
```txt
Esho Brain & Spine Centre | Specialist Services
```
Contact
```txt
Esho Brain & Spine Centre | Contact & Appointments
```
Use structured metadata where appropriate, especially healthcare/local-business information, after verifying the organisation's exact details.
---
35. Image Strategy
Prioritise authentic imagery from the centre.
Ideal image categories:
```txt
Medical team
Neurosurgeon
Operating theatre
ICU
MRI / CT imaging
Rehabilitation
Facility exterior/interior
Patient care
```
Avoid overusing generic stock images.
If stock imagery is temporarily used, replace important hero/facility images with authentic photography before launch.
Every image should have:
```txt
next/image
appropriate dimensions
lazy loading where appropriate
descriptive alt text
```
---
36. Icons
Use Lucide React.
Recommended icon concepts:
```txt
Brain
Activity
Scan
HeartPulse
Stethoscope
Syringe
Ambulance
Hospital
ShieldCheck
ArrowUpRight
Phone
Mail
MapPin
Clock
```
Do not use an icon simply because there is an empty space.
---
37. Performance
Target:
```txt
fast first load
optimized images
minimal JavaScript
lazy-loaded below-fold imagery
no unnecessary animation libraries
no massive video backgrounds
```
GSAP should be used intentionally rather than animating every DOM node.
---
38. Suggested Build Order
Follow this exact sequence.
Phase 1 — Setup
Create Next.js project.
Configure TypeScript.
Configure Tailwind.
Add GSAP.
Add `@gsap/react`.
Add Lucide React.
Configure fonts.
Set global colours.
Create global layout.
Add responsive container utilities.
Phase 2 — Global Components
Build Navbar.
Build mobile menu.
Build Footer.
Build Button.
Build SectionHeading.
Build Reveal.
Build ImageReveal.
Phase 3 — Home
Build Hero.
Add hero animation.
Build speciality section.
Build Why Esho.
Build conditions grid.
Build facilities/critical-care section.
Build appointment CTA.
Build footer.
Test mobile.
Phase 4 — About
Build About Hero.
Build Who We Are.
Build Medical Director section.
Build capabilities.
Build facility story.
Add ScrollTrigger animations.
Test responsive behaviour.
Phase 5 — Services
Build Services Hero.
Build speciality sections.
Build service cards.
Add service data.
Add service animations.
Add CTA.
Phase 6 — Contact
Build Contact Hero.
Build contact information.
Build appointment form.
Add validation.
Build map.
Build emergency CTA.
Phase 7 — Polish
Add page metadata.
Add favicon.
Add Open Graph image.
Optimise images.
Add accessibility improvements.
Add reduced-motion support.
Test all navigation.
Test mobile menu.
Test all forms.
Test keyboard navigation.
Test different screen sizes.
Run production build.
Fix all console errors.
Run Lighthouse.
Deploy.
---
39. Final Visual Direction
The finished website should feel closer to:
```txt
SPECIALIST MEDICAL CENTRE
        +
MEDICAL TECHNOLOGY
        +
PREMIUM EDITORIAL DESIGN
        +
HUMAN TRUST
```
It should NOT feel like:
```txt
generic hospital template
```
The visual hierarchy should always reinforce:
```txt
BRAIN
SPINE
NEUROLOGY
SURGERY
SPECIALIST EXPERTISE
CRITICAL CARE
TRUST
```
The strongest visual language should be:
```txt
White space
Deep blue typography
Green action accents
High-quality medical imagery
Large editorial headings
Thin borders
Precise spacing
Subtle GSAP motion
```
---
40. Important Content Rule
The existing site contains detailed medical information, professional biographies and service descriptions.
During the redesign:
Do not invent medical services, procedures, qualifications, emergency policies, clinical outcomes or claims.
Where new copy is needed, use concise editorial copy and have the Esho team verify all medical claims before launch.
The redesign should improve the presentation and user experience while keeping the site's factual medical information accurate.
---
41. Reference Audit of Existing Website
The current website navigation includes:
```txt
Home
Blog
About
Services
Contact
```
The requested redesign scope is:
```txt
Home
About
Services
Contact
```
The existing site currently presents Esho as a super-specialty hospital focused on neurological/neurosurgical care and lists the five core areas:
```txt
Neurosurgery
Neurology
Neuro-radiology
Neuro-rehabilitation
Neuro-ICU / Anaesthesia
```
The current Services page also lists specialist consultation, investigations such as digital X-rays/CT/MRI, neurosurgery, neuro-radiology, neurology and additional services such as physiotherapy, home visits and telemedicine.
Use these existing facts as the content foundation, but verify current offerings with the centre before publishing the redesigned site.
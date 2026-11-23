/**
 * CUNY SPS Club Social Hub - Student Discovery Dataset
 * Preloaded catalog of all 34 recognized student clubs, verified & demo channels, and events.
 */

export interface ClubChannel {
  platform: 'whatsapp' | 'tiktok' | 'facebook' | 'instagram' | 'linkedin' | 'website';
  actionLabel: string;
  url: string;
  badge: 'Verified Official Link' | 'Sample Demo Link';
  description?: string;
  isPrivate?: boolean;
}

export interface ClubDiscoveryItem {
  clubId: string;
  name: string;
  shortCode: string;
  description: string;
  category: string;
  facultyAdvisor: string;
  meetingSchedule: string;
  contactEmail: string;
  whoItWelcomes: string;
  accentColor: string;
  isFeatured: boolean;
  channels: ClubChannel[];
  logoUrl?: string;
  logoSource?: string;
}

export interface DiscoveryEvent {
  eventId: string;
  clubId: string;
  clubName: string;
  title: string;
  description: string;
  date: string;
  time: string;
  format: string;
  location: string;
  rsvps: number;
}

export const CLUBS_DATA: ClubDiscoveryItem[] = [
  {
    "clubId": "club-anime",
    "name": "Anime Club",
    "shortCode": "ANIME",
    "description": "A welcoming, inclusive community where CUNY SPS students connect over anime, manga, watch parties, and creative fandom discussions.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Kenji Takahashi",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "anime@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Anime Club activities and professional community.",
    "accentColor": "#DB2777",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-ai",
    "name": "Artificial Intelligence Club",
    "shortCode": "AI-CLUB",
    "description": "Student-led organization dedicated to helping CUNY SPS students of all backgrounds explore artificial intelligence, hands-on technical projects, and ethical innovation.",
    "category": "Academic & Technology",
    "facultyAdvisor": "Prof. Jordan Reyes",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "ai-club@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all undergraduate, graduate, online, and hybrid students interested in artificial intelligence, machine learning, data ethics, coding, or civic technology\u2014from absolute beginners to experienced engineers.",
    "accentColor": "#004B87",
    "isFeatured": true,
    "channels": [
      {
        "platform": "whatsapp",
        "actionLabel": "Join WhatsApp",
        "url": "https://chat.whatsapp.com/LiEAv8DRlII7pMqN60PGj6",
        "badge": "Verified Official Link",
        "description": "Active student community chat for build night alerts, Zoom links, and peer project collaborations."
      },
      {
        "platform": "facebook",
        "actionLabel": "Visit Facebook",
        "url": "https://www.facebook.com/cunysps/",
        "badge": "Verified Official Link",
        "description": "Official CUNY SPS Facebook page for school-wide updates, events, and club highlights."
      },
      {
        "platform": "instagram",
        "actionLabel": "Follow on Instagram",
        "url": "https://www.instagram.com/cuny_sps_ai_club/",
        "badge": "Verified Official Link",
        "description": "Official AI Club Instagram for workshop announcements, hackathon recaps, and AI project spotlights."
      },
      {
        "platform": "linkedin",
        "actionLabel": "Connect on LinkedIn",
        "url": "https://www.linkedin.com/school/cuny-school-of-professional-studies/",
        "badge": "Verified Official Link",
        "description": "CUNY SPS professional network, alumni connections, and institutional updates."
      },
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/ai-club/",
        "badge": "Verified Official Link",
        "description": "Official CUNY SPS OpenLab workspace for workshops, hackathons, and discussion forums."
      }
    ],
    "logoUrl": "./club-logos/ai-club.jpg",
    "logoSource": "Official CUNY SPS OpenLab AI Club avatar & team repository asset"
  },
  {
    "clubId": "club-arts-crafts",
    "name": "Arts and Crafts Club",
    "shortCode": "CRAFTS",
    "description": "Creative community for DIY workshops, sketching, fiber arts, digital illustration, and stress-relief craft socials.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Claire Bennett",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "crafts@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Arts and Crafts Club activities and professional community.",
    "accentColor": "#F59E0B",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-bsu",
    "name": "Black Student Union",
    "shortCode": "BSU",
    "description": "Empowering Black and African diaspora students at CUNY SPS through leadership development, cultural celebration, mentorship, and advocacy.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Dr. Monique Carter",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "bsu@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes Black students and allies across all degree programs to celebrate Black culture, foster leadership, and build supportive academic and social networks.",
    "accentColor": "#D97706",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-book",
    "name": "Book Club",
    "shortCode": "BOOK",
    "description": "Monthly virtual and hybrid reading discussions spanning contemporary fiction, memoirs, social sciences, and student recommendations.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Miriam Weiss",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "book@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Book Club activities and professional community.",
    "accentColor": "#059669",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/groups/sps-book-club/",
        "badge": "Verified Official Link",
        "description": "SPS Book Club reading lists and monthly book discussions."
      }
    ],
    "logoUrl": "./club-logos/book-club.jpg",
    "logoSource": "Official CUNY SPS OpenLab SPS Book Club group avatar"
  },
  {
    "clubId": "club-christian-fellowship",
    "name": "Christian Fellowship Club",
    "shortCode": "CFC",
    "description": "Fellowship, spiritual reflection, community service, and supportive dialogue welcoming CUNY SPS students of all backgrounds.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Prof. Grace Okafor",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "cfc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Christian Fellowship Club activities and professional community.",
    "accentColor": "#2563EB",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-cosplay",
    "name": "Cosplay Club",
    "shortCode": "COSPLAY",
    "description": "Design, prop fabrication, character costume craftsmanship, and convention community meetups for CUNY SPS creators.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Kenji Takahashi",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "cosplay@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Cosplay Club activities and professional community.",
    "accentColor": "#8B5CF6",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-creative-writing",
    "name": "Creative Writing Club",
    "shortCode": "CWC",
    "description": "Peer critique circles, poetry slams, short-story prompts, and literary publishing workshops for aspiring writers.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Daniel Alvarez",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "cwc@spsmail.cuny.edu",
    "whoItWelcomes": "Open to poets, novelists, essayists, playwrights, and casual writers eager to share drafts, receive peer feedback, and attend open mics.",
    "accentColor": "#BE185D",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/creative-writing-club/",
        "badge": "Verified Official Link",
        "description": "Literary Arts & Publishing Society publications and writer workshops."
      }
    ],
    "logoUrl": "./club-logos/creative-writing.png",
    "logoSource": "Official CUNY SPS OpenLab Literary Arts & Publishing Society group avatar"
  },
  {
    "clubId": "club-delta-alpha-pi",
    "name": "Delta Alpha Pi Honor Society",
    "shortCode": "DAPi",
    "description": "International honor society recognizing high-achieving college students with disabilities while advancing leadership and campus accessibility.",
    "category": "Honor Societies",
    "facultyAdvisor": "Dr. Rachel Goldman",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "dapi@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Delta Alpha Pi Honor Society activities and professional community.",
    "accentColor": "#B45309",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit Official Honor Society",
        "url": "https://deltaalphapihonorsociety.org",
        "badge": "Verified Official Link",
        "description": "Delta Alpha Pi International Honor Society official web resource."
      }
    ],
    "logoUrl": "./club-logos/delta-alpha-pi.jpg",
    "logoSource": "Delta Alpha Pi International Honor Society official insignia"
  },
  {
    "clubId": "club-disability-access",
    "name": "Disability and Access Coalition",
    "shortCode": "DAC",
    "description": "Student advocacy group championing universal design, assistive technology awareness, and inclusive student experiences at CUNY SPS.",
    "category": "Advocacy & Community",
    "facultyAdvisor": "Dr. Rachel Goldman",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "dac@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Disability and Access Coalition activities and professional community.",
    "accentColor": "#0284C7",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/disability-access-coalition/",
        "badge": "Verified Official Link",
        "description": "Disability advocacy and accessibility resources on OpenLab."
      }
    ],
    "logoUrl": "./club-logos/disability-access.jpg",
    "logoSource": "Official CUNY SPS OpenLab Disability & Access Coalition group avatar"
  },
  {
    "clubId": "club-film-tv",
    "name": "Film & Television Club",
    "shortCode": "FILM",
    "description": "Screenings, cinematography breakdowns, screenwriting discussions, and media criticism for cinema and television enthusiasts.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Marcus Vance",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "film@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes cinephiles, screenwriters, video creators, media studies majors, and anyone who loves discussing film, streaming, and television.",
    "accentColor": "#EA580C",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-green",
    "name": "Green Club",
    "shortCode": "GREEN",
    "description": "Environmental sustainability, climate literacy, urban ecology initiatives, and NYC green-space volunteer events.",
    "category": "Advocacy & Community",
    "facultyAdvisor": "Dr. Naomi Park",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "green@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes sustainability advocates, climate thinkers, urban agriculture enthusiasts, and students committed to environmental stewardship.",
    "accentColor": "#16A34A",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-hian",
    "name": "Health Information and Administration Network (HIAN) Leadership",
    "shortCode": "HIAN",
    "description": "Professional network connecting Health Information Management and Health Services Administration students with healthcare leaders.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Dr. Priya Nair",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "hian@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Health Information and Administration Network (HIAN) Leadership activities and professional community.",
    "accentColor": "#0D9488",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/groups/healthcare/",
        "badge": "Verified Official Link",
        "description": "Healthcare administration student community on OpenLab."
      }
    ],
    "logoUrl": "./club-logos/hian.jpg",
    "logoSource": "Official CUNY SPS OpenLab Healthcare community group avatar"
  },
  {
    "clubId": "club-human-relations-soc",
    "name": "Human Relations and Sociology Club",
    "shortCode": "HRSC",
    "description": "Exploring organizational dynamics, social research, workplace equity, and community sociology through panels and peer exchange.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Dr. Elena Morales",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "hrsc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Human Relations and Sociology Club activities and professional community.",
    "accentColor": "#D97706",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-latinx",
    "name": "Latinx Student Union",
    "shortCode": "LSU",
    "description": "Celebrating Latinx heritage, academic persistence, cultural programming, and community solidarity across CUNY SPS.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Prof. Sofia Mendoza",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "lsu@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Latinx Student Union activities and professional community.",
    "accentColor": "#E11D48",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-makeup-beauty",
    "name": "Makeup and Beauty Club",
    "shortCode": "MBC",
    "description": "Creative expression, skincare education, artistry tutorials, and inclusive beauty industry conversations.",
    "category": "Social & Special Interest",
    "facultyAdvisor": "Prof. Claire Bennett",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "mbc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Makeup and Beauty Club activities and professional community.",
    "accentColor": "#EC4899",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-melo",
    "name": "Management and Entrepreneur Leadership Organization (MELO)",
    "shortCode": "MELO",
    "description": "Business strategy, startup pitch nights, executive leadership workshops, and alumni mentorship for management students.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Prof. Samuel Ortiz",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "melo@spsmail.cuny.edu",
    "whoItWelcomes": "Open to students interested in leadership development, business administration, entrepreneurship, project management, and startup innovation.",
    "accentColor": "#2563EB",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/spsmelo/",
        "badge": "Verified Official Link",
        "description": "MELO community hub on CUNY SPS OpenLab."
      }
    ],
    "logoUrl": "./club-logos/melo.png",
    "logoSource": "Official CUNY SPS OpenLab MELO group avatar"
  },
  {
    "clubId": "club-mental-health",
    "name": "Mental Health Club",
    "shortCode": "MHC",
    "description": "Destigmatizing mental wellness, mindfulness workshops, and peer support programming tailored for online and adult learners.",
    "category": "Wellness & Peer Support",
    "facultyAdvisor": "Dr. Hannah Morales",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "mhc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Mental Health Club activities and professional community.",
    "accentColor": "#10B981",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-museum-studies",
    "name": "Museum Studies Club",
    "shortCode": "MSC",
    "description": "Curatorial dialogue, museum accessibility, archival preservation, and cultural institution tours across New York City.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Dr. Arthur Pendelton",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "msc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Museum Studies Club activities and professional community.",
    "accentColor": "#78716C",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-msa",
    "name": "Muslim Student Association (MSA)",
    "shortCode": "MSA",
    "description": "CUNY SPS Muslim Student Association fostering spiritual fellowship, cultural dialogue, community service, and inclusive campus events for Muslim students and allies.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Prof. Tariq Siddiqui",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "msa@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes Muslim students, spiritual seekers, and allies of all academic disciplines across CUNY SPS for fellowship, mutual aid, cultural discussion, and community service.",
    "accentColor": "#0D9488",
    "isFeatured": true,
    "channels": [
      {
        "platform": "whatsapp",
        "actionLabel": "Join WhatsApp",
        "url": "https://chat.whatsapp.com/F8DqIiNLEv27IY9vXE09UZ",
        "badge": "Verified Official Link",
        "description": "Official CUNY SPS MSA student community WhatsApp group."
      },
      {
        "platform": "website",
        "actionLabel": "Visit MSA Website",
        "url": "https://cuny-msa-hub.pages.dev/",
        "badge": "Verified Official Link",
        "description": "CUNY SPS Muslim Student Association Centralized Community Hub."
      }
    ],
    "logoUrl": "./club-logos/msa-club.png",
    "logoSource": "Official CUNY SPS MSA Crescent Badge team repository asset"
  },
  {
    "clubId": "club-neurodiversity",
    "name": "Neurodiversity Club",
    "shortCode": "NEURO",
    "description": "Peer community celebrating neurodivergent learners through sensory-friendly study spaces, executive-function tools, and advocacy.",
    "category": "Wellness & Peer Support",
    "facultyAdvisor": "Dr. Rachel Goldman",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "neuro@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Neurodiversity Club activities and professional community.",
    "accentColor": "#6366F1",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-parent",
    "name": "Parent Club",
    "shortCode": "PARENT",
    "description": "Supporting parenting students and family caregivers at CUNY SPS with peer resource sharing, family-friendly meetups, and advocacy.",
    "category": "Advocacy & Community",
    "facultyAdvisor": "Prof. Carla Rivera",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "parent@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Parent Club activities and professional community.",
    "accentColor": "#F97316",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-photography",
    "name": "Photography Club",
    "shortCode": "PHOTO",
    "description": "Visual storytelling, photo walks across NYC, lighting critiques, and digital editing workshops for all experience levels.",
    "category": "Arts, Media & Creative",
    "facultyAdvisor": "Prof. Marcus Vance",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "photo@spsmail.cuny.edu",
    "whoItWelcomes": "Open to photographers of all skill levels\u2014from smartphone snappers to DSLR enthusiasts\u2014interested in visual storytelling and photo walks.",
    "accentColor": "#9333EA",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/photography-club/",
        "badge": "Verified Official Link",
        "description": "Photography Club official showcase and virtual critique meetups."
      }
    ],
    "logoUrl": "./club-logos/photography-club.jpg",
    "logoSource": "Official CUNY SPS OpenLab Photography Club group avatar"
  },
  {
    "clubId": "club-pride",
    "name": "Pride Club",
    "shortCode": "PRIDE",
    "description": "LGBTQIA+ student community promoting belonging, campus education, intersectional solidarity, and celebratory pride programming.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Prof. Jordan Reyes",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "pride@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Pride Club activities and professional community.",
    "accentColor": "#A855F7",
    "isFeatured": false,
    "channels": [
      {
        "platform": "instagram",
        "actionLabel": "Follow on Instagram",
        "url": "https://www.instagram.com/sps_prideclub/",
        "badge": "Verified Official Link",
        "description": "Official CUNY SPS Pride Club Instagram for community events, discussions, and LGBTQIA+ advocacy."
      },
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/pride-club/",
        "badge": "Verified Official Link",
        "description": "Pride Club community space for events and LGBTQIA+ advocacy."
      }
    ],
    "logoUrl": "./club-logos/pride-club.jpg",
    "logoSource": "Official CUNY SPS OpenLab Pride Club group avatar"
  },
  {
    "clubId": "club-psychology",
    "name": "Psychology Club",
    "shortCode": "PSYCH",
    "description": "Academic colloquia, graduate school preparation, behavioral research spotlights, and community mental health initiatives.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Dr. Hannah Morales",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "psych@spsmail.cuny.edu",
    "whoItWelcomes": "Open to BA in Psychology students, graduate researchers, and anyone curious about human behavior, mental wellness, and research methodology.",
    "accentColor": "#4F46E5",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit OpenLab Hub",
        "url": "https://openlab.sps.cuny.edu/groups/psychology-club/",
        "badge": "Verified Official Link",
        "description": "Psychology Club discussion boards and academic networking."
      }
    ],
    "logoUrl": "./club-logos/psychology-club.png",
    "logoSource": "Official CUNY SPS OpenLab Psychology Club group avatar"
  },
  {
    "clubId": "club-retail-therapy",
    "name": "Retail Therapy Roundtable Club",
    "shortCode": "RTRC",
    "description": "Exploring consumer trends, merchandising, e-commerce strategy, and personal style in relaxed roundtable conversations.",
    "category": "Social & Special Interest",
    "facultyAdvisor": "Prof. Samuel Ortiz",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "rtrc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Retail Therapy Roundtable Club activities and professional community.",
    "accentColor": "#F43F5E",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-shrm",
    "name": "SHRM Student Chapter",
    "shortCode": "SHRM",
    "description": "Society for Human Resource Management student chapter offering HR certification prep, talent strategy panels, and career networking.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Dr. Elena Morales",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "shrm@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in SHRM Student Chapter activities and professional community.",
    "accentColor": "#1D4ED8",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-sigma-beta-delta",
    "name": "Sigma Beta Delta Honor Society",
    "shortCode": "SBD",
    "description": "International honor society recognizing academic excellence among undergraduate and graduate business, management, and administration students.",
    "category": "Honor Societies",
    "facultyAdvisor": "Prof. Samuel Ortiz",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "sbd@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Sigma Beta Delta Honor Society activities and professional community.",
    "accentColor": "#CA8A04",
    "isFeatured": false,
    "channels": [
      {
        "platform": "website",
        "actionLabel": "Visit Official Honor Society",
        "url": "https://sigmabetadelta.org",
        "badge": "Verified Official Link",
        "description": "Sigma Beta Delta International Honor Society official portal."
      }
    ],
    "logoUrl": "./club-logos/sigma-beta-delta.webp",
    "logoSource": "Sigma Beta Delta International Honor Society official key emblem"
  },
  {
    "clubId": "club-social-impact",
    "name": "Social Impact & Activism Club",
    "shortCode": "SIAC",
    "description": "Driving civic awareness, housing and disability justice dialogue, environmental advocacy, and changemaker workshops across CUNY.",
    "category": "Advocacy & Community",
    "facultyAdvisor": "Dr. Naomi Park",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "siac@spsmail.cuny.edu",
    "whoItWelcomes": "Open to changemakers, student advocates, and community organizers passionate about housing justice, environmental action, disability rights, and civic advocacy.",
    "accentColor": "#DC2626",
    "isFeatured": true,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-sasu",
    "name": "South Asian Student Union",
    "shortCode": "SASU",
    "description": "Building community among South Asian students and allies through cultural showcases, chai chats, and peer mentorship.",
    "category": "Identity, Faith & Cultural",
    "facultyAdvisor": "Dr. Priya Nair",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "sasu@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in South Asian Student Union activities and professional community.",
    "accentColor": "#EA580C",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-svo",
    "name": "Student Veterans Organization",
    "shortCode": "SVO",
    "description": "Peer support, academic transition resources, career advocacy, and camaraderie for military-connected and veteran CUNY SPS students.",
    "category": "Advocacy & Community",
    "facultyAdvisor": "Prof. Samuel Ortiz",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "svo@spsmail.cuny.edu",
    "whoItWelcomes": "Dedicated to student veterans, active duty service members, reservists, military spouses, and civilian allies navigating academic and civilian transitions.",
    "accentColor": "#4B5563",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-study-lounge",
    "name": "Study Lounge Club",
    "shortCode": "LOUNGE",
    "description": "Co-working Pomodoro sessions, finals accountability circles, and cross-major peer study meetups for online students.",
    "category": "Social & Special Interest",
    "facultyAdvisor": "Prof. Miriam Weiss",
    "meetingSchedule": "Bi-Weekly Online Gatherings",
    "contactEmail": "lounge@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Study Lounge Club activities and professional community.",
    "accentColor": "#64748B",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-women-stem",
    "name": "Women in STEM Club",
    "shortCode": "WSTEM",
    "description": "Advancing women and non-binary scholars in computing, data, health informatics, and quantitative sciences via mentorship and build nights.",
    "category": "Academic & Technology",
    "facultyAdvisor": "Dr. Priya Nair",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "wstem@spsmail.cuny.edu",
    "whoItWelcomes": "Open to all women, non-binary students, and allies pursuing or interested in science, technology, engineering, mathematics, data analytics, and tech career pathways.",
    "accentColor": "#7C3AED",
    "isFeatured": true,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  },
  {
    "clubId": "club-youth-studies",
    "name": "Youth Studies Club",
    "shortCode": "YSC",
    "description": "Connecting Youth Studies and Education scholars around youth advocacy, community programming, and research colloquia.",
    "category": "Academic & Professional",
    "facultyAdvisor": "Prof. Carla Rivera",
    "meetingSchedule": "Virtual Monthly Meetings via Zoom",
    "contactEmail": "ysc@spsmail.cuny.edu",
    "whoItWelcomes": "Welcomes all CUNY SPS undergraduate and graduate students, alumni, and community members interested in Youth Studies Club activities and professional community.",
    "accentColor": "#0284C7",
    "isFeatured": false,
    "channels": [],
    "logoSource": "Initials fallback displayed; awaiting official club logo submission"
  }
];

export const EVENTS_DATA: DiscoveryEvent[] = [
  {
    "eventId": "evt-1",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "Fall AI & Civic Tech Build Night",
    "description": "Collaborative prototyping session for student civic tech apps (co-hosted with Women in STEM Club).",
    "date": "2026-11-19",
    "time": "18:30",
    "format": "Virtual",
    "location": "Hybrid \u00b7 119 W 31st St Room 402 + Zoom",
    "rsvps": 24
  },
  {
    "eventId": "evt-2",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "November General Body Meeting",
    "description": "Pilot feedback review and spring semester officer planning.",
    "date": "2026-11-24",
    "time": "19:00",
    "format": "Virtual",
    "location": "Zoom",
    "rsvps": 24
  },
  {
    "eventId": "evt-3",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "Finals Week Study Jam",
    "description": "Peer study and project showcase prep.",
    "date": "2026-12-08",
    "time": "18:00",
    "format": "Virtual",
    "location": "Virtual Study Lounge",
    "rsvps": 24
  },
  {
    "eventId": "evt-4",
    "clubId": "club-msa",
    "clubName": "Muslim Student Association (MSA)",
    "title": "Muslim Student Association (MSA) Community Tea & Study Circle",
    "description": "Warm tea, community fellowship, and quiet study space open to all CUNY SPS students.",
    "date": "2026-11-18",
    "time": "17:30",
    "format": "Virtual",
    "location": "Hybrid \u00b7 119 W 31st St Student Lounge + Zoom",
    "rsvps": 24
  },
  {
    "eventId": "evt-5",
    "clubId": "club-social-impact",
    "clubName": "Social Impact & Activism Club",
    "title": "Civic Advocacy & Campus Housing Roundtable",
    "description": "Student-led discussion on disability access, civic engagement, and CUNY advocacy resources.",
    "date": "2026-11-21",
    "time": "17:00",
    "format": "Virtual",
    "location": "Zoom",
    "rsvps": 24
  },
  {
    "eventId": "evt-6",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "AI Club Pre-Submission Office Hours",
    "description": "Open Q&A for project teams ahead of weekly club build demos.",
    "date": "2026-11-16",
    "time": "22:00",
    "format": "Virtual",
    "location": "Zoom / CUNY SPS Virtual Commons",
    "rsvps": 24
  },
  {
    "eventId": "evt-7",
    "clubId": "club-women-stem",
    "clubName": "Women in STEM Club",
    "title": "Women in Tech & Research Career Panel",
    "description": "Alumni and faculty researchers share pathways into data science, engineering, and graduate fellowships.",
    "date": "2026-11-23",
    "time": "18:00",
    "format": "Virtual",
    "location": "Zoom / CUNY SPS Virtual Commons",
    "rsvps": 24
  },
  {
    "eventId": "evt-8",
    "clubId": "club-psychology",
    "clubName": "Psychology Club",
    "title": "Applied Psychology & Workplace Well-Being Workshop",
    "description": "Interactive seminar exploring organizational psychology practices, stress resilience, and peer support.",
    "date": "2026-11-26",
    "time": "17:30",
    "format": "Virtual",
    "location": "Hybrid \u00b7 119 W 31st St Room 305 + Zoom",
    "rsvps": 24
  },
  {
    "eventId": "evt-9",
    "clubId": "club-bsu",
    "clubName": "Black Student Union",
    "title": "BSU Cultural Heritage & Leadership Mixer",
    "description": "Community networking evening celebrating student leaders, mentorship circles, and spring event planning.",
    "date": "2026-12-02",
    "time": "18:30",
    "format": "Virtual",
    "location": "119 W 31st St Student Lounge",
    "rsvps": 24
  },
  {
    "eventId": "evt-10",
    "clubId": "club-creative-writing",
    "clubName": "Creative Writing Club",
    "title": "Winter Zine & Open Mic Showcase",
    "description": "Open mic poetry, short fiction readings, and editorial submissions preview for the winter literary issue.",
    "date": "2026-12-05",
    "time": "19:00",
    "format": "Virtual",
    "location": "Zoom / Live Literary Salon",
    "rsvps": 24
  }
];

export const ALL_CATEGORIES = [
  'All',
  'Academic & Technology',
  'Academic & Professional',
  'Advocacy & Community',
  'Arts, Media & Creative',
  'Identity, Faith & Cultural',
  'Wellness & Peer Support',
  'Honor Societies',
  'Social & Special Interest'
] as const;

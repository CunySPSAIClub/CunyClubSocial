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
    "facultyAdvisor": "CUNY SPS Information Science Program & Office of Student Life",
    "meetingSchedule": "Hybrid · Campus Room 413 (119 W 31st St) & Virtual via Zoom (7:00 PM)", 
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
        "platform": "instagram",
        "actionLabel": "Follow on Instagram",
        "url": "https://www.instagram.com/cuny_sps_ai_club/",
        "badge": "Verified Official Link",
        "description": "Official AI Club Instagram for workshop announcements, hackathon recaps, and AI project spotlights."
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
    "eventId": "evt-ai-1",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "AI Club Technical Meeting: Autonomous ML Agents",
    "description": "Hands-on architectural walkthrough and demo on building agentic workflows and LLM tool execution.",
    "date": "2026-11-24",
    "time": "7:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 32
  },
  {
    "eventId": "evt-ai-2",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "Fall AI & Civic Tech Build Night",
    "description": "Collaborative prototyping session for student civic tech apps and open-source campus tools.",
    "date": "2026-12-03",
    "time": "6:30 PM",
    "format": "Hybrid",
    "location": "Hybrid \u00b7 119 W 31st St Room 402 + Zoom",
    "rsvps": 28
  },
  {
    "eventId": "evt-ai-3",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "Finals Week Study Jam & AI Demo Day",
    "description": "End-of-semester project showcase, peer code reviews, and finals study lounge.",
    "date": "2026-12-08",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Virtual Study Lounge via Zoom",
    "rsvps": 26
  },
  {
    "eventId": "evt-ai-4",
    "clubId": "club-ai",
    "clubName": "Artificial Intelligence Club",
    "title": "Spring Semester AI Hackathon & Workshop Kickoff",
    "description": "Semester launch meeting: hackathon tracks announcement, team formation, and guest speaker series.",
    "date": "2027-03-02",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 35
  },
  {
    "eventId": "evt-msa-1",
    "clubId": "club-msa",
    "clubName": "Muslim Student Association (MSA)",
    "title": "Monthly Virtual Halaqah Circle",
    "description": "Monthly virtual discussion circle and reflections featuring invited guest speaker Dr. Jamel Coy Hudson PhD.",
    "date": "2026-12-12",
    "time": "1:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 40
  },
  {
    "eventId": "evt-msa-2",
    "clubId": "club-msa",
    "clubName": "Muslim Student Association (MSA)",
    "title": "Monthly General Body Meeting",
    "description": "All-member meeting to finalize meeting schedule, Welcome Ramadan guest speakers, and Eid planning committees.",
    "date": "2026-12-16",
    "time": "7:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 34
  },
  {
    "eventId": "evt-msa-3",
    "clubId": "club-msa",
    "clubName": "Muslim Student Association (MSA)",
    "title": "Welcome Ramadan 2027 Gathering",
    "description": "Pre-Ramadan spiritual preparation, community reflections, and goal-setting ahead of the blessed month.",
    "date": "2027-02-05",
    "time": "6:00 PM",
    "format": "Hybrid",
    "location": "Hybrid \u00b7 119 W 31st St Room 402 + Zoom",
    "rsvps": 48
  },
  {
    "eventId": "evt-msa-4",
    "clubId": "club-msa",
    "clubName": "Muslim Student Association (MSA)",
    "title": "Eid ul-Fitr Celebration 2027",
    "description": "Outdoor community Eid festival at Washington Square Park with refreshments, games, and fellowship.",
    "date": "2027-04-03",
    "time": "1:00 PM",
    "format": "In-Person",
    "location": "Washington Square Park, NYC",
    "rsvps": 65
  },
  {
    "eventId": "evt-film-1",
    "clubId": "club-film-tv",
    "clubName": "Film & Television Club",
    "title": "Film Club Movie Night: Planes, Trains, and Automobiles",
    "description": "Pre-holiday screening and live cinema discussion hosted by the CUNY SPS Film and Television Club.",
    "date": "2026-11-23",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 22
  },
  {
    "eventId": "evt-film-2",
    "clubId": "club-film-tv",
    "clubName": "Film & Television Club",
    "title": "Film Club Movie Night: The Muppet Christmas Carol",
    "description": "Festive holiday film screening and trivia challenge for cinephiles across CUNY SPS.",
    "date": "2026-12-07",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 25
  },
  {
    "eventId": "evt-film-3",
    "clubId": "club-film-tv",
    "clubName": "Film & Television Club",
    "title": "Film and Television Club End-of-Semester Meeting",
    "description": "Spring film festival submissions, screenwriter critique circles, and student production planning.",
    "date": "2026-12-09",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 19
  },
  {
    "eventId": "evt-melo-1",
    "clubId": "club-melo",
    "clubName": "Management and Entrepreneur Leadership Organization (MELO)",
    "title": "MELO End-of-Year Executive Leadership Roundtable",
    "description": "Discussion on entrepreneurial leadership, emerging business models, and spring venture planning.",
    "date": "2026-12-17",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 27
  },
  {
    "eventId": "evt-melo-2",
    "clubId": "club-melo",
    "clubName": "Management and Entrepreneur Leadership Organization (MELO)",
    "title": "MELO & The Kiosk: Write to Win \u2014 Articles That Grow Your Brand",
    "description": "Executive communications workshop on publishing thought leadership and building personal brand capital.",
    "date": "2027-02-25",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 38
  },
  {
    "eventId": "evt-melo-3",
    "clubId": "club-melo",
    "clubName": "Management and Entrepreneur Leadership Organization (MELO)",
    "title": "MELO Annual Ideation Fair & Venture Pitch",
    "description": "Student venture ideation workshop, startup pitch coaching, and entrepreneurial networking.",
    "date": "2027-03-25",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 42
  },
  {
    "eventId": "evt-wstem-1",
    "clubId": "club-women-stem",
    "clubName": "Women in STEM Club",
    "title": "Women in STEM Career & Graduate Research Panel",
    "description": "Alumni and faculty researchers share career trajectories in data science, biotech, and software engineering.",
    "date": "2026-11-23",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom / CUNY SPS Virtual Commons",
    "rsvps": 30
  },
  {
    "eventId": "evt-wstem-2",
    "clubId": "club-women-stem",
    "clubName": "Women in STEM Club",
    "title": "Women in STEM Spring General Meeting & Mentorship Circle",
    "description": "Semester kick-off, peer mentorship pairings, and upcoming technical workshop roadmap.",
    "date": "2027-02-02",
    "time": "5:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 29
  },
  {
    "eventId": "evt-psych-1",
    "clubId": "club-psychology",
    "clubName": "Psychology Club",
    "title": "Applied Psychology & Workplace Well-Being Workshop",
    "description": "Interactive seminar exploring organizational psychology practices, stress resilience, and peer support.",
    "date": "2026-11-26",
    "time": "5:30 PM",
    "format": "Hybrid",
    "location": "Hybrid \u00b7 119 W 31st St Room 305 + Zoom",
    "rsvps": 31
  },
  {
    "eventId": "evt-psych-2",
    "clubId": "club-psychology",
    "clubName": "Psychology Club",
    "title": "Psychology Club Mental Health Exploration & Discussion Circle",
    "description": "Supportive space exploring mental health topics, career pathways, and academic research in psychology.",
    "date": "2027-02-25",
    "time": "5:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 27
  },
  {
    "eventId": "evt-pride-1",
    "clubId": "club-pride",
    "clubName": "Pride Club",
    "title": "Pride Club Community Meeting & LGBTQIA+ Advocacy",
    "description": "Community space for LGBTQIA+ student discussions, intersectional solidarity, and campus programming.",
    "date": "2027-02-24",
    "time": "5:30 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 23
  },
  {
    "eventId": "evt-pride-2",
    "clubId": "club-pride",
    "clubName": "Pride Club",
    "title": "Lavender Graduation Celebration & Recognition",
    "description": "Annual celebratory ceremony recognizing graduating LGBTQIA+ students, student leaders, and allies.",
    "date": "2027-05-06",
    "time": "6:00 PM",
    "format": "Hybrid",
    "location": "119 W 31st St Student Lounge + Zoom",
    "rsvps": 39
  },
  {
    "eventId": "evt-bsu-1",
    "clubId": "club-bsu",
    "clubName": "Black Student Union",
    "title": "BSU Cultural Heritage & Leadership Mixer",
    "description": "Community networking evening celebrating student leaders, mentorship circles, and cultural solidarity.",
    "date": "2026-11-30",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 33
  },
  {
    "eventId": "evt-bsu-2",
    "clubId": "club-bsu",
    "clubName": "Black Student Union",
    "title": "Black Student Union Spring General Meeting",
    "description": "Spring semester planning, Black History Month initiatives, and community advocacy projects.",
    "date": "2027-02-03",
    "time": "5:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 28
  },
  {
    "eventId": "evt-book-1",
    "clubId": "club-book",
    "clubName": "Book Club",
    "title": "Book Club & LAPS: Monsters, Myth and Magic Reading Circle",
    "description": "Joint literary reading circle and monthly fiction critique hosted with Literary Arts & Publishing Society.",
    "date": "2026-12-10",
    "time": "6:30 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 20
  },
  {
    "eventId": "evt-writing-1",
    "clubId": "club-creative-writing",
    "clubName": "Creative Writing Club",
    "title": "Literary Arts & Publishing Society Writers Workshop",
    "description": "Peer feedback session for short fiction, poetry, essays, and submissions to the SPS student journal.",
    "date": "2027-02-18",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 18
  },
  {
    "eventId": "evt-dac-1",
    "clubId": "club-disability-access",
    "clubName": "Disability and Access Coalition",
    "title": "Disability and Access Coalition General Meeting",
    "description": "Student advocacy, digital accessibility feedback, and campus accommodation support forums.",
    "date": "2026-12-03",
    "time": "5:30 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 22
  },
  {
    "eventId": "evt-dac-2",
    "clubId": "club-disability-access",
    "clubName": "Disability and Access Coalition",
    "title": "ADAPT Inclusive Communication & Accessible Design",
    "description": "Interactive training on creating universally accessible presentations, documents, and web materials.",
    "date": "2027-02-23",
    "time": "5:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 26
  },
  {
    "eventId": "evt-sasu-1",
    "clubId": "club-sasu",
    "clubName": "South Asian Student Union",
    "title": "South Asian Student Union General Meeting",
    "description": "Cultural connection, semester event calendar coordination, and peer networking social.",
    "date": "2027-02-18",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 24
  },
  {
    "eventId": "evt-sasu-2",
    "clubId": "club-sasu",
    "clubName": "South Asian Student Union",
    "title": "SASU Annual Community Iftar Gathering",
    "description": "Co-hosted Ramadan Iftar dinner celebrating South Asian culture, unity, and shared faith traditions.",
    "date": "2027-03-05",
    "time": "5:00 PM",
    "format": "Hybrid",
    "location": "119 W 31st St Room 402 + Zoom",
    "rsvps": 45
  },
  {
    "eventId": "evt-photo-1",
    "clubId": "club-photography",
    "clubName": "Photography Club",
    "title": "Photography Club NYC Photo Walk & Critique Showcase",
    "description": "Virtual portfolio critique of autumn street photography and NYC architectural photo challenges.",
    "date": "2026-12-05",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 21
  },
  {
    "eventId": "evt-sbd-1",
    "clubId": "club-sigma-beta-delta",
    "clubName": "Sigma Beta Delta Honor Society",
    "title": "Sigma Beta Delta Business Leadership Forum",
    "description": "Executive networking meeting for inducted business scholars, alumni mentors, and chapter officers.",
    "date": "2026-12-22",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 25
  },
  {
    "eventId": "evt-dap-1",
    "clubId": "club-delta-alpha-pi",
    "clubName": "Delta Alpha Pi Honor Society",
    "title": "Delta Alpha Pi Honor Society Annual Induction Ceremony",
    "description": "Formal induction ceremony recognizing academic excellence among students with disabilities.",
    "date": "2027-04-23",
    "time": "3:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 36
  },
  {
    "eventId": "evt-svo-1",
    "clubId": "club-svo",
    "clubName": "Student Veterans Organization",
    "title": "Student Veterans Organization Academic & Career Transition Forum",
    "description": "Peer support and transition forum connecting military service members, veterans, and civilian allies.",
    "date": "2026-12-11",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 20
  },
  {
    "eventId": "evt-siac-1",
    "clubId": "club-social-impact",
    "clubName": "Social Impact & Activism Club",
    "title": "Civic Advocacy & Campus Housing Justice Roundtable",
    "description": "Student-led discussion on disability justice, tenant rights, mutual aid drives, and CUNY advocacy.",
    "date": "2026-12-02",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 27
  },
  {
    "eventId": "evt-hian-1",
    "clubId": "club-hian",
    "clubName": "Health Information and Administration Network (HIAN) Leadership",
    "title": "Healthcare Administration & Health Informatics Executive Panel",
    "description": "Industry panel exploring healthcare management certifications (RHIA), hospital leadership, and health data.",
    "date": "2027-02-26",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 26
  },
  {
    "eventId": "evt-anime-1",
    "clubId": "club-anime",
    "clubName": "Anime Club",
    "title": "Anime Club Watch Party & Manga Discussion",
    "description": "Community streaming watch party, anime reviews, and creative animation discussion.",
    "date": "2026-12-04",
    "time": "6:30 PM",
    "format": "Virtual",
    "location": "Discord / Zoom",
    "rsvps": 22
  },
  {
    "eventId": "evt-crafts-1",
    "clubId": "club-arts-crafts",
    "clubName": "Arts and Crafts Club",
    "title": "Arts & Crafts De-Stress Studio Social",
    "description": "Virtual open-studio craft night: sketching, fiber arts, digital painting, and finals week relaxation.",
    "date": "2026-12-09",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 21
  },
  {
    "eventId": "evt-mental-1",
    "clubId": "club-mental-health",
    "clubName": "Mental Health Club",
    "title": "Mental Health Club Mindful Breathing & Peer Support Circle",
    "description": "Guided wellness meditation, peer check-in, and student mental health resources review.",
    "date": "2027-02-04",
    "time": "6:00 PM",
    "format": "Virtual",
    "location": "Zoom (Virtual)",
    "rsvps": 25
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

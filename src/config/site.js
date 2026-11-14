// ---------------------------------------------------------------------------
// Shared clinic details. Change a phone number, address, social link or service
// here once and the navbar, footer, home page and inner pages all update.
// Items marked TODO are placeholders from the design – replace them with real data.
// ---------------------------------------------------------------------------
import {
  LuStethoscope, LuSyringe, LuSmile, LuScissors, LuMicroscope, LuSiren,
  LuApple, LuBug, LuBookOpen, LuBrain, LuHourglass,
  LuUsers, LuMapPin, LuNewspaper, LuCircleHelp, LuCalendarCheck, LuClipboardList, LuBookHeart,
} from 'react-icons/lu'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'

export const SITE = {
  name: 'Pet Expert – Dhaka',
  logo: '/petexpertlogo.webp', // file in /public
  email: 'info@petexpert.com', // TODO: replace with the clinic's real email
  hours: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 6:00 PM'], // TODO: confirm opening hours
  phones: [
    { label: '01751-427940', href: 'tel:+8801751427940' },
    { label: '01747-150063', href: 'tel:+8801747150063' },
  ],
  whatsappPhone: '8801751427940', // digits only, with country code
}

// TODO: replace each "#" with the clinic's real page link
export const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube },
  { label: 'WhatsApp', href: `https://wa.me/${SITE.whatsappPhone}`, icon: FaWhatsapp },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok },
]

// TODO: the second branch phone was not provided, so it shares the first branch numbers for now
export const BRANCHES = [
  {
    id: 'lalmatia',
    name: 'Lalmatia Branch',
    address: 'House 128, Road 4, Mohammadia Housing Society (near Shia Mosque), Mohammadpur, Dhaka-1207',
    phones: SITE.phones,
  },
  {
    id: 'asad-avenue',
    name: 'Asad Avenue Branch',
    address: '22/C, Asad Avenue (opposite Town Hall Shaheed Park), Mohammadpur, Dhaka',
    phones: SITE.phones,
  },
]

export const mapLink = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

// If a photo has not been added to /public yet, hide the broken image icon
export const hideBroken = (event) => {
  event.currentTarget.style.display = 'none'
}

// ---------------------------- Services (6) ----------------------------
export const SERVICES = [
  {
    id: 'wellness-exams', title: 'Wellness Exams', icon: LuStethoscope,
    image: '/images/services/wellness-exams.webp',
    short: 'Routine checkups to keep your pet happy and healthy.',
    long: 'A full nose-to-tail check lets us catch small problems early, before they become big ones.',
    points: ['Weight, heart, lungs, skin and coat check', 'Eye, ear and mouth examination', 'Diet and exercise advice for your pet', 'Personal health plan for the year ahead'],
  },
  {
    id: 'vaccinations', title: 'Vaccinations', icon: LuSyringe,
    image: '/images/services/vaccinations.webp',
    short: 'Protect your pet with safe and effective vaccines.',
    long: 'Core and lifestyle vaccines for puppies, kittens and adult pets, planned around your pet’s age and routine.',
    points: ['Puppy and kitten vaccine courses', 'Rabies vaccination', 'Yearly booster reminders', 'Vaccination record book'],
  },
  {
    id: 'dental-care', title: 'Dental Care', icon: LuSmile,
    image: '/images/services/dental-care.webp',
    short: 'Clean teeth, healthy gums, happy pets.',
    long: 'Healthy teeth and gums support your pet’s overall health, appetite and comfort.',
    points: ['Dental checkups', 'Scaling and polishing', 'Gum disease treatment', 'Home dental care tips'],
  },
  {
    id: 'surgery', title: 'Surgery', icon: LuScissors,
    image: '/images/services/surgery.webp',
    short: 'Safe, advanced surgical care for your pet.',
    long: 'Planned and urgent surgery in a clean operating theatre, with careful monitoring before, during and after.',
    points: ['Spay and neuter', 'Soft tissue surgery', 'Pain control and monitoring', 'Aftercare guidance at home'],
  },
  {
    id: 'diagnostics', title: 'Diagnostics', icon: LuMicroscope,
    image: '/images/services/diagnostics.webp',
    short: 'Accurate diagnosis for better treatment.',
    long: 'On-site tests help us understand what is wrong quickly so treatment can start without delay.',
    points: ['Blood and urine tests', 'X-ray and ultrasound', 'Parasite and skin tests', 'Clear explanation of every result'],
  },
  {
    id: 'emergency-care', title: 'Emergency Care', icon: LuSiren, badge: '24/7',
    image: '/images/services/emergency-care.webp',
    short: 'We’re here when your pet needs us most.',
    long: 'If your pet is injured or suddenly unwell, call us straight away so the team can get ready for you.',
    points: ['Accidents and injuries', 'Poisoning and sudden illness', 'Breathing trouble', 'Phone advice while you are on your way'],
  },
]

// ---------------------------- Pet Health topics ----------------------------
export const PET_HEALTH = [
  {
    id: 'health-library', title: 'Pet Health Library', icon: LuBookOpen,
    short: 'Simple answers to common pet health questions.',
    tips: ['Know your pet’s normal eating, drinking and toilet habits', 'Check weight, coat and gums at home each month', 'Keep a record of vaccines and treatments', 'Call us early if something changes for more than a day'],
  },
  {
    id: 'nutrition-tips', title: 'Nutrition Tips', icon: LuApple,
    short: 'The right food in the right amount.',
    tips: ['Choose food made for your pet’s age and size', 'Measure portions instead of free-feeding', 'Keep fresh water available all day', 'Avoid chocolate, grapes, onion and cooked bones'],
  },
  {
    id: 'parasite-prevention', title: 'Parasite Prevention', icon: LuBug,
    short: 'Keep fleas, ticks and worms away.',
    tips: ['Use regular flea and tick prevention', 'Deworm on the schedule your vet gives you', 'Wash bedding often', 'Check your pet’s coat after walks'],
  },
  {
    id: 'behavior-training', title: 'Behavior & Training', icon: LuBrain,
    short: 'Calm, confident and well-mannered pets.',
    tips: ['Start training and socialising early', 'Reward good behaviour straight away', 'Give daily play and exercise', 'Ask us if your pet suddenly acts differently – it can be a health sign'],
  },
  {
    id: 'senior-pet-care', title: 'Senior Pet Care', icon: LuHourglass,
    short: 'Comfort and care in the golden years.',
    tips: ['Book a checkup every six months', 'Watch for stiffness, weight change and bad breath', 'Provide soft bedding and easy access to food and water', 'Keep gentle daily movement going'],
  },
]

// ---------------------------- Resources ----------------------------
export const RESOURCES = [
  { id: 'blog', title: 'Blog', icon: LuNewspaper, short: 'News and advice from our vets.' },
  { id: 'vaccination-schedule', title: 'Vaccination Schedule', icon: LuCalendarCheck, short: 'A simple guide to when pets need vaccines.' },
  { id: 'pet-care-guides', title: 'Pet Care Guides', icon: LuClipboardList, short: 'Short guides for new pet owners.' },
  { id: 'faqs', title: 'FAQs', icon: LuCircleHelp, short: 'Quick answers to common questions.' },
]

// ---------------------------- About links ----------------------------
export const ABOUT_LINKS = [
  { id: 'our-story', title: 'Our Story', icon: LuBookHeart },
  { id: 'our-team', title: 'Our Team', icon: LuUsers },
  { id: 'our-branches', title: 'Our Branches', icon: LuMapPin },
]


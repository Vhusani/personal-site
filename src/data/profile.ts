import type { ContactDetail } from '@/types';

export const profile = {
  firstName: 'Vhusani',
  lastName: 'Libago',
  role: 'Full Stack / Software Developer',
  location: 'South Africa',
  email: 'vhusani.libago@gmail.com',
  whatsappNumber: '+27 71 1160 206',
  whatsappHref: 'https://wa.me/27711160206',
  github: 'https://github.com/vhusani',
  linkedin: 'https://www.linkedin.com/in/vhusani-libago-6a1189123/',
  headline: 'Full Stack Software Developer',
  bio:
    'I am a skilled IT professional with a strong background in Full Stack Software Development. ' +
    'I have experience using various technologies, including .Net, Angular, PHP, T-SQL, Ionic, HTML, ' +
    'CSS and JavaScript. I hold a Bachelors degree in Informatics, as well as a Diploma in Software ' +
    'Development. I am a highly motivated individual who enjoys tackling new challenges and continuously ' +
    'learning new technical skills. My passion lies in using my technical expertise to make a positive ' +
    'impact on both individuals and organizations',
} as const;

/**
 * Rotating headlines for the About section. The first is the current role;
 * the rest are the directions being worked towards. Order is the order they
 * cycle in, and the list is also what screen readers are given, read once
 * and in full.
 */
export const headlines: string[] = [
  'Full Stack Software Developer',
  'Aspiring Application Security Engineer',
  'Aspiring Cloud Security Engineer',
];

/**
 * Availability status shown in the sidebar. Typed as a plain boolean (rather
 * than inferred as the literal `true`) so flipping it to false is a one-line
 * change that actually hides the badge.
 */
export const availability: { available: boolean; label: string } = {
  available: true,
  label: 'Open to work',
};

export const contactDetails: ContactDetail[] = [
  { label: 'Name', value: `${profile.firstName} ${profile.lastName}` },
  { label: 'Address', value: profile.location },
  { label: 'E-mail · preferred', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'WhatsApp · preferred', value: profile.whatsappNumber, href: profile.whatsappHref },
];

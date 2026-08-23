import type { ContactDetail } from '@/types';

export const profile = {
  firstName: 'Vhusani',
  lastName: 'Libago',
  role: 'Full Stack Software Engineer',
  location: 'South Africa',
  email: 'vhusani.libago@gmail.com',
  whatsappNumber: '+27 71 1160 206',
  whatsappHref: 'https://wa.me/27711160206',
  github: 'https://github.com/vhusani',
  linkedin: 'https://www.linkedin.com/in/vhusani-libago-6a1189123/',
  headline: 'Full Stack Software Developer',
  bio: [
    'I’m a software engineer with experience building web applications, APIs, and the ' +
      'infrastructure that supports them. My work is primarily in .NET, C#, Angular, and SQL, but it ' +
      'has taken me beyond application development into CI/CD, Linux, Docker, IIS, authentication, ' +
      'search infrastructure, and production troubleshooting.',
    'Over the years I’ve grown increasingly interested in areas where software, infrastructure, and ' +
      'security meet. I enjoy tackling problems for which the answer is not immediately obvious. Be it ' +
      'working out why a service has stopped responding or tracking down a problem in an application ' +
      'and its infrastructure, optimizing a database or search process, or understanding how different ' +
      'parts of a system interact. I like to learn how things work under the hood and tend to own ' +
      'problems rather than just the code in front of me.',
  ],
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

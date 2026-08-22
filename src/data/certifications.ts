import exam461 from '@/assets/certifications/exam-461-querying-sql-server.png';
import exam467 from '@/assets/certifications/exam-467-bi-solutions.png';
import exam483 from '@/assets/certifications/exam-483-programming-csharp.png';
import exam486 from '@/assets/certifications/exam-486-aspnet-mvc.png';
import exam487 from '@/assets/certifications/exam-487-azure-web-services.png';
import mcsaWebApplications from '@/assets/certifications/mcsa-web-applications.png';
import mcsdAppBuilder from '@/assets/certifications/mcsd-app-builder.png';
import mtaFundamentals from '@/assets/certifications/mta-software-development-fundamentals.png';
import type { Certification } from '@/types';

/** Public Credly profile, linked from the section header. */
export const credlyProfileUrl = 'https://www.credly.com/users/vhusani-libago/badges';

/**
 * Verified badges from the Credly profile above, newest first.
 *
 * Badge artwork is bundled rather than hot-linked from Credly's CDN so the
 * section keeps working if those URLs change, and does not depend on a
 * third-party host at render time. `href` points at the public verification
 * page for each badge.
 */
export const certifications: Certification[] = [
  {
    name: 'Exam 467: Designing Business Intelligence Solutions with Microsoft SQL Server',
    issuer: 'Microsoft',
    issued: 'Nov 2016',
    image: exam467,
    href: 'https://www.credly.com/badges/e6f18218-e2d2-4507-8d1c-db53209d276d',
  },
  {
    name: 'MTA: Software Development Fundamentals',
    issuer: 'Microsoft',
    issued: 'Nov 2016',
    image: mtaFundamentals,
    href: 'https://www.credly.com/badges/5892fa1a-e3cb-4021-aed2-67a7d31ab109',
  },
  {
    name: 'MCSD: App Builder',
    issuer: 'Microsoft',
    issued: 'Sep 2016',
    image: mcsdAppBuilder,
    href: 'https://www.credly.com/badges/8b4f34b4-1222-4682-a202-eb0e63ab6c34',
  },
  {
    name: 'MCSA: Web Applications',
    issuer: 'Microsoft',
    issued: 'Sep 2016',
    image: mcsaWebApplications,
    href: 'https://www.credly.com/badges/286d91e4-3a7f-499c-bc60-d43bf6fac856',
  },
  {
    name: 'Exam 461: Querying Microsoft SQL Server 2012/2014',
    issuer: 'Microsoft',
    issued: 'Jun 2016',
    image: exam461,
    href: 'https://www.credly.com/badges/755b9141-0bdc-4d27-a582-2b2cbe036739',
  },
  {
    name: 'Exam 487: Developing Microsoft Azure and Web Services',
    issuer: 'Microsoft',
    issued: 'Dec 2015',
    image: exam487,
    href: 'https://www.credly.com/badges/e9fbc74a-db91-4b32-82bb-10e6f3795d5f',
  },
  {
    name: 'Exam 486: Developing ASP.NET MVC Web Applications',
    issuer: 'Microsoft',
    issued: 'Nov 2015',
    image: exam486,
    href: 'https://www.credly.com/badges/75a63938-e846-47cd-a9e4-dd29dc13dafd',
  },
  {
    name: 'Exam 483: Programming in C#',
    issuer: 'Microsoft',
    issued: 'Jul 2015',
    image: exam483,
    href: 'https://www.credly.com/badges/c71b04a6-50a7-42de-95c9-fc0bcc1dd73c',
  },
];

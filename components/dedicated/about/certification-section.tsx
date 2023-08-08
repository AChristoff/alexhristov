import { TFunction } from '@/types'
import { Icons } from '@/assets/icons'
import { formatDate } from '@/assets/utils'

const skills = [
  {
    certification: 'Programming Fundamentals',
    year: '2018-12',
    links: 'https://softuni.bg/certificates/details/60952/1e7f6749',
  },
  {
    certification: 'JavaScript Basics',
    year: '2019-02',
    links: 'https://softuni.bg/certificates/details/62551/05237ad5',
  },
  {
    certification: 'JavaScript Advanced',
    year: '2019-03',
    links: 'https://softuni.bg/certificates/details/63939/df599ad3',
  },
  {
    certification: 'JavaScript Web Applications',
    year: '2019-04',
    links: 'https://softuni.bg/certificates/details/65046/2b8f5de1',
  },
  {
    certification: 'HTML & CSS',
    year: '2019-06',
    links: 'https://softuni.bg/certificates/details/68405/8a9ac71f',
  },
  {
    certification: 'React',
    year: '2020-08',
    links: 'https://softuni.bg/certificates/details/87344/14bd2386',
  },
  {
    certification: 'Linux',
    year: '2020-10',
    links:
      'https://www.udemy.com/certificate/UC-c07ac0a6-32ff-4cbe-b941-e1600050b852/',
  },
  {
    certification: 'MERN stack',
    year: '2021-01',
    links:
      'https://www.udemy.com/certificate/UC-842e6fe3-d17b-4503-9021-42c167b2207c/',
  },
  {
    certification: 'Testing React',
    year: '2022-07',
    links:
      'https://www.udemy.com/certificate/UC-3fbfe2bf-1b91-496b-9da5-0d5431a58dd4/',
  },
  {
    certification: 'React Native',
    year: '2023-05',
    links:
      'https://www.udemy.com/certificate/UC-a8b6d065-2d6c-4280-8b6c-a696e6bab07e/',
  },
  {
    certification: 'Prompt Engineering',
    year: '2023-05',
    links:
      'https://www.udemy.com/certificate/UC-899d0637-74b0-452c-9fa0-924e62c3bb17/',
  },
  {
    certification: 'Advanced React For Enterprise',
    year: '2023-07',
    links:
      'https://www.udemy.com/certificate/UC-ed101dfe-ff5e-4ee7-a48b-247f60c1c218/',
  },
]

type Props = {
  t: TFunction
  lang: string
}

const CertificationSection = ({ t, lang }: Props) => {
  const sortedSkills = [...skills].sort((a, b) => b.year.localeCompare(a.year))

  return (
    <section className="skills">
      <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.45rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.medal className="text-secondary mt-[-2px] w-[2rem] h-[2rem]" />
        </span>
        {t('certification.title')}
      </h5>

      <ul>
        {sortedSkills.map((skill, index) => (
          <li key={index}>
            <a
              href={skill.links}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[2px] hover:underline hover:text-primary flex-col sm:flex-row flex"
            >
              <span className="mr-auto block font-semibold">{skill.certification}</span>{' '}
              <span className="sm:ml-auto block mb-2 sm:mb-1">{formatDate(skill.year, lang)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CertificationSection

import { TFunction } from '@/types'
import { Icons } from '@/assets/icons'
import Rating from './rating'

const skills = [
  { technology: 'JavaScript', stars: 5 },
  { technology: 'TypeScript', stars: 4 },
  { technology: 'HTML5', stars: 5 },
  { technology: 'CSS3', stars: 5 },
  { technology: 'Sass', stars: 4 },
  { technology: 'React', stars: 5 },
  { technology: 'NextJS', stars: 4 },
  { technology: 'React Native', stars: 4 },
  { technology: 'Redux', stars: 5 },
  { technology: 'Accessibility', stars: 4 },
  { technology: 'NodeJS', stars: 3 },
  { technology: 'Express', stars: 3 },
  { technology: 'Mongo', stars: 4 },
  { technology: 'Linux', stars: 4 },
  { technology: 'Rest API', stars: 5 },
  { technology: 'Scrum', stars: 3 },
  { technology: 'Git', stars: 5 },
  { technology: 'Jira', stars: 5 },
  { technology: 'Tailwind', stars: 4 },
  { technology: 'MUI', stars: 5 },
  { technology: 'Bootstrap', stars: 5 },
  { technology: 'jQuery', stars: 3 },
  { technology: 'VueJS', stars: 3 },
]

type Props = {
  t: TFunction
}

const SkillsSection = ({ t }: Props) => {

  return (
    <section className="skills">
      <h5 className="flex mt-10 mb-5 border-b items-center uppercase font-semibold tracking-[3px]">
        <span className="flex items-center p-[0.5rem] bg-primary rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-1">
          <Icons.pizzle className="text-secondary mt-[-2px] mr-[-2px] w-[2rem] h-[2rem]" />
        </span>
        {t('skills.title')}
      </h5>

      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="flex mb-[2px]">
            <span className="mr-auto">{skill.technology}</span>{' '}
            <Rating stars={skill.stars.toString()} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection

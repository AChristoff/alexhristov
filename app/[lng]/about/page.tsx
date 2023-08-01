import Image from 'next/image'
import cover from '@/public/assets/about-cover.png'

import { useTranslation } from '@/app/i18n'

type Props = {
  params: {
    lng: string
  }
}

const AboutPage = async ({ params }: Props) => {
  const { t } = await useTranslation(params?.lng, 'about')
  return (
    <div className="about">
      <h1 className="mt-10 mb-3 text-center uppercase font-semibold leading-tight text-xl md:text-2xl tracking-[3px]">
        {t('title')}
      </h1>

      <section className="about-cover">
        <Image
          src={cover}
          alt="Profile"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          className='rounded-md overflow-hidden mx-auto'
        />
      </section>

      <section className="my-7 max-w-4xl mx-auto text-stale-800">{t('generalInfo')}</section>

      {/* <section className="main-info">
        <div className="left-col">
          <section className="contacts">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaUserTie />
              </span>
              {about.contacts.title}
            </h5>
            <ul>
              <li>{about.contacts.address.title}</li>
              <li>{about.contacts.address.address}</li>
              <li>{about.contacts.phone}</li>
              <li>+359 888 199 889</li>
              <li>{about.contacts.email}</li>
              <li>
                <img src="/assets/img/email.svg" alt="mail" />
              </li>
            </ul>
          </section>

          <section className="skills">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaPuzzlePiece />
              </span>
              {about.skills.title}
            </h5>

            <ul className="rating-list">
              <li>
                <span>JavaScript</span> <Rating stars="5" />
              </li>
              <li>
                <span>TypeScript</span> <Rating stars="4" />
              </li>
              <li>
                <span>HTML5</span> <Rating stars="5" />
              </li>
              <li>
                <span>CSS3</span> <Rating stars="5" />
              </li>
              <li>
                <span>Sass</span> <Rating stars="4" />
              </li>
              <li>
                <span>React</span> <Rating stars="5" />
              </li>
              <li>
                <span>NextJS</span> <Rating stars="4" />
              </li>
              <li>
                <span>React Native</span> <Rating stars="4" />
              </li>
              <li>
                <span>Redux</span> <Rating stars="2" />
              </li>
              <li>
                <span>NodeJS</span> <Rating stars="3" />
              </li>
              <li>
                <span>Express</span> <Rating stars="3" />
              </li>
              <li>
                <span>Mongo</span> <Rating stars="4" />
              </li>
              <li>
                <span>Linux</span> <Rating stars="4" />
              </li>
              <li>
                <span>Rest API</span> <Rating stars="5" />
              </li>
              <li>
                <span>Scrum</span> <Rating stars="3" />
              </li>
              <li>
                <span>Git</span> <Rating stars="5" />
              </li>
              <li>
                <span>Jira</span> <Rating stars="5" />
              </li>
              <li>
                <span>Bootstrap</span> <Rating stars="5" />
              </li>
              <li>
                <span>Tailwind</span> <Rating stars="4" />
              </li>
              <li>
                <span>MUI</span> <Rating stars="5" />
              </li>
              <li>
                <span>jQuery</span> <Rating stars="3" />
              </li>
              <li>
                <span>VueJS</span> <Rating stars="3" />
              </li>
            </ul>
          </section>

          <section className="languages">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaFlag />
              </span>
              {about.languages.title}
            </h5>

            <ul className="rating-list">
              <li>
                <span>{about.languages.en}</span> <Rating stars="4" />
              </li>
              <li>
                <span>{about.languages.bg}</span> <Rating stars="5" />
              </li>
            </ul>
          </section>

        </div>

        <div className="right-col">
          <section className="work-history">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaBriefcase />
              </span>
              {about.workHistory.title}
            </h5>

            <ul>
              <li style={{ textAlign: 'left' }}>
                {about.workHistory.jobs.childish.title}
              </li>
              <li>
                <span>{about.workHistory.jobs.childish.period}</span>{' '}
                <a
                  type="button"
                  href={about.workHistory.jobs.childish.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.workHistory.jobs.childish.employer}
                </a>
              </li>
              {about.workHistory.jobs.childish.description.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul>
              <li>{about.workHistory.jobs.atos.title}</li>
              <li>
                <span>{about.workHistory.jobs.atos.period}</span>{' '}
                <a
                  type="button"
                  href={about.workHistory.jobs.atos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.workHistory.jobs.atos.employer}
                </a>
              </li>
              {about.workHistory.jobs.atos.description.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul>
              <li>{about.workHistory.jobs.neterra.title}</li>
              <li>
                <span>{about.workHistory.jobs.neterra.period}</span>{' '}
                <a
                  type="button"
                  href={about.workHistory.jobs.neterra.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.workHistory.jobs.neterra.employer}
                </a>
              </li>
              {about.workHistory.jobs.neterra.description.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}
            </ul>

            <ul>
              <li className="left">{about.workHistory.jobs.walltopia.title}</li>
              <li>
                <span>{about.workHistory.jobs.walltopia.period}</span>{' '}
                <a
                  type="button"
                  href={about.workHistory.jobs.walltopia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.workHistory.jobs.walltopia.employer}
                </a>
              </li>

              <li className="position">
                <span>{about.workHistory.jobs.walltopia.pm.time}</span>{' '}
                <span>{about.workHistory.jobs.walltopia.pm.title}</span>
              </li>
              {about.workHistory.jobs.walltopia.pm.description.map((p, i) => (
                <li className="left" key={i}>
                  {p}
                </li>
              ))}

              <li className="position">
                <span>{about.workHistory.jobs.walltopia.teamLead.time}</span>{' '}
                <span>{about.workHistory.jobs.walltopia.teamLead.title}</span>
              </li>
              {about.workHistory.jobs.walltopia.teamLead.description.map(
                (p, i) => (
                  <li className="left" key={i}>
                    {p}
                  </li>
                )
              )}

              <li className="position">
                <span>{about.workHistory.jobs.walltopia.drafter.time}</span>{' '}
                <span>{about.workHistory.jobs.walltopia.drafter.title}</span>
              </li>
              {about.workHistory.jobs.walltopia.drafter.description.map(
                (p, i) => (
                  <li className="left" key={i}>
                    {p}
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="education">
            <h5 className="about-subtitles">
              <span className="about-icons">
                <FaGraduationCap />
              </span>
              {about.education.title}
            </h5>

            <ul>
              <li className="left">{about.education.softUni.specialty}</li>
              <li>
                <span className="left period">
                  {about.education.softUni.period}
                </span>{' '}
                <span>{about.education.softUni.university}</span>
              </li>
            </ul>

            <ul>
              <li className="left">{about.education.forestry.specialty}</li>
              <li>
                <span className="left period">
                  {about.education.forestry.period}
                </span>{' '}
                <span className="right">
                  {about.education.forestry.university}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section> */}
    </div>
  )
}

export default AboutPage

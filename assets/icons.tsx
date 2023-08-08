import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 587 170" {...props}>
      <g id="Layer">
        <path
          id="Layer"
          fill="currentColor"
          d="M77.4 3L82 5.7C84.5 7.2 88.1 9.3 90.2 10.5C92.2 11.6 96.4 14 99.7 15.9C102.9 17.8 106.9 20.1 108.5 21C110.2 22 117.6 26.2 125 30.5C132.4 34.8 140.6 39.4 143.2 40.7C146.2 42.2 148.2 44 148.6 45.4C148.9 46.6 149 65.5 148.8 87.4L148.5 127.2L145.5 129.3C143.9 130.5 138.5 133.8 133.5 136.6C123.3 142.3 106.8 151.7 90.1 161.4C83.8 165 77.8 168 76.9 168C75.9 168 70.7 165.4 65.3 162.2C59.9 159 51 153.7 45.5 150.6C40 147.4 33.9 143.9 32 142.8C30.1 141.7 25.4 138.9 21.5 136.7C17.7 134.5 12.4 131.4 9.7 129.7L5 126.8L5 44.4L8.3 42.6C10 41.6 15.6 38.4 20.5 35.5C43.3 22.2 67.9 8.1 72.5 5.7L77.4 3ZM65.5 34.4C64.4 34 44.2 45.5 40.1 48.7L37.7 50.7L47.2 56.3C52.4 59.4 57 62 57.3 62C57.6 62 59.6 63.1 61.6 64.5C63.7 65.9 65.7 66.7 66.2 66.2C66.7 65.7 66.9 58.4 66.8 50C66.6 40.9 66.1 34.5 65.5 34.4ZM87.6 36.2C86.8 39.2 86.8 61.8 87.6 64.7C88.4 67.7 89.7 67.6 96.3 63.7C99.3 62 105.3 58.6 109.5 56.2C113.7 53.8 117 51.4 116.8 50.8C116.6 50.2 112.4 47.3 107.4 44.4C102.5 41.5 96.6 38 94.4 36.6C89.3 33.4 88.4 33.4 87.6 36.2ZM26.7 69.7C25.6 70.8 25.9 99.8 27 100.5C27.5 100.8 29.1 100.5 30.4 99.8C50.4 89 54.1 86.7 53.8 85.2C53.6 84 38 74 36.4 74C36.2 74 34.4 72.9 32.4 71.5C28.5 68.8 27.7 68.6 26.7 69.7ZM127.2 71C124.8 71 100 85.2 100 86.5C100 87.2 102.4 88.9 105.3 90.5C108.1 92 113.2 95 116.5 97.1C123.4 101.4 128 102.9 128 100.9C128.1 97.4 128.2 77.1 128.1 74.2C128 72.5 127.6 71 127.2 71ZM65 105.3C63.3 105 36.8 119.2 36.3 120.6C36.1 121.2 39.5 123.5 43.7 125.8C48 128.2 54.6 131.9 58.4 134.1C62.3 136.3 65.7 137.7 66.2 137.2C66.7 136.7 66.9 129.4 66.8 120.9C66.5 108.2 66.2 105.5 65 105.3ZM87.6 108.8C86.9 113.3 87 129.1 87.7 134.2C88.2 138.6 87.9 138.6 100.5 131.7C111 125.9 116 122.8 116 121.9C116 121.2 106.5 115 97.5 109.8C88.3 104.6 88.2 104.6 87.6 108.8Z"
        />
        <path
          id="Aleksov "
          fill="currentColor"
          d="M250.44 127L235.73 127L227.56 108.03L188.12 108.03L179.95 127L165 127L201.69 45.92L213.76 45.92L250.44 127ZM207.78 62.02L192.94 96.53L222.62 96.53L207.78 62.02ZM272.18 127L257.81 127L257.81 45.92L272.18 45.92L272.18 127ZM336.35 97.44L336.35 101.47L298.06 101.47C298.51 106.68 300.09 110.55 302.77 113.08C305.45 115.61 309.29 116.88 314.27 116.88C320.48 116.88 326.15 114.89 331.29 110.9L335.43 120.79C332.82 122.94 329.53 124.66 325.54 125.97C321.63 127.27 317.68 127.92 313.69 127.92C304.5 127.92 297.21 125.31 291.85 120.1C286.56 114.89 283.91 107.76 283.91 98.71C283.91 92.96 285.06 87.86 287.36 83.41C289.66 78.97 292.88 75.52 297.02 73.06C301.24 70.61 305.99 69.38 311.28 69.38C319.02 69.38 325.12 71.88 329.56 76.86C334.09 81.84 336.35 88.7 336.35 97.44ZM311.63 79.5C307.79 79.5 304.69 80.73 302.31 83.19C300.01 85.64 298.59 89.16 298.06 93.77L324.04 93.77C323.89 89.09 322.74 85.56 320.6 83.19C318.45 80.73 315.46 79.5 311.63 79.5ZM377.29 97.79L404.43 127L386.61 127L362.45 101.36L362.45 127L348.08 127L348.08 45.92L362.45 45.92L362.45 95.38L385.11 70.88L402.59 70.88L377.29 97.79ZM429.62 127.92C424.63 127.92 420.03 127.31 415.81 126.08C411.68 124.85 408.15 123.09 405.24 120.79L409.26 110.78C415.24 115.16 422.1 117.34 429.85 117.34C433.14 117.34 435.63 116.8 437.32 115.73C439.08 114.66 439.96 113.12 439.96 111.13C439.96 109.44 439.35 108.14 438.13 107.22C436.97 106.3 434.87 105.46 431.8 104.69L422.6 102.62C417.39 101.47 413.51 99.59 410.99 96.98C408.45 94.38 407.19 91 407.19 86.86C407.19 83.41 408.15 80.39 410.06 77.78C412.06 75.1 414.78 73.03 418.23 71.57C421.76 70.11 425.82 69.38 430.42 69.38C434.41 69.38 438.24 70 441.92 71.22C445.68 72.45 448.97 74.18 451.81 76.4L447.78 86.17C441.96 81.96 436.13 79.85 430.31 79.85C427.16 79.85 424.71 80.42 422.94 81.57C421.18 82.72 420.3 84.33 420.3 86.41C420.3 87.94 420.84 89.2 421.91 90.2C423.06 91.2 424.86 91.96 427.31 92.5L436.86 94.69C442.46 95.91 446.56 97.87 449.17 100.55C451.77 103.16 453.07 106.61 453.07 110.9C453.07 116.11 450.97 120.25 446.75 123.32C442.53 126.39 436.82 127.92 429.62 127.92ZM490.34 127.92C484.59 127.92 479.53 126.73 475.16 124.36C470.86 121.98 467.53 118.57 465.15 114.12C462.77 109.67 461.59 104.5 461.59 98.59C461.59 92.69 462.77 87.55 465.15 83.19C467.53 78.74 470.86 75.33 475.16 72.95C479.53 70.57 484.59 69.38 490.34 69.38C496.09 69.38 501.11 70.57 505.4 72.95C509.77 75.33 513.11 78.74 515.4 83.19C517.78 87.55 518.97 92.69 518.97 98.59C518.97 104.5 517.78 109.67 515.4 114.12C513.11 118.57 509.77 121.98 505.4 124.36C501.11 126.73 496.09 127.92 490.34 127.92ZM490.22 116.77C494.9 116.77 498.46 115.23 500.92 112.16C503.37 109.1 504.6 104.58 504.6 98.59C504.6 92.69 503.37 88.21 500.92 85.14C498.46 82 494.94 80.42 490.34 80.42C485.74 80.42 482.17 82 479.64 85.14C477.19 88.21 475.96 92.69 475.96 98.59C475.96 104.58 477.19 109.1 479.64 112.16C482.09 115.23 485.62 116.77 490.22 116.77ZM553.01 110.56L569.34 70.88L583.49 70.88L558.88 127L546.34 127L521.96 70.88L537.14 70.88L553.01 110.56Z"
        />
      </g>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedIn: (props: LucideProps) => (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      ></path>
    </svg>
  ),
  stackOverflow: (props: LucideProps) => (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        fill="currentColor"
        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
      ></path>
    </svg>
  ),
  contacts: (props: LucideProps) => (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
      ></path>
    </svg>
  ),
  work: (props: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
      ></path>
    </svg>
  ),
  pizzle: (props: LucideProps) => (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        fill="currentColor"
        d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"
      ></path>
    </svg>
  ),
  flag: (props: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"
      ></path>
    </svg>
  ),
  education: (props: LucideProps) => (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
      ></path>
    </svg>
  ),
  circle: (props: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      ></path>
    </svg>
  ),
  circleOutline: (props: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
      ></path>
    </svg>
  ),
  email: (props: LucideProps) => (
    <svg viewBox="0 0 255 28" {...props}>
      <path
        fill="currentColor"
        d="M7.55 9.02C9.04 9.02 10.14 9.41 10.86 10.18C11.6 10.93 11.97 12.08 11.97 13.63L11.97 21L10.07 21L10.07 19.01C9.77 19.7 9.31 20.23 8.68 20.62C8.05 20.99 7.33 21.17 6.52 21.17C5.77 21.17 5.07 21.02 4.43 20.71C3.81 20.41 3.31 19.99 2.94 19.44C2.57 18.89 2.39 18.29 2.39 17.64C2.39 16.76 2.61 16.08 3.06 15.6C3.51 15.11 4.25 14.75 5.27 14.54C6.3 14.32 7.72 14.21 9.54 14.21L10.07 14.21L10.07 13.42C10.07 12.44 9.87 11.73 9.47 11.3C9.07 10.85 8.42 10.63 7.53 10.63C6.18 10.63 4.85 11.05 3.52 11.88L2.87 10.46C3.48 10.03 4.21 9.69 5.06 9.43C5.92 9.16 6.75 9.02 7.55 9.02ZM6.78 19.63C7.74 19.63 8.53 19.31 9.14 18.67C9.76 18.02 10.07 17.18 10.07 16.15L10.07 15.46L9.64 15.46C8.23 15.46 7.16 15.52 6.42 15.65C5.69 15.76 5.16 15.96 4.84 16.25C4.53 16.52 4.38 16.93 4.38 17.47C4.38 18.1 4.61 18.62 5.06 19.03C5.52 19.43 6.09 19.63 6.78 19.63ZM17.46 21L15.52 21L15.52 4.08L17.46 4.08L17.46 21ZM30.88 14.74L30.88 15.46L22.34 15.46C22.4 16.82 22.77 17.85 23.44 18.55C24.11 19.24 25.07 19.58 26.3 19.58C27.66 19.58 28.91 19.12 30.04 18.19L30.69 19.61C30.18 20.09 29.52 20.47 28.72 20.76C27.92 21.03 27.1 21.17 26.27 21.17C24.45 21.17 23.01 20.63 21.95 19.56C20.91 18.49 20.39 17.01 20.39 15.12C20.39 13.92 20.62 12.86 21.09 11.95C21.55 11.02 22.2 10.3 23.03 9.79C23.88 9.28 24.84 9.02 25.91 9.02C27.46 9.02 28.68 9.53 29.56 10.56C30.44 11.57 30.88 12.96 30.88 14.74ZM25.94 10.54C24.91 10.54 24.09 10.86 23.46 11.5C22.85 12.14 22.49 13.04 22.38 14.21L29.18 14.21C29.15 13.02 28.85 12.12 28.29 11.5C27.73 10.86 26.95 10.54 25.94 10.54ZM37.79 14.93L44.15 21L41.63 21L35.68 15.41L35.68 21L33.74 21L33.74 4.08L35.68 4.08L35.68 14.62L41.13 9.34L43.6 9.34L37.79 14.93ZM49.48 21.17C47.51 21.17 45.95 20.67 44.8 19.66L45.45 18.22C46.07 18.71 46.7 19.07 47.34 19.3C48 19.51 48.74 19.61 49.55 19.61C50.42 19.61 51.07 19.47 51.52 19.18C51.99 18.87 52.22 18.44 52.22 17.88C52.22 17.41 52.07 17.05 51.76 16.78C51.45 16.51 50.95 16.29 50.25 16.13L48.28 15.67C47.29 15.45 46.53 15.07 46 14.52C45.47 13.97 45.21 13.3 45.21 12.5C45.21 11.46 45.62 10.62 46.43 9.98C47.25 9.34 48.34 9.02 49.7 9.02C50.51 9.02 51.29 9.16 52.02 9.43C52.76 9.69 53.38 10.07 53.87 10.56L53.22 11.98C52.15 11.07 50.98 10.61 49.7 10.61C48.88 10.61 48.24 10.77 47.78 11.09C47.33 11.39 47.1 11.82 47.1 12.38C47.1 12.85 47.24 13.22 47.51 13.51C47.8 13.78 48.25 13.99 48.88 14.14L50.87 14.62C51.96 14.87 52.77 15.26 53.3 15.79C53.83 16.3 54.09 16.98 54.09 17.81C54.09 18.83 53.67 19.65 52.84 20.26C52.03 20.87 50.91 21.17 49.48 21.17ZM61.89 21.17C60.78 21.17 59.81 20.92 58.96 20.42C58.13 19.93 57.48 19.22 57.02 18.31C56.57 17.38 56.34 16.31 56.34 15.1C56.34 13.88 56.57 12.81 57.02 11.9C57.48 10.97 58.13 10.26 58.96 9.77C59.81 9.27 60.78 9.02 61.89 9.02C62.99 9.02 63.97 9.27 64.82 9.77C65.67 10.26 66.31 10.97 66.76 11.9C67.23 12.81 67.46 13.88 67.46 15.1C67.46 16.31 67.23 17.38 66.76 18.31C66.31 19.22 65.67 19.93 64.82 20.42C63.97 20.92 62.99 21.17 61.89 21.17ZM61.89 19.56C63.04 19.56 63.92 19.18 64.53 18.43C65.15 17.66 65.46 16.55 65.46 15.1C65.46 13.67 65.15 12.58 64.53 11.81C63.9 11.02 63.02 10.63 61.89 10.63C60.75 10.63 59.87 11.02 59.25 11.81C58.62 12.58 58.31 13.67 58.31 15.1C58.31 16.54 58.61 17.64 59.22 18.41C59.85 19.18 60.74 19.56 61.89 19.56ZM74.63 18.89L78.59 9.34L80.54 9.34L75.5 21L73.67 21L68.66 9.34L70.72 9.34L74.63 18.89ZM89.56 4.08L89.56 19.34L93.28 19.34L93.28 21L83.87 21L83.87 19.34L87.59 19.34L87.59 6.53L84.62 8.4L83.7 6.89L88.14 4.08L89.56 4.08ZM102.35 21.19C100.42 21.19 98.95 20.45 97.94 18.98C96.93 17.51 96.42 15.37 96.42 12.55C96.42 9.72 96.93 7.57 97.94 6.1C98.95 4.63 100.42 3.89 102.35 3.89C104.29 3.89 105.76 4.63 106.77 6.1C107.78 7.55 108.28 9.7 108.28 12.53C108.28 15.36 107.78 17.51 106.77 18.98C105.76 20.45 104.29 21.19 102.35 21.19ZM102.35 19.54C103.7 19.54 104.69 18.97 105.33 17.83C105.97 16.7 106.29 14.93 106.29 12.53C106.29 10.11 105.97 8.35 105.33 7.25C104.7 6.13 103.71 5.57 102.35 5.57C101.01 5.57 100.02 6.13 99.38 7.25C98.74 8.37 98.42 10.13 98.42 12.53C98.42 14.93 98.74 16.7 99.38 17.83C100.02 18.97 101.01 19.54 102.35 19.54ZM118.36 4.08L118.36 19.34L122.08 19.34L122.08 21L112.67 21L112.67 19.34L116.39 19.34L116.39 6.53L113.42 8.4L112.5 6.89L116.94 4.08L118.36 4.08ZM135.3 24.65C133.24 24.65 131.44 24.23 129.9 23.38C128.37 22.53 127.18 21.33 126.35 19.8C125.54 18.25 125.13 16.46 125.13 14.45C125.13 12.34 125.57 10.49 126.45 8.9C127.34 7.32 128.56 6.1 130.1 5.23C131.65 4.37 133.38 3.94 135.3 3.94C137.35 3.94 139.11 4.36 140.56 5.21C142.03 6.04 143.14 7.13 143.87 8.47C144.62 9.82 145 11.24 145 12.74C145 14.31 144.76 15.6 144.28 16.61C143.81 17.6 143.21 18.33 142.48 18.79C141.76 19.24 140.99 19.46 140.18 19.46C139.33 19.46 138.65 19.28 138.16 18.91C137.68 18.53 137.41 18 137.34 17.33L137.3 17.33C136.9 17.98 136.39 18.5 135.78 18.89C135.19 19.27 134.5 19.46 133.7 19.46C132.64 19.46 131.78 19.09 131.13 18.36C130.47 17.61 130.14 16.57 130.14 15.26C130.14 14.17 130.35 13.15 130.77 12.19C131.2 11.23 131.8 10.46 132.57 9.89C133.34 9.31 134.22 9.02 135.21 9.02C135.96 9.02 136.62 9.21 137.18 9.58C137.74 9.93 138.11 10.39 138.28 10.97L138.3 10.97L138.59 9.31L140.15 9.31L139.02 15.82C138.96 16.27 138.93 16.55 138.93 16.68C138.93 17.23 139.06 17.61 139.31 17.83C139.57 18.06 139.95 18.17 140.46 18.17C140.91 18.17 141.37 17.99 141.83 17.64C142.3 17.27 142.69 16.69 143.01 15.89C143.33 15.07 143.49 14.02 143.49 12.74C143.49 11.48 143.19 10.29 142.58 9.17C141.97 8.05 141.05 7.15 139.82 6.46C138.59 5.75 137.08 5.4 135.3 5.4C133.67 5.4 132.2 5.77 130.89 6.5C129.59 7.22 128.57 8.27 127.82 9.65C127.07 11.01 126.69 12.61 126.69 14.45C126.69 16.21 127.03 17.75 127.72 19.08C128.41 20.39 129.4 21.41 130.7 22.13C131.99 22.83 133.53 23.18 135.3 23.18C136.66 23.18 137.83 22.99 138.81 22.61C139.8 22.22 140.56 21.69 141.09 21L143.18 21C142.51 22.12 141.48 23.01 140.1 23.66C138.74 24.32 137.14 24.65 135.3 24.65ZM134.01 18.17C134.81 18.17 135.5 17.93 136.07 17.45C136.66 16.95 137.11 16.32 137.42 15.55C137.72 14.78 137.87 13.98 137.87 13.13C137.87 12.23 137.65 11.55 137.2 11.09C136.77 10.61 136.17 10.37 135.42 10.37C134.65 10.37 133.98 10.6 133.41 11.06C132.85 11.53 132.42 12.14 132.11 12.89C131.82 13.62 131.68 14.39 131.68 15.19C131.68 16.14 131.9 16.87 132.35 17.4C132.8 17.91 133.35 18.17 134.01 18.17ZM156.5 9.31L158.44 9.31L158.44 20.21C158.44 21.95 157.99 23.27 157.1 24.17C156.2 25.05 154.87 25.49 153.11 25.49C151.06 25.49 149.34 24.96 147.95 23.9L148.6 22.46C149.39 22.97 150.12 23.34 150.81 23.57C151.5 23.79 152.26 23.9 153.11 23.9C154.23 23.9 155.08 23.61 155.66 23.02C156.23 22.41 156.52 21.53 156.52 20.38L156.52 18.31C156.19 19.06 155.67 19.64 154.96 20.04C154.27 20.44 153.46 20.64 152.51 20.64C151.49 20.64 150.58 20.4 149.78 19.92C148.99 19.44 148.38 18.76 147.93 17.88C147.5 17 147.28 15.98 147.28 14.83C147.28 13.68 147.5 12.66 147.93 11.78C148.38 10.9 148.99 10.22 149.78 9.74C150.58 9.26 151.49 9.02 152.51 9.02C153.44 9.02 154.25 9.22 154.94 9.62C155.63 10.02 156.15 10.59 156.5 11.33L156.5 9.31ZM152.9 19.03C154.02 19.03 154.9 18.66 155.54 17.93C156.18 17.18 156.5 16.14 156.5 14.83C156.5 13.54 156.18 12.52 155.54 11.78C154.91 11.03 154.03 10.66 152.9 10.66C151.76 10.66 150.86 11.03 150.21 11.78C149.57 12.52 149.25 13.54 149.25 14.83C149.25 16.14 149.57 17.18 150.21 17.93C150.86 18.66 151.76 19.03 152.9 19.03ZM175.05 9.02C177.64 9.02 178.94 10.57 178.94 13.66L178.94 21L176.99 21L176.99 13.75C176.99 12.68 176.8 11.89 176.42 11.4C176.05 10.91 175.45 10.66 174.62 10.66C173.64 10.66 172.87 10.99 172.31 11.64C171.75 12.29 171.47 13.19 171.47 14.33L171.47 21L169.53 21L169.53 13.75C169.53 12.66 169.34 11.88 168.95 11.4C168.57 10.91 167.96 10.66 167.13 10.66C166.15 10.66 165.38 10.99 164.82 11.64C164.26 12.29 163.98 13.19 163.98 14.33L163.98 21L162.04 21L162.04 9.31L163.96 9.31L163.96 11.16C164.31 10.47 164.8 9.95 165.42 9.58C166.05 9.21 166.77 9.02 167.58 9.02C169.39 9.02 170.59 9.79 171.16 11.33C171.49 10.61 172.01 10.05 172.7 9.65C173.39 9.23 174.17 9.02 175.05 9.02ZM187.24 9.02C188.73 9.02 189.83 9.41 190.55 10.18C191.29 10.93 191.66 12.08 191.66 13.63L191.66 21L189.76 21L189.76 19.01C189.45 19.7 188.99 20.23 188.37 20.62C187.74 20.99 187.02 21.17 186.21 21.17C185.46 21.17 184.76 21.02 184.12 20.71C183.49 20.41 183 19.99 182.63 19.44C182.26 18.89 182.08 18.29 182.08 17.64C182.08 16.76 182.3 16.08 182.75 15.6C183.2 15.11 183.93 14.75 184.96 14.54C185.99 14.32 187.41 14.21 189.23 14.21L189.76 14.21L189.76 13.42C189.76 12.44 189.56 11.73 189.16 11.3C188.76 10.85 188.11 10.63 187.22 10.63C185.87 10.63 184.54 11.05 183.21 11.88L182.56 10.46C183.17 10.03 183.89 9.69 184.74 9.43C185.61 9.16 186.44 9.02 187.24 9.02ZM186.47 19.63C187.43 19.63 188.21 19.31 188.82 18.67C189.45 18.02 189.76 17.18 189.76 16.15L189.76 15.46L189.33 15.46C187.92 15.46 186.85 15.52 186.11 15.65C185.38 15.76 184.85 15.96 184.53 16.25C184.22 16.52 184.07 16.93 184.07 17.47C184.07 18.1 184.29 18.62 184.74 19.03C185.21 19.43 185.78 19.63 186.47 19.63ZM197.15 21L195.21 21L195.21 9.31L197.15 9.31L197.15 21ZM195.02 6.43L195.02 4.25L197.37 4.25L197.37 6.43L195.02 6.43ZM202.72 21L200.78 21L200.78 4.08L202.72 4.08L202.72 21ZM206.06 21L206.06 18.55L208.5 18.55L208.5 21L206.06 21ZM216.38 21.17C215.23 21.17 214.23 20.92 213.38 20.42C212.53 19.93 211.87 19.23 211.41 18.34C210.96 17.43 210.74 16.36 210.74 15.14C210.74 13.93 210.97 12.86 211.43 11.95C211.91 11.02 212.57 10.3 213.42 9.79C214.29 9.28 215.3 9.02 216.45 9.02C217.23 9.02 218 9.17 218.75 9.46C219.5 9.73 220.11 10.09 220.58 10.56L219.93 12C218.82 11.11 217.7 10.66 216.57 10.66C215.37 10.66 214.43 11.05 213.76 11.83C213.09 12.62 212.75 13.72 212.75 15.14C212.75 16.55 213.09 17.64 213.76 18.41C214.43 19.18 215.37 19.56 216.57 19.56C217.7 19.56 218.82 19.11 219.93 18.22L220.58 19.66C220.08 20.12 219.45 20.49 218.7 20.76C217.95 21.03 217.18 21.17 216.38 21.17ZM227.78 21.17C226.67 21.17 225.7 20.92 224.85 20.42C224.02 19.93 223.37 19.22 222.9 18.31C222.45 17.38 222.23 16.31 222.23 15.1C222.23 13.88 222.45 12.81 222.9 11.9C223.37 10.97 224.02 10.26 224.85 9.77C225.7 9.27 226.67 9.02 227.78 9.02C228.88 9.02 229.85 9.27 230.7 9.77C231.55 10.26 232.2 10.97 232.65 11.9C233.11 12.81 233.34 13.88 233.34 15.1C233.34 16.31 233.11 17.38 232.65 18.31C232.2 19.22 231.55 19.93 230.7 20.42C229.85 20.92 228.88 21.17 227.78 21.17ZM227.78 19.56C228.93 19.56 229.81 19.18 230.42 18.43C231.04 17.66 231.35 16.55 231.35 15.1C231.35 13.67 231.04 12.58 230.42 11.81C229.79 11.02 228.91 10.63 227.78 10.63C226.64 10.63 225.76 11.02 225.14 11.81C224.51 12.58 224.2 13.67 224.2 15.1C224.2 16.54 224.5 17.64 225.11 18.41C225.74 19.18 226.63 19.56 227.78 19.56ZM249.26 9.02C251.85 9.02 253.14 10.57 253.14 13.66L253.14 21L251.2 21L251.2 13.75C251.2 12.68 251.01 11.89 250.62 11.4C250.25 10.91 249.65 10.66 248.82 10.66C247.85 10.66 247.08 10.99 246.52 11.64C245.96 12.29 245.68 13.19 245.68 14.33L245.68 21L243.74 21L243.74 13.75C243.74 12.66 243.55 11.88 243.16 11.4C242.77 10.91 242.17 10.66 241.34 10.66C240.36 10.66 239.59 10.99 239.03 11.64C238.47 12.29 238.19 13.19 238.19 14.33L238.19 21L236.25 21L236.25 9.31L238.17 9.31L238.17 11.16C238.52 10.47 239.01 9.95 239.63 9.58C240.26 9.21 240.98 9.02 241.79 9.02C243.6 9.02 244.79 9.79 245.37 11.33C245.7 10.61 246.21 10.05 246.9 9.65C247.59 9.23 248.38 9.02 249.26 9.02Z"
      />
    </svg>
  ),
  vCard: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 576 512">
      <path
        fill="currentColor"
        d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
      ></path>
    </svg>
  ),
  medal: (props: LucideProps) => (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
      ></path>
    </svg>
  ),
}
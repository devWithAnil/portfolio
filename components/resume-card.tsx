import { IconType } from "react-icons"

type Props = {
    Icon: IconType,
    role: string
    date?: string
    description?: string
}

const ResumeCard = ({Icon, role, date, description}: Props) => {
  return (
    <div className="mb-5">
        <div className="flex items-start space-x-5 bg-[var(--color-background-offset)] border border-[var(--color-border)] transition-all duration-300 p-5 sm:p-6 rounded-xl hover:border-[var(--color-accent)] group">
            <div className="sm:w-12 sm:h-12 w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="sm:w-6 sm:h-6 w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
                {date && (
                    <span className="inline-block mb-2 px-3 py-1 rounded-full bg-[var(--color-border)] text-[var(--color-text-offset)] text-xs font-semibold">
                        {date}
                    </span>
                )}
                <h1 className="text-[var(--color-text)] text-lg sm:text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {role}
                </h1>
                {description && (
                    <p className="text-[var(--color-text-offset)] text-sm sm:text-base pt-2 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
  )
}

export default ResumeCard

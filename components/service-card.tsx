import Image from "next/image"

type Props = {
    icon: string,
    name: string,
    description: string
}

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-offset)] hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-background)] flex items-center justify-center">
                <Image
                    src={icon}
                    alt="img"
                    width={36}
                    height={36}
                />
            </div>
            <h1 className="mt-5 text-xl md:text-2xl font-bold text-[var(--color-text)]">
                {name}
            </h1>
            <p className="mt-3 text-[var(--color-text-offset)] text-sm leading-relaxed">{description}</p>
        </div>
    )
}

export default ServiceCard
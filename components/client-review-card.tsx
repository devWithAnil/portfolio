import Image from "next/image";

type Props = {
    name: string;
    image: string;
    role: string;
    review?: string;
}

const ClientReviewCard = ({name, image, role, review}: Props) => {
  return (
    <div className="m-2 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-offset)] hover:border-[var(--color-accent)] transition-all duration-300">
        <p className="text-2xl text-[var(--color-accent)] font-serif mb-3">&ldquo;</p>
        <p className="text-sm sm:text-base text-[var(--color-text-offset)] font-medium leading-relaxed">
            {review ?? 'Great experience working together. Highly recommended!'}
        </p>
        <div className="flex items-center mt-5 space-x-3">
            <Image
                src={image || "/default-avatar.png"}
                alt={name}
                width={48}
                height={48}
                className="rounded-full border-2 border-[var(--color-accent)]"
            />
            <div>
                <h1 className="text-[var(--color-accent)] font-bold text-base">{name}</h1>
                <p className="text-[var(--color-text-offset)] text-sm">{role}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewCard

type LogoProps = {
	className?: string;
};

export const Logo = ({ className }: LogoProps) => {
	return (
		<svg
			className={className}
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="100" cy="100" r="100" fill="var(--color-primary)" />
			<circle cx="100" cy="100" r="82" fill="var(--color-primary-offset)" />

			<text
				x="100"
				y="120"
				textAnchor="middle"
				fontSize="78"
				fontWeight="bold"
				fontFamily="Inter, sans-serif"
				fill="white"
			>
				AY
			</text>
		</svg>
	);
};
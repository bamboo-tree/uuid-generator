import { ComponentProps, MouseEventHandler } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, className, onClick, ...rest }: Props) => {
	return (
		<button
			className={cn(
				"text-white bg-green-500 border-2 px-6 py-3 rounded",
				className
			)}
			onClick={onClick}
			{...rest}
		>
			{label}
		</button>
	);
};

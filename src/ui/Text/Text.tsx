type Props = {
	children: string;
};

export const Text = (props: Props) => {
	return <p>{props.children}</p>;
};

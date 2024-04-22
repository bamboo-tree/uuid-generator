import { v4 as uuidv4 } from "uuid";
import { Text, Button } from "../../ui";

export const Generator = () => {
	const handleClick = () => {
		console.log("Click");
		window.location.reload();
	};

	return (
		<div>
			<Text>{uuidv4()}</Text>
			<Button label="Refresh" onClick={handleClick}></Button>
		</div>
	);
};

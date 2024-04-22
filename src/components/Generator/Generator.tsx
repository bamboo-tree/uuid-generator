import { v4 as uuidv4 } from "uuid";
import { Text, Button } from "../../ui";

export const Generator = () => {
	return (
		<div>
			<Text>{uuidv4()}</Text>
			<Button label="Refresh" onClick={null}></Button>
		</div>
	);
};

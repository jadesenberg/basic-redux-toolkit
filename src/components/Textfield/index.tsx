import React from "react";
import { Input } from "antd";

interface Props {
	onChange: (value: string) => void;
	placeholder: string;
	name: string;
	width: string;
	value: string;
}

const Textfield: React.FC<Props> = ({
	value,
	onChange,
	placeholder,
	name,
	width
}) => {
	return (
		<React.Fragment>
			<Input
				size="large"
				placeholder={placeholder}
				onChange={e => onChange(e.target.value)}
				name={name}
				style={{ width }}
				value={value}
			/>
		</React.Fragment>
	);
};

export default Textfield;

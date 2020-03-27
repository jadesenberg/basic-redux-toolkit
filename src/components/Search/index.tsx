import React from "react";
import styled from "styled-components";

interface Props {
	onChange: () => any;
	placeholder: string;
	name: string;
	width: string;
}

const StyledInput = styled.input`
	border: 1px solid #000;
	border-radius: 10px;
	padding: 10px;
	margin: 5px;
	width: 150px;
	box-sizing: border-box;
`;

const Search: React.FC<Props> = ({ onChange, placeholder, name, width }) => {
	return (
		<React.Fragment>
			<StyledInput
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				width={width}
			/>
		</React.Fragment>
	);
};

export default Search;

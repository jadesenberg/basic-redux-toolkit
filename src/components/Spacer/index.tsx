import styled from "styled-components";

interface Props {
	height: string;
}

export const Spacer = styled.div<Props>`
	height: ${p => p.height};
`;

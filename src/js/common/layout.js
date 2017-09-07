import styled from "styled-components";

export const RectBox = styled.div`
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 3px;
`;

export const RectBoxInner = RectBox.extend`
	padding: ${props => props.amount ? props.amount : "10px"};
`;

export const AppendBottom = styled.div`
	margin-bottom: 10px;
`;

export const AppendRight = styled.div`
	margin-right: 10px;
	display:inline;
`;
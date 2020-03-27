import React from "react";
import styled from "styled-components";
import Textfield from "components/Textfield";
import { Button, Switch, Table } from "antd";
import { Spacer } from "components/Spacer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/rootReducer";
import { addItem, deleteItem } from "features/items/ItemSlice";
import { Item } from "features/items/types";

const MainContainer = styled.div``;

const UpperContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: flex-start;
`;

const ItemFormContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
`;

const SearchContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
`;

const SwitchContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 300px;
`;

export default function TabOne() {
	const dispatch = useDispatch();
	const items = useSelector((state: RootState) => state.items.data);
	const [item, setItem] = React.useState("");
	let [finalItems, setItems] = React.useState<Item[]>([]);
	let [toggle, setToggle] = React.useState(false);
	let [search, setSearch] = React.useState("");

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			key: "id"
		},
		{
			title: "Item",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "Action",
			key: "action",
			render: (item: any) => (
				<span>
					<span
						onClick={() => dispatch(deleteItem(item.id))}
						style={{ color: "blue", cursor: "pointer" }}
					>
						Delete
					</span>
				</span>
			)
		}
	];

	const handleSubmit = () => {
		let lastId = Math.max.apply(
			null,
			finalItems.map(item => item.id)
		);
		if (finalItems.length < 1) {
			lastId = 0;
		}

		const finalItem = {
			id: lastId + 1,
			name: item
		};

		dispatch(addItem(finalItem.id, finalItem.name));
	};

	React.useEffect(() => {
		if (!toggle) {
			setItems(items);
		}
	}, [toggle, items]);

	const handleSwitch = (val: boolean, e: any) => {
		var evens = items.filter(x => x.id % 2 === 0);

		setToggle(!toggle);
		setItems(evens);
	};

	const handleSearch = (val: string) => {
		setSearch(val);

		var result = items.filter(x => x.name.includes(val));
		setItems(result);
	};

	return (
		<MainContainer>
			<UpperContainer>
				<ItemFormContainer>
					<Textfield
						name="item"
						placeholder="Insert item"
						width="230px"
						onChange={setItem}
						value={item}
					/>
					<Button size="large" type="primary" onClick={handleSubmit}>
						Add
					</Button>
				</ItemFormContainer>
				<SearchContainer>
					<Textfield
						name="search"
						placeholder="Search"
						width="230px"
						value={search}
						onChange={handleSearch}
					/>
				</SearchContainer>
				<SwitchContainer>
					<label>Hide odd toggle: </label>
					<Switch size="default" onChange={handleSwitch} />
				</SwitchContainer>
			</UpperContainer>
			<Spacer height="30px" />
			<Table columns={columns} dataSource={finalItems} rowKey="id" />
		</MainContainer>
	);
}

import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const SearchButton = ({ onClick }) => {
	return <SearchOutlined style={styleSearchIcon} onClick={onClick} />;
};

const SearchBox = ({ style, placeholder }) => {
	const history = useHistory();
	const [inputValue, setInputValue] = useState('');

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') onMove();
	};

	const onChange = (e) => {
		const { value } = e.target;
		setInputValue(value);
	};

	const onMove = () => {
		history.push(`/search?query=${inputValue}`);
	};

	return <Input style={style} onChange={onChange} placeholder={placeholder} onKeyPress={handleKeyPress} prefix={<SearchButton onClick={onMove} />} />;
};

export default SearchBox;

const styleSearchIcon = {
	fontSize: 26,
	color: 'gray',
	padding: '0 5px 0 0 ',
};

import React from 'react';
import { Layout, Button } from 'antd';
import useStores from '../useStores';
import { useHistory } from 'react-router-dom';
import SearchBox from '../common/components/organisms/Search/SearchBox';
const { Header: AntdHeader } = Layout;

const UserMenu = ({ isLogin, onMove }) => {
	return (
		<div style={{ display: 'flex', lineHeight: '130px' }}>
			<div>
				<Button type='primary' style={styleButton}>
					상품등록
				</Button>
			</div>
			<div>
				{isLogin ? (
					<Button type='primary' style={styleButton}>
						로그아웃
					</Button>
				) : (
					<Button type='primary' onClick={() => onMove('/login')} style={styleButton}>
						로그인
					</Button>
				)}
			</div>
			<div>
				<Button type='primary' style={styleButton}>
					마이 페이지
				</Button>
			</div>
			<div>
				<Button type='primary' style={styleButton}>
					쪽지
				</Button>
			</div>
		</div>
	);
};

const Header = () => {
	const history = useHistory();

	const onMove = (url) => {
		history.push(url);
	};

	const {
		userStore: { isLogin },
	} = useStores();
	return (
		<AntdHeader style={styleHeader}>
			<div style={styleTopMenu}>
				<div></div>
				<div style={{ display: 'flex' }}>
					<div>우리동네 가게</div>
					<div style={{ paddingLeft: '5px' }}>동네 커뮤니티</div>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div className='logo'>
					<img src={`${process.env.PUBLIC_URL}/logo.png`} onClick={() => onMove('/')} style={styleLogo} alt='logo' />
				</div>
				<div style={{ lineHeight: '130px' }}>
					<SearchBox style={styleSearchBox} placeholder='지역/상품을 입력하세요.' />
				</div>
				<UserMenu isLogin={isLogin} onMove={onMove} />
			</div>
		</AntdHeader>
	);
};

export default Header;

const styleHeader = {
	background: 'white',
	height: '178px',
	padding: 0,
	padding: '0 15%',
};

const styleLogo = {
	width: '220px',
	height: '150px',
	paddingBottom: '5px',
	marginTop: '5px',
	cursor: 'pointer',
};

const styleTopMenu = {
	display: 'flex',
	justifyContent: 'space-between',
	height: '28px',
	padding: '0 10px 3px 10px',
	lineHeight: 2,
	borderBottom: '1px solid #d4d4d4',
};

const styleSearchBox = {
	border: '3.5px solid #356211',
	width: '550px',
	height: '40px',
	margin: '0 50px',
};

const styleButton = {
	border: '3.5px solid #356211',
	background: '#356211',
	fontWeight: 'bold',
	padding: '0 10px',
	margin: '0 5px',
};

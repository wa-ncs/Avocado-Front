import React from 'react';
import Footer from './Footer';
import { Layout, Card } from 'antd';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import MapContainer from '../common/components/organisms/KakaoMap/MapContainer';

const { Content } = Layout;
const { Meta } = Card;

const data = [
	{
		name: '군옥수수아몬드',
		url: 'https://placeimg.com/210/210/arch',
		price: 2000,
		place: '논현동',
	},
	{
		name: '잘 익은 아보카도',
		url: 'https://placeimg.com/210/210/animals',
		price: 50000,
		place: '논현동',
	},
	{
		name: '따르릉 자전거',
		url: 'https://placeimg.com/210/210/nature',
		price: 100000,
		place: '반포1동',
	},
	{
		name: '에어팟 프로',
		url: 'https://placeimg.com/210/210/tech',
		price: 250000,
		place: '방배동',
	},
];
const MainCard = ({ title, data }) => {
	return (
		<div style={styleMainCard}>
			<div style={{ display: 'flex', fontSize: '15pt', justifyContent: 'space-between' }}>
				<div>{title}</div>
				<div>more +</div>
			</div>
			<div style={{ display: 'flex' }}>
				{data.map((card) => {
					return (
						<Card key={card.name} hoverable style={styleCard} cover={<img alt={card.name} src={card.url} />}>
							<Meta
								title={
									<div style={{ textAlign: 'center' }}>
										<div>{card.name}</div>
										<div>{card.price}원</div>
									</div>
								}
								description={<div style={{ textAlign: 'center' }}>{card.place}</div>}
							/>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

const Main = () => {
	const history = useHistory();

	const onMove = (url) => {
		history.push(url);
	};

	return (
		<Content style={styleContent}>
			<div>Menu</div>
			<div>
				<MapContainer />
				<MainCard title='인기상품' data={data} />
				<MainCard title='신규상품' data={data} />
				<MainCard title='추천상품' data={data} />
			</div>
			<div>최근본 상품</div>
		</Content>
	);
};

export default Main;

const styleContent = {
	display: 'flex',
	background: 'white',
	padding: '15px 15%',
};

const styleCard = {
	width: 240,
	margin: '0 25px',
};

const styleMainCard = {
	margin: '50px 0',
};

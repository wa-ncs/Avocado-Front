import React from 'react';
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

const Footer = () => {
	return (
		<AntdFooter style={styleFooter}>
			<div>
				<span style={styleSpan}>팀 소개</span>
				<span style={styleSpan}>이용약관</span>
				<span style={styleSpan}>공지사항</span>
				<span style={styleSpan}>1:1 질문</span>
				<span style={styleSpan}>자주묻는질문</span>
				<span style={styleSpan}>개인정보처리방침</span>
			</div>
			<div>Copyright ©Avocado Market. All rights reserved.</div>
		</AntdFooter>
	);
};

export default Footer;

const styleSpan = {
	padding: '0 5px',
	borderRight: '1px solid black',
};

const styleFooter = {
	textAlign: 'center',
};

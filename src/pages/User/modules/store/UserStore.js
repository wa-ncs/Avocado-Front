import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';

@autobind
class UserStore {
	@observable isLogin = false;

	@action
	login = () => {
		this.isLogin = true;
	};

	@action
	logout = () => {
		this.isLogin = false;
	};
}

export default UserStore;

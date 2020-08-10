import UserStore from './pages/User/modules/store/UserStore';
class RootStore {
	constructor() {
		this.userStore = new UserStore(this);
	}
}

export default RootStore;

import { h } from 'preact';
import style from './style.css';
import Testing from '../../components/testing/testing.js'

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component. Hiii</p>
		<Testing />
	</div>
);

export default Home;

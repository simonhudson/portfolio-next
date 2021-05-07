import React, { Component } from 'react';
import { layout } from '~/theme';
import Hero from '~/components/hero';
import Portfolio from '~/components/portfolio';
import Holding from '~/components/holding';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isScrolled: false,
			hidePortfolio: true,
		};
	}

	addEventListeners = () => {
		const html = document.querySelector('html');
		window.addEventListener('scroll', () => this.setState({ isScrolled: html.scrollTop > 2 }));
	};

	componentDidMount = () => {
		// this.addEventListeners();
	};

	render = () => {
		const { props, state } = this;
		return (
			<>
				{props.showHolding && <Holding />}
				{!props.showHolding && (
					<>
						<Hero />
						<layout.Wrap>{!state.hidePortfolio && <Portfolio />}</layout.Wrap>
					</>
				)}
			</>
		);
	};
}
export default Home;

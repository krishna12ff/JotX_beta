import React from 'react';
import './App.css';






function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
          <img src={require('/Users/krishna/jotxp/src/gifa.gif')} alt="loading..." />
					</div>
					<li><a href="#courses">Ethereum</a><img src='https://cdn.publish0x.com/prod/fs/cachedimages/3732638078-f7b004ff68915bc870fb5f4a9b884fc491e5320e12237e20105b25aaf0ceec23.png'/></li>
					<li><a href="#tutorials">Bitcoin</a><img src='https://cdn.publish0x.com/prod/fs/cachedimages/3732638078-480ab7007e9f1b19e932807a96d668508b4ed1b26061a9f1baf98f007f9553be.png'/></li>
					<li><a href="#jobs">News</a><img src='https://cdn.publish0x.com/prod/fs/cachedimages/3732638078-28ab6679cf68d8e817d1b74ee94c270442615b5197db32bbe2993691faa4c597.png'></img></li>
					<li><a href='#student'>Uniswap</a><img src='https://cdn.publish0x.com/prod/fs/cachedimages/3732638078-7745de1e317163ef98fa19e9f9892f41d405533e99bbe711f288758c68436364.png'/></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

      

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
            Bitcoin Ordinals Bounce High In One Week
						</h1>
						<p class="text-small">
            The combined market cap of Ordinals, BRC-20 tokens, has risen 682 percent to $137 million in only one week. Of course, what goes up must come down. And likely will go up again.

Ethereum network fees jump 153 percent in 1 month. Ethereum gas fees have been high for a long time, but when they go higher, it benefits Layer-2 solutions like Arbitrum and Optimism. Both Binance and Coinbase see large outflows of staked ether. The Shanghai upgrade, a much anticipated Ethereum update, made it possible for ETH2 stakers to get their ETH back, and that's what they're doing. Consider this a dip before the next big bull run.
Coinbase has moved offshore with an international derivatives exchange.
						</p>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							JavaScript Tutorial
						</h1>
						<p class="text-small">
							JavaScript is the world most popular
							lightweight, interpreted compiled
							programming language. It is also
							known as scripting language for
							web pages. It is well-known for
							the development of web page many
							non-browser environments also use
							it. JavaScript can be used for
							Client-side developments as well
							as Server-side developments.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Java Programming Language
						</h1>
						<p class="text-small">
							When compared with C++, Java codes
							are generally more maintainable
							because Java does not allow many
							things which may lead to
							bad/inefficient programming if used
							incorrectly. For example,
							non-primitives are always references
							in Java. So we cannot pass large
							objects (like we can do in C++) to
							functions, we always pass references
							in Java. One more example, since there
							are no pointers, bad memory access
							is also not possible. When compared
							with Python, Java kind of fits between
							C++ and Python. The programs are written
							in Java typically run faster than
							corresponding Python programs and slower
							than C++. Like C++, Java does static
							type checking, but Python does not.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							What is Machine Learning?
						</h1>
						<p class="text-small">
							Machine Learning is the field of study
							that gives computers the capability to
							learn without being explicitly
							programmed. ML is one of the most exciting
							technologies that one would have ever
							come across. As it is evident from the
							name, it gives the computer that makes
							it more similar to humans: The ability
							to learn. Machine learning is actively
							being used today, perhaps in many more
							places than one would expect.
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App

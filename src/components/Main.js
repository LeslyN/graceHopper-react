import React, {Component} from 'react';
import './css/main.css';

class Main extends Component {
  render() {
    return (
      <main className="biography container-fluid text-justify pr-4">
		    <p className="text-justify">
          <strong>Grace Brewster Murray Hopper</strong>(née <strong>Murray</strong>; 
          December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.
          One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. 
          She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.
		    </p>
    		<p className="text-justify">Hopper had attempted to enlist in the Navy during World War II, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. 
          Hopper began her computing career when she worked on the Harvard Mark I team that was led by <a href="https://en.wikipedia.org/wiki/Howard_H._Aiken">Howard H. Aiken</a>. 
          In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the <a href="https://en.wikipedia.org/wiki/UNIVAC_I">UNIVAC I</a> computer in 1944. 
          It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. 
          By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.
        </p>

		    <p className="text-justify">In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like <a href="https://en.wikipedia.org/wiki/FLOW-MATIC">FLOW-MATIC </a>. 
          In 1959, she participated in the <a href="https://en.wikipedia.org/wiki/CODASYL">CODASYL</a> consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the <a href="https://en.wikipedia.org/wiki/COBOL">COBOL</a> language, 
          which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. 
          She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.
        </p>
        
        <div className="list-num">
          <p className="font-weight-bold pt-1 text-center">Contents</p>
          <ol className="text-left">
            <li>Early life and education</li>
            <li>Career
              <ol>
                <li>World War II</li>
                <li>UNIVAC</li>
                <li className="text-uppercase">Cobol</li>
                <li>Standards</li>
              </ol>
            </li>
            <li>Retirement</li>
            <li>Post retirement</li>
            <li>Anecdotes</li>
            <li>Death</li>
            <li>Dates of rank</li>
            <li>Awards and honors
              <ol>
                <li>Military awards</li>
                <li>Other awards</li>
              </ol>
            </li>
            <li>Legacy
              <ol>
                <li>Places</li>
                <li>Programs
                  <ol>
                    <li>Grace Hopper Celebration of Women in Computing</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Obituary notices</li>
            <li>See also</li>
            <li>References</li>
            <li>Further reading</li>
            <li>External links</li>
          </ol>
        </div>
        <h2>Early life and education</h2>
        <hr/>
        <p>Hopper was born in New York City. She was the eldest of three children. Her parents, Walter Fletcher Murray and Mary Campbell Van Horne, 
          were of Scottish and Dutch descent, and attended West End Collegiate Church. Her great-grandfather, Alexander Wilson Russell, 
          an admiral in the US Navy, fought in the Battle of Mobile Bay during the Civil War.
        </p>
        <p>Grace was very curious as a child; this was a lifelong trait. At the age of seven, 
          she decided to determine how an alarm clock worked and dismantled seven alarm clocks before her mother realized what she was doing (she was then limited to one clock).
          For her preparatory school education, she attended the Hartridge School in Plainfield, New Jersey. 
          Hopper was initially rejected for early admission to Vassar College at age 16 (her test scores in Latin were too low), but she was admitted the following year. 
          She graduated Phi Beta Kappa from Vassar in 1928 with a bachelor's degree in mathematics and physics and earned her master's degree at Yale University in 1930.
        </p>
        <p>In 1934, she earned a Ph.D. in mathematics from Yale under the direction of Øystein Ore. Her dissertation, New Types of Irreducibility Criteria, 
          was published that same year. Hopper began teaching mathematics at Vassar in 1931, and was promoted to associate professor in 1941.
          She was married to New York University professor Vincent Foster Hopper (1906–76) from 1930 until their divorce in 1945. She did not marry again, 
          but chose to retain his surname.
        </p>
        <blockquote cite="http://www.azquotes.com/quote/553884">
          <p>The most damaging phrase in the language is: `It's always been done that way.'</p>
        </blockquote>
	    </main>
    );
  }
}

export default Main;
import React, {Component} from 'react';
import './css/main.css';

class Main extends Component {
  render() {
    return (
      <main className="biography">
		    <p>
          <strong>Grace Brewster Murray Hopper</strong>(née <strong>Murray</strong>; 
          December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.[1] 
          One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. 
          She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.
		    </p>
    		<p>Hopper had attempted to enlist in the Navy during World War II, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. 
          Hopper began her computing career when she worked on the Harvard Mark I team that was led by <a href="https://en.wikipedia.org/wiki/Howard_H._Aiken">Howard H. Aiken</a>. 
          In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the <a href="https://en.wikipedia.org/wiki/UNIVAC_I">UNIVAC I</a> computer in 1944. 
          It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. 
          By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.
        </p>

		    <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like <a href="https://en.wikipedia.org/wiki/FLOW-MATIC">FLOW-MATIC </a>. 
          In 1959, she participated in the <a href="https://en.wikipedia.org/wiki/CODASYL">CODASYL</a> consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the <a href="https://en.wikipedia.org/wiki/COBOL">COBOL</a> language, 
          which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. 
          She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.</p>

        <h3>Career</h3>
        <ol>
          <li>World War II</li>
          <li>UNIVAC</li>
          <li>COBOL</li>
          <li>Standards</li>
        </ol>

        <h2>Phrase</h2>
        <blockquote cite="http://www.azquotes.com/quote/553884">
          <p>The most damaging phrase in the language is: `It's always been done that way.'</p>
        </blockquote>
	    </main>
    );
  }
}

export default Main;
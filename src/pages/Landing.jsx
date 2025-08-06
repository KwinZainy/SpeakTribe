import React from 'react'
import Nav from '../static/Nav'

const Landing = () => {
  return (
    <div>
      <Nav/>
      <section>
        <img src="./Untitled.png" alt="" />
        </section> 
        <p>Popular Languages</p> 
        <section>
          <div>
            <img src="./yorubaMan.png" alt="" />
            <p>Yoruba Fun Facts</p>
            <p>Yoruba is a tonal language with 3 tones: high, mid, and low.</p>
            <p>That means the same spelling can have different meanings depending on how it's said!</p>
            <ul>
              <li>“Òwò” = broom</li>
              <li>“Ówó” = money</li>
              <li>“Ọwọ́” = hand</li>
            </ul>
            <p>So you're not just learning words — you're learning how to sing the language!</p>
          </div>
          <div>
            <img src="./igboWoman.png" alt="" />
            <p>Igbo Fun Facts</p>
            <p>Igbo is also a tonal language like Yoruba, but with two main tones (high and low).</p>
            <p>The meaning of a word totally changes depending on the tone!</p>
            <ul>
              <li>“Akwụkwọ” = book</li>
              <li>“Àkụ́kwọ́” = leaf</li>
              <li>“Àkụ̀” = wealth</li>
            </ul>
            <p>So mastering tone = mastering meaning.</p>
          </div>
          <div>
            <img src="./hausa.jpg" alt="" />
            <p>Hausa Fun Facts</p>
            <p>You Can Learn It With the Alphabet You Already Know</p>
            <p>Hausa is written in Latin script (just like English), called Boko — easy for beginners!</p>
            <ul>
              <li>Example: Ina kwana? = Good morning</li>
              <li>Sannu = Hello</li>
            </ul>
            <p> No new script to learn (unless you want to explore the Ajami Arabic script too!).</p>
          </div>
        </section>
        <section>
          <button>
            Start Now
          </button>
        </section>
    </div>
  )
}

export default Landing
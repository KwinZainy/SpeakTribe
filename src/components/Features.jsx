
import React from 'react'

const Features = () => {
    const ourFeatures = [
       {
        title:"🎧 Audio Support",
        p:"Hear it. Feel it. Speak it.",
        text:'Crystal-clear audio for every phrase, so you learn the correct pronunciation and natural flow of your local language.'
       },
       {
        title: '🤖 AI Chatbot',
        p:'Practice with your virtual language buddy.',
        text:'Have real conversations in Yoruba, Igbo, or Hausa — powered by smart AI that responds just like a native speaker.'
       },
       {
        title:'🧠 Interactive Quizzes',
        p:'Play. Learn. Remember.',
        text:"Fun and smart quizzes that reinforce what you've learned, helping you stay sharp and confident."
       },
       {
        title:'🗣️ Cultural Phrases & Proverbs',
        p:'Go beyond words.',
        text:"Learn deep cultural expressions, wise proverbs, and local sayings that bring the language — and culture — to life."
       },
       {
        title:'📈 Progress Tracking',
        p:'Stay on track. Celebrate your wins.',
        text:"Track your journey, set goals, and see how far you've come. Every step forward counts."
       },
    ]
  return (
    <div>
        <h1>Our Unique Voice</h1>
        <section>
            {ourFeatures.map((elements,index)=>(
                <div key={index}>
                    <p>{elements.title}</p>
                    <p>{elements.p}</p>
                    <p>{elements.text}</p>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Features
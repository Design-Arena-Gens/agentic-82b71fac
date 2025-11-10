'use client';
import { useState } from 'react';
import './styles.css';

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isReading, setIsReading] = useState(false);

  const story = [
    {
      title: "The Barren Fields",
      content: `In the remote village of Kalpur, where dust roads wound between modest mud homes, lived Rajan—a farmer whose calloused hands told stories of endless toil. His three acres of ancestral land, once fertile, had become stubborn and unyielding. Year after year, the harvest grew thinner, barely enough to feed his wife Meera and their two children.

The monsoons were unpredictable. When they came too early, his seedlings drowned; too late, and they withered under the merciless sun. Rajan watched wealthier farmers with larger holdings survive these uncertainties while he sank deeper into debt. The local moneylender's interest compounded like his worries, and some nights, Rajan stared at the ceiling, wondering if he should abandon farming altogether and seek work in the distant city.`,
      image: "🌾"
    },
    {
      title: "The Turning Point",
      content: `Everything changed the day a government agricultural officer visited Kalpur. Most farmers dismissed the meeting—they'd heard empty promises before. But Rajan, desperate and curious, stayed to listen.

The officer spoke of drip irrigation systems that used water efficiently, of crop rotation to restore soil nutrients, and of organic composting techniques. He mentioned demonstration farms where farmers could learn these methods. Rajan's heart raced. Could these techniques work on his exhausted land?

That night, he shared his thoughts with Meera. "We have nothing to lose," she said quietly, her eyes reflecting both fear and hope. "We're already at the bottom. The only way is up."`,
      image: "💡"
    },
    {
      title: "The Learning Journey",
      content: `At dawn, Rajan began his journey to the demonstration farm, two villages away. For three months, every alternate day, he walked the six kilometers to observe and learn.

He discovered that his biggest mistake had been monocropping—planting only wheat season after season, which depleted the soil. The instructors taught him about leguminous crops like lentils that fixed nitrogen in the soil naturally. He learned to create vermicompost from kitchen waste and cattle dung, transforming refuse into rich fertilizer.

The drip irrigation system fascinated him most. Instead of flooding his fields and wasting precious water, he could deliver water directly to plant roots through perforated pipes. The initial cost seemed impossible—but then he learned about government subsidies that covered 60% of the expense.`,
      image: "📚"
    },
    {
      title: "Small Beginnings",
      content: `Rajan started small. He couldn't afford the full drip irrigation system yet, but he could begin composting. He dug pits in the corner of his field and enlisted his children to help collect organic waste. Within weeks, earthworms transformed garbage into black gold.

He applied for a government loan for the irrigation system. The paperwork was daunting, but with the agricultural officer's help, he navigated it. While waiting for approval, he divided his field into sections—rotating wheat with lentils and chickpeas, exactly as he'd learned.

The first season was terrifying. What if he'd made everything worse? What if the new methods failed and he lost even the meager harvest he usually managed? Meera held his hand and reminded him: "We decided to climb up, remember?"`,
      image: "🌱"
    },
    {
      title: "The First Harvest",
      content: `Nine months later, Rajan stood in his field, barely believing his eyes. The wheat stood taller and fuller than he'd seen in a decade. The soil, enriched by compost and the nitrogen-fixing lentils he'd planted before, had responded beautifully.

The drip irrigation system, approved and installed just before the planting season, had been a game-changer. He'd used 40% less water than traditional flooding methods, yet his crop thrived. When harvest time came, his yield had increased by 60%.

For the first time in five years, Rajan not only fed his family but had surplus to sell. He paid off a portion of his debt. That night, Meera cooked a feast, and their children danced in the courtyard. Tears streamed down Rajan's weathered face—tears of joy, relief, and vindication.`,
      image: "🌾✨"
    },
    {
      title: "Sharing the Harvest",
      content: `Word spread quickly through Kalpur. Skeptical neighbors who'd mocked Rajan's "city ideas" now came asking questions. How did he do it? Could they learn too?

Rajan remembered his own desperation, the darkness of those hopeless nights. He invited his neighbors to his field, showed them his compost pits, explained crop rotation, demonstrated the drip irrigation valves. Some listened; others remained doubtful.

His childhood friend Prakash was the first to try. Then old Mahesh, who'd farmed for forty years. Slowly, a small group formed—five farmers willing to risk change. Rajan helped them with paperwork for subsidies, shared his compost, even offered to let them practice on a small section of his land.

The agricultural officer, delighted to see his teachings taking root, visited more frequently, bringing new ideas: intercropping vegetables between main crops, installing simple rainwater harvesting systems, using neem-based organic pesticides.`,
      image: "🤝"
    },
    {
      title: "The Village Transforms",
      content: `Three years passed. Kalpur was changing.

Prakash's field, once as barren as Rajan's had been, now flourished with multiple crops. Mahesh had dug a small pond for rainwater harvesting, which sustained his vegetables through dry spells. The five farmers became fifteen, then twenty-five.

The village that once sent its young men to cities for work now kept them home. Rajan's son, who'd dreamed of escaping farming, now studied agricultural science, excited to bring modern techniques back to Kalpur.

The collective success of the farmers attracted a small agricultural cooperative. They offered fair prices, cutting out exploitative middlemen. Income rose. Debt decreased. New homes were built; children stayed in school longer.

Rajan himself became a master trainer, certified by the government to teach other villages. The poor farmer who once couldn't feed his family now traveled to neighboring districts, sharing the knowledge that had transformed his life.`,
      image: "🏘️"
    },
    {
      title: "The Seeds of Tomorrow",
      content: `On the fifth anniversary of his first successful harvest, Rajan stood before a gathering of over a hundred farmers from seven villages. The district collector had come to honor him with an award for agricultural innovation and community leadership.

"I was nothing special," Rajan told the crowd, his voice steady but humble. "I was desperate, drowning, ready to give up. But I learned something crucial: poverty isn't a lack of hard work—we all worked hard. Poverty is often a lack of knowledge, resources, and opportunity."

He held up a handful of soil, rich and dark. "This earth wants to give. We just need to learn how to ask properly. Every technique I learned, I learned because someone took the time to teach me, and because I had the courage to try when I was terrified of failing."

Meera watched from the audience, pride shining in her eyes. Their children sat beside her—their daughter now studying environmental science, their son apprenticing at the demonstration farm.

"The greatest harvest," Rajan concluded, "isn't what we take from the land. It's what we plant in each other—knowledge, hope, possibility. When we lift ourselves, we must reach back and lift others. That's how a village becomes a community. That's how a community becomes a future."

The applause echoed across the fields—fields that had once been barren but now stood verdant, a testament to what perseverance, learning, and shared growth could achieve.`,
      image: "🌟"
    },
    {
      title: "The Message",
      content: `**Rajan's journey teaches us:**

**Perseverance isn't just enduring hardship—it's actively seeking solutions.** He didn't just survive his struggles; he looked for ways to transform them.

**Knowledge is the greatest resource.** The techniques that changed Rajan's life weren't secrets—they were freely available. He simply had to be willing to learn.

**Small changes compound.** Rajan started with composting, added crop rotation, then irrigation. Each small improvement built on the last.

**Success multiplies when shared.** By teaching others, Rajan didn't diminish his own success—he amplified it, creating a community where everyone could thrive.

**The soil of opportunity exists everywhere.** Rajan didn't move to a better place or wait for perfect conditions. He improved what he had, where he was.

When you face your own barren fields—whether literal or metaphorical—remember: the seeds of transformation are already in your hands. You need only the courage to plant them, the patience to tend them, and the generosity to share the harvest.

*Growth is not just about rising—it's about lifting as you climb.*`,
      image: "🌍"
    }
  ];

  const startReading = () => {
    setIsReading(true);
    setCurrentChapter(0);
  };

  const nextChapter = () => {
    if (currentChapter < story.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const resetStory = () => {
    setIsReading(false);
    setCurrentChapter(0);
  };

  if (!isReading) {
    return (
      <div className="landing">
        <div className="hero">
          <div className="hero-icon">🌾</div>
          <h1 className="hero-title">Seeds of Change</h1>
          <p className="hero-subtitle">
            A Story of Perseverance, Innovation, and Community
          </p>
          <button className="start-button" onClick={startReading}>
            Begin the Journey
          </button>
        </div>
        <div className="preview">
          <p>
            Follow Rajan, a struggling farmer in the village of Kalpur, as he
            transforms his barren fields and his community through courage,
            learning, and the power of shared knowledge.
          </p>
        </div>
      </div>
    );
  }

  const chapter = story[currentChapter];

  return (
    <div className="story-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentChapter + 1) / story.length) * 100}%` }}
        />
      </div>

      <div className="chapter">
        <div className="chapter-icon">{chapter.image}</div>
        <h2 className="chapter-title">{chapter.title}</h2>
        <div className="chapter-number">Chapter {currentChapter + 1} of {story.length}</div>
        <div className="chapter-content">
          {chapter.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={idx} className="section-title">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
              return <p key={idx} className="italic-text">{paragraph.replace(/\*/g, '')}</p>;
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </div>

      <div className="navigation">
        <button
          className="nav-button"
          onClick={prevChapter}
          disabled={currentChapter === 0}
        >
          ← Previous
        </button>

        <button
          className="nav-button secondary"
          onClick={resetStory}
        >
          Start Over
        </button>

        {currentChapter < story.length - 1 ? (
          <button
            className="nav-button"
            onClick={nextChapter}
          >
            Next →
          </button>
        ) : (
          <button
            className="nav-button complete"
            onClick={resetStory}
          >
            Read Again
          </button>
        )}
      </div>
    </div>
  );
}

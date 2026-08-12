import { useState } from 'react'
import headshotImg from './imports/newheadshotletsgo.png'
import microsoftImg from './imports/Microsoft.png'
import garminImg from './imports/Screenshot_2026-08-12_at_12.26.53_PM.png'
import purdueImg from './imports/PurdueAddiction.png'

const BG = '#2b2b2b'
const BG_CARD = '#333333'
const BG_CARD2 = '#363636'
const SAND = '#d0cccb'
const SAND_DIM = '#8a8280'
const BLUE = '#1654fe'
const WHITE = '#ffffff'

const FIT_CARDS = [
  {
    num: '01',
    title: 'Designing for Wellbeing',
    body: 'At Garmin, I designed experiences for runners, cyclists, athletes, parents, coaches, and everyday people trying to build healthier habits. Designing for health and wellness is a personal interest and passion of mine.',
  },
  {
    num: '02',
    title: 'I Care About Ethical Design',
    body: "One of my favorite projects at Garmin was helping design a new coaching platform. Not only was I designing a new app from scratch, I was advocating for athlete privacy, healthy coach-athlete relationships, and preventing technology from encouraging over-monitoring or unhealthy data obsession — something I was seeing firsthand as a D1 runner in college.\n\nAt IBM, I spent four years designing AI experiences and leading conversations around responsible AI, transparency, and ethics.",
  },
  {
    num: '03',
    title: 'Consumer Apps + Enterprise Products',
    body: "I've designed across both. At Garmin, I worked on consumer mobile apps and wearables. At IBM, I facilitated 45+ design thinking workshops, led UX for enterprise AI products, conducted user research, designed dashboards, and partnered closely with engineers, product managers, and executives to solve messy, complex problems.",
  },
  {
    num: '04',
    title: 'Startup Mindset',
    body: "I've worked in startups, enterprise consulting, and everything in between. I'm comfortable wearing multiple hats and working in ambiguity.",
  },
]

const PROJECTS = [
  {
    label: 'Technology Addiction',
    company: 'Purdue University',
    body: "Designed mobile concepts that intentionally reduced screen time when studying or winding down before bed — using friction instead of engagement to \"force\" users to put their phones down. Would love to walk through this project with you as it was a class project and not on my portfolio.",
    img: purdueImg,
    alt: 'Phone mockups showing Deep Work Mode and anti-addiction app concepts',
    tag: 'Anti-Phone Design',
  },
  {
    label: 'Garmin Coaching',
    company: 'Garmin',
    body: 'Helped design a coaching platform from the ground up, simplifying communication between athletes and coaches while advocating for ethical use of athlete data and healthier coaching experiences.',
    img: garminImg,
    alt: 'Garmin Run Coach app and watch showing workout tracking interface',
    tag: 'Health + Wearables',
  },
  {
    label: 'Microsoft Care Team',
    company: 'Microsoft',
    body: 'Designed a caregiver platform focused on reducing isolation, creating shared experiences, and supporting better health outcomes for caregivers and families.',
    img: microsoftImg,
    alt: 'Microsoft Care Team app screens showing family sharing and caregiver features',
    tag: 'Healthcare UX',
  },
]

const PERSONAL = [
  "I'm excited to contribute to an innovative, young work culture in Chicago (where I already live!). I bring bright ideas, a fresh perspective, and firsthand experience as a Gen Zer who understands the current digital landscape.",
  "I own a Brick! My dad (UW Madison grad) bought each person in my family a Brick because he believes in the mission so strongly!",
  "I'm trying to return to my middle school self who read books and went outside to entertain herself, and didn't own a phone or even watch tv. My favorite part of the day is my run because it's the one hour I'm not looking at a screen and am left alone with my thoughts.",
  "I have explored and tried imposing other digital restrictions upon myself, like using screen time, deleting social media apps altogether, and challenging myself to stop using headphones on my commute to work on the train.",
]

export default function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: 'var(--font-body)', backgroundColor: BG, color: SAND, minHeight: '100vh' }}>

      {/* ── TOP BAR ── */}
      <div style={{
        borderBottom: `1px solid rgba(208,204,203,0.1)`,
        padding: '14px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: SAND_DIM, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Leah Neustedter · Product Designer · 2026
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(22,84,254,0.12)', borderRadius: 999, padding: '6px 14px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: BLUE }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: BLUE, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Open to Opportunities
          </span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ padding: '80px 40px 64px', borderBottom: `1px solid rgba(208,204,203,0.1)`, position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', top: -20, left: -10, right: 0, overflow: 'hidden',
          pointerEvents: 'none', userSelect: 'none',
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(120px, 26vw, 380px)',
          letterSpacing: '-0.02em', lineHeight: 1,
          color: 'rgba(22,84,254,0.04)',
        }}>
          BRICK
        </div>

        {/* two-column: left=text, right=photo */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 56, alignItems: 'center', maxWidth: 1200 }} className="hero-grid">

          {/* LEFT: all text stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Credential bar */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 0,
              background: BG_CARD, borderRadius: 12,
              marginBottom: 32, overflow: 'hidden', alignSelf: 'flex-start',
            }}>
              {['IBM Product Designer', 'Former Garmin UX Designer', 'B.S. In UX Design'].map((label, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(208,204,203,0.15)' }} />}
                  <div style={{ padding: '10px 18px' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontWeight: i === 0 ? 600 : 400,
                      fontSize: 13, color: i === 0 ? WHITE : SAND, letterSpacing: '0.01em',
                    }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* headline */}
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.015em', margin: '0 0 20px' }}>
              <span style={{ display: 'block', fontSize: 'clamp(56px, 11vw, 148px)', color: WHITE }}>WHY YOU</span>
              <span style={{ display: 'block', fontSize: 'clamp(56px, 11vw, 148px)', WebkitTextStroke: `1.5px ${SAND}`, color: 'transparent' }}>SHOULD</span>
              <span style={{ display: 'block', fontSize: 'clamp(56px, 11vw, 148px)', color: BLUE }}>HIRE ME.</span>
            </h1>

            {/* subheader */}
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 400,
              fontSize: 'clamp(15px, 1.8vw, 20px)', color: SAND_DIM,
              margin: '0 0 20px', fontStyle: 'italic',
            }}>
              As a fellow Wisconsin native and 26 year old living in Chicago
            </p>

            {/* intro */}
            <p style={{ fontSize: 16, lineHeight: 1.8, color: SAND, fontWeight: 300, margin: 0 }}>
              No, I didn't go to UW Madison — I went to Purdue because they had one of the best UX Design programs in the country{' '}
              <em style={{ color: SAND_DIM }}>(sorry)</em>. If you can get past that, then here is why you should definitely hire me as a Product Designer.
            </p>
          </div>

          {/* RIGHT: headshot */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 'clamp(200px, 22vw, 300px)',
            aspectRatio: '3 / 4',
            borderRadius: 24,
            overflow: 'hidden',
            flexShrink: 0,
            border: `1px solid rgba(208,204,203,0.1)`,
            background: BG_CARD,
          }}>
            <img
              src={headshotImg}
              alt="Leah Neustedter"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
          </div>

        </div>
      </section>

      {/* ── WHY BRICK ── */}
      <section style={{
        padding: '72px 40px',
        borderBottom: `1px solid rgba(208,204,203,0.1)`,
        display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56, alignItems: 'start',
      }} className="two-col-grid">
        <div style={{ paddingTop: 6 }}>
          <div style={{ width: 28, height: 3, backgroundColor: BLUE, borderRadius: 2, marginBottom: 18 }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 0.92,
            letterSpacing: '-0.01em', color: WHITE, margin: 0,
          }}>
            WHY<br />BRICK?
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: SAND, fontWeight: 300, margin: 0 }}>
            While most of the tech industry has spent years designing products for the highest engagement, I spent much of my education thinking about the opposite. How can we design technology to{' '}
            <strong style={{ color: WHITE, fontWeight: 500 }}>respect people's attention</strong> instead of competing for it? How can we build products that improve people's lives while also balancing business needs and being financially successful?
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: SAND, fontWeight: 300, margin: 0 }}>
            At Purdue, I studied technology addiction, persuasive design, dark patterns, ethical UX, and digital wellbeing. One of my favorite projects challenged us to design technology that actually encouraged people to{' '}
            <strong style={{ color: WHITE, fontWeight: 500 }}>put their phones down</strong>, not pick them up. At IBM, I found myself designing for AI, where I felt the tension between trying to advocate for AI ethics while designing a technology that contributed to people getting lazier and relying on technology more.
          </p>
          <div style={{
            background: 'rgba(22,84,254,0.08)', border: `1px solid rgba(22,84,254,0.2)`,
            borderRadius: 16, padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <div style={{
              background: BLUE, borderRadius: 8, padding: '4px 10px', flexShrink: 0,
              fontFamily: 'var(--font-mono)', fontSize: 10, color: WHITE,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2,
            }}>
              Fun fact
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: SAND, fontWeight: 300, margin: 0 }}>
              I designed "anti-phone" concepts years before I knew Brick existed.{' '}
              <em style={{ color: SAND_DIM }}>(See my projects below.)</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY I'M A GOOD FIT ── */}
      <section style={{ padding: '72px 40px', borderBottom: `1px solid rgba(208,204,203,0.1)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <div style={{ width: 28, height: 3, backgroundColor: BLUE, borderRadius: 2 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: SAND_DIM, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Why I'm a Good Fit
          </span>
        </div>

        <div className="fit-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {FIT_CARDS.map((c, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                background: activeCard === i ? BG_CARD2 : BG_CARD,
                borderRadius: 20,
                padding: '28px 26px 32px',
                cursor: 'default',
                transition: 'all 0.22s ease',
                border: `1px solid ${activeCard === i ? 'rgba(22,84,254,0.3)' : 'rgba(208,204,203,0.07)'}`,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* number accent */}
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 80, lineHeight: 1, letterSpacing: '-0.04em',
                color: activeCard === i ? 'rgba(22,84,254,0.12)' : 'rgba(208,204,203,0.05)',
                position: 'absolute', top: -8, right: 16,
                transition: 'color 0.22s ease', userSelect: 'none', pointerEvents: 'none',
              }}>
                {c.num}
              </div>

              {/* top rule in blue */}
              <div style={{
                width: activeCard === i ? 40 : 24, height: 2,
                backgroundColor: BLUE, borderRadius: 2,
                marginBottom: 20, transition: 'width 0.3s ease',
              }} />

              <h3 style={{
                fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: 15, color: WHITE, margin: '0 0 12px',
                lineHeight: 1.3,
              }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: SAND_DIM, fontWeight: 300, margin: 0, whiteSpace: 'pre-line' }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ padding: '72px 40px', borderBottom: `1px solid rgba(208,204,203,0.1)` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 28, height: 3, backgroundColor: BLUE, borderRadius: 2 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: SAND_DIM, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Relevant Projects
            </span>
          </div>
          <a
            href="https://leahneustedter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, color: BLUE,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none',
              background: 'rgba(22,84,254,0.1)', borderRadius: 999,
              padding: '7px 16px', border: `1px solid rgba(22,84,254,0.25)`,
            }}
          >
            Full portfolio at leahneustedter.com →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{
              borderRadius: 20, overflow: 'hidden',
              border: `1px solid rgba(208,204,203,0.08)`,
              background: BG_CARD, display: 'flex', flexDirection: 'column',
            }}>
              {/* image */}
              <div style={{ height: 220, backgroundColor: '#1e1e1e', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${BG_CARD} 0%, transparent 55%)` }} />
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'rgba(22,84,254,0.9)', backdropFilter: 'blur(8px)',
                  borderRadius: 999, padding: '4px 12px',
                  fontFamily: 'var(--font-mono)', fontSize: 10, color: WHITE,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  {p.tag}
                </div>
              </div>
              {/* text */}
              <div style={{ padding: '20px 22px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: BLUE, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {p.company}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
                  textTransform: 'uppercase', letterSpacing: '0.02em',
                  color: WHITE, margin: 0, lineHeight: 1.1,
                }}>
                  {p.label}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: SAND_DIM, fontWeight: 300, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY WE'LL GET ALONG ── */}
      <section style={{
        padding: '72px 40px',
        borderBottom: `1px solid rgba(208,204,203,0.1)`,
        display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56, alignItems: 'start',
      }} className="two-col-grid">
        <div style={{ paddingTop: 6 }}>
          <div style={{ width: 28, height: 3, backgroundColor: BLUE, borderRadius: 2, marginBottom: 18 }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 0.95,
            letterSpacing: '-0.01em', color: WHITE, margin: 0,
          }}>
            WHY<br />WE'LL<br />GET<br />ALONG
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {PERSONAL.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              background: BG_CARD, borderRadius: 14, padding: '16px 20px',
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: 'rgba(22,84,254,0.15)', border: `1px solid rgba(22,84,254,0.3)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: BLUE }} />
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: SAND, fontWeight: 300, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ padding: '80px 40px', borderBottom: `1px solid rgba(208,204,203,0.1)`, background: '#252525' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(28px, 4.5vw, 56px)',
            lineHeight: 1.1, letterSpacing: '-0.01em', color: WHITE, marginBottom: 20,
          }}>
            "Good design, when done well, should be invisible."
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: SAND_DIM, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 20 }}>
            — Jared Spool
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: SAND_DIM, fontWeight: 300, maxWidth: 480, margin: '0 auto' }}>
            I believe well-designed technology helps users accomplish their needs — and then gets out of the way.
          </p>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section style={{ padding: '72px 40px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{ width: 28, height: 3, backgroundColor: BLUE, borderRadius: 2 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: BLUE, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Let's Chat
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(52px, 10vw, 130px)', lineHeight: 0.9,
          letterSpacing: '-0.02em', color: WHITE, margin: '0 0 40px',
        }}>
          LET'S <span style={{ color: BLUE }}>CHAT.</span>
        </h2>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
          <a
            href="https://leahneustedter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
              color: WHITE, textDecoration: 'none',
              background: BLUE, borderRadius: 999, padding: '12px 28px',
              transition: 'opacity 0.2s',
            }}
          >
            leahneustedter.com
          </a>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 14, color: SAND,
            background: BG_CARD, borderRadius: 999, padding: '12px 28px',
            border: `1px solid rgba(208,204,203,0.1)`,
          }}>
            linkedin.com/in/leahneustedter
          </div>
        </div>

        <div style={{
          borderTop: `1px solid rgba(208,204,203,0.1)`, paddingTop: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: SAND_DIM, letterSpacing: '0.1em' }}>
            Leah Neustedter · Product Designer · Chicago, IL · 2026
          </span>
          <div style={{ display: 'flex', gap: 6 }}>
            {[1, 0.5, 0.2].map((o, i) => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: BLUE, opacity: o }} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 780px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            width: 160px !important;
            margin: 0 auto;
          }
        }
        @media (max-width: 680px) {
          .two-col-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .fit-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 420px) {
          .fit-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

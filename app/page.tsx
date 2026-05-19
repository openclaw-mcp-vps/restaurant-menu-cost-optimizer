export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Restaurant Profit Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate real profit per{' '}
          <span className="text-[#58a6ff]">menu item</span>{' '}automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Track ingredient costs and portion sizes to see exactly which dishes make money — and which ones quietly drain your margins.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🧾', title: 'Ingredient Cost Tracking', desc: 'Log every ingredient with unit costs and update prices as suppliers change.' },
            { icon: '🍽️', title: 'Recipe Management', desc: 'Build recipes from your ingredient library and set exact portion sizes.' },
            { icon: '📊', title: 'Profit Dashboard', desc: 'See margin, food cost %, and net profit for every item on your menu.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] mb-6">per month, per restaurant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited menu items & recipes',
              'Real-time profit margin calculations',
              'Ingredient cost history & alerts',
              'Food cost % benchmarking',
              'CSV export for your accountant',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it calculate profit per menu item?',
              a: 'You enter each ingredient with its cost per unit. When you build a recipe, you specify how much of each ingredient goes into one serving. The app multiplies quantities by costs, sums them up, and subtracts from your menu price to show exact profit and margin.',
            },
            {
              q: 'What if my ingredient prices change?',
              a: 'Just update the ingredient price and every recipe using that ingredient recalculates instantly. You can also set price alerts so you know when a cost spike is hurting your margins.',
            },
            {
              q: 'Can I use this for multiple locations?',
              a: 'The $15/mo plan covers one restaurant location. If you run multiple locations, each needs its own subscription since ingredient costs and menus often differ by location.',
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Menu Cost Optimizer. All rights reserved.
      </footer>
    </main>
  )
}

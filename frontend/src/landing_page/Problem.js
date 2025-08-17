import React from 'react';

function Problem() {
  return (
    <>
      <main class="container">
          <h2>The methane challenge in rice</h2>
          <p class="helper mt8">Flooded paddy soils create low-oxygen conditions. Methanogenic microbes produce methane (CH₄), a powerful short-term greenhouse gas. Combined with straw burning, rice systems are a significant source of emissions.</p>

          <div class="grid cols-3 mt16">
            <div class="card"><h3>Why methane matters</h3><p>Methane traps more heat than CO₂ over 20 years — reducing it gives near-term climate benefits.</p></div>
            <div class="card"><h3>Sources in rice</h3><p>Continuous flooding, organic-rich soils, and residue decomposition increase methane emissions.</p></div>
            <div class="card"><h3>Health & water</h3><p>Straw burning causes air pollution; inefficient irrigation increases water stress.</p></div>
          </div>
      </main>
    </>
  )
};
export default Problem;
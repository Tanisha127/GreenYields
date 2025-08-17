import React from 'react';

function Solutions() {
  return (
    <>
        <main class="container">
            <h2>Field-ready solutions</h2>
            <div class="grid cols-3 mt16">
                <div class="card"><h3>AWD (Alternate Wetting & Drying)</h3><p>Install a water tube. Let water recede to threshold, irrigate. Save water and cut methane without yield loss when done properly.</p></div>
                <div class="card"><h3>DSR (Direct Seeded Rice)</h3><p>Sow directly into well-prepared beds. Reduces water and labor; requires weed management planning.</p></div>
                <div class="card"><h3>Straw Management</h3><p>Sell or compost straw for livestock, mushrooms, or biogas instead of burning.</p></div>
            </div>

            <section class="mt16">
                <h3>Tools & kits</h3>
                <div class="grid cols-2 mt16">
                <div class="card"><h3>AWD tube guide</h3><p>How to build a simple water tube and set safe thresholds.</p></div>
                <div class="card"><h3>DSR checklist</h3><p>Sowing windows, herbicide & weeding calendar and mechanisation options.</p></div>
                </div>
            </section>
        </main>
    </>
  )
};
export default Solutions;
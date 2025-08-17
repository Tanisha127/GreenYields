import React from 'react';

function Knowledge() {
  return (
    <>
        <main class="container">
            <h2>Knowledge Hub</h2>
            <p>Download guides and research documents for sustainable rice farming practices.</p>
            <div class="grid cols-3 mt16">
                
                <div class="card">
                <h3>AWD Guide</h3>
                <p>Install & use field tubes, irrigation triggers and safety tips.</p>
                <a href="https://agritech.tnau.ac.in/agriculture/pdf/csa_pdf/Alternate_wetting_and_drying_in_irrigated_rice_InfoNote.pdf" target="_blank">📘 Download PDF</a>
                </div>

                <div class="card">
                <h3>DSR Guide</h3>
                <p>Best sowing windows, seed rates, and weed management.</p>
                <a href="https://agritech.tnau.ac.in/agriculture/pdf/csa_pdf/Alternate_wetting_and_drying_in_irrigated_rice_InfoNote.pdf" target="_blank">📘 Download PDF</a>
                </div>

                <div class="card">
                <h3>Straw Uses</h3>
                <p>Compost, mushroom substrate, biogas & buyers list.</p>
                <a href="https://icar.org.in/sites/default/files/Circulars/Creating-Wealth-From-Agricultural-Waste.pdf" target="_blank">📘 Download PDF</a>
                </div>

            </div>
        </main>
    </>
  )
};
export default Knowledge;
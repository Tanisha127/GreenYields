import React, { useContext } from "react";
import { ImpactContext } from "../ImpactContext";

function Home() {
  const { impactData } = useContext(ImpactContext);

  return (
    <>
      <main>
        <section className="hero container">
          <div className="hero-left">
            <h2>Cut methane. Save water. Grow better.</h2>
            <p>
              GreenYields helps rice farmers adopt low-methane practices — AWD,
              DSR and straw recycling — with simple guidance, calculators, and
              verified incentives.
            </p>
            <div className="cta">
              <a className="btn" href="wizard">Get your farm plan</a>
              <a className="btn alt" href="solutions">See solutions</a>
            </div>

            <div className="mt16">
              <div className="kpis">
                <div className="kpi">
                  <div className="num">{impactData.hectares}</div>
                  <small>Hectares enrolled</small>
                </div>
                <div className="kpi">
                  <div className="num">{impactData.water.toLocaleString()}</div>
                  <small>m³ water saved</small>
                </div>
                <div className="kpi">
                  <div className="num">{impactData.methane.toFixed(2)}</div>
                  <small>tCO₂e avoided</small>
                </div>
                <div className="kpi">
                  <div className="num">{impactData.straw}</div>
                  <small>t straw recycled</small>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            {/* <img src=""/> */}
          </div>
        </section>

        <section className="features container">
          <div className="grid cols-3">
            <div className="card">
              <h3>AWD — Save water, cut methane</h3>
              <p>
                Simple field tubes and irrigation timing reduce continuous flooding — 
                the main driver of paddy methane.
              </p>
              <a href="solutions">Learn more →</a>
            </div>
            <div className="card">
              <h3>DSR — Direct seeding</h3>
              <p>
                Skip puddling and transplanting to reduce water and labor while lowering 
                greenhouse gas intensity.
              </p>
              <a href="solutions">Learn more →</a>
            </div>
            <div className="card">
              <h3>Straw Recycling</h3>
              <p>
                Turn residues into compost, fodder, or biogas instead of burning. Cleaner 
                air and extra income.
              </p>
              <a href="knowledge">Find buyers & methods →</a>
            </div>
          </div>
        </section>

        <section className="container">
          <h3>How it works</h3>
          <div className="grid cols-3 mt16">
            <div className="card">
              <h3>1. Diagnose</h3>
              <p>Enter your farm details in the wizard to get a tailored plan.</p>
            </div>
            <div className="card">
              <h3>2. Adopt</h3>
              <p>
                Follow step-by-step practice packs for AWD, DSR or straw management.
              </p>
            </div>
            <div className="card">
              <h3>3. Verify</h3>
              <p>
                Upload photos, use simple sensors or let partners verify to unlock incentives.
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <h3>Latest Farmer Stories</h3>
          <div id="stories-list" className="grid cols-3 mt16"></div>
          <div className="mt16">
            <a className="btn" href="stories">See all stories</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

import React, { useState, useContext } from "react";
import { ImpactContext } from "../ImpactContext";

function Wizard() {
  const [result, setResult] = useState(null);
  const { setImpactData } = useContext(ImpactContext);

  function handleWizardSubmit(e) {
    e.preventDefault();
    const f = e.target;

    const area_ha = Number(f.area_ha.value || 1);
    const irrigation_m3 = Number(f.irrigation_m3.value || 3000);
    const baseline_ch4_kg = Number(f.baseline_ch4_kg.value || 200);
    const straw_t = Number(f.straw_t.value || 0);

    let water_saved_m3 = area_ha * (irrigation_m3 * 0.25);
    let methane_avoided_kg = area_ha * (baseline_ch4_kg * 0.4);
    let methane_avoided_tco2e = methane_avoided_kg * 0.027;
    let cost_saved_inr = water_saved_m3 * 2;

    if (straw_t > 0) {
      methane_avoided_tco2e += straw_t * 1.5;
    }

    const newResult = {
      water_saved_m3,
      methane_avoided_kg,
      methane_avoided_tco2e,
      cost_saved_inr,
    };

    setResult(newResult);

    // update context so Impact page sees data
    setImpactData({
      hectares: area_ha,
      water: water_saved_m3,
      methane: methane_avoided_tco2e,
      straw: straw_t,
    });
  }

  return (
    <main className="container">
      <h2>Get your personalized farm plan</h2>

      <form id="wizard-form" className="card mt16" onSubmit={handleWizardSubmit}>
        <label>Area (hectares)</label>
        <input name="area_ha" type="number" step="0.1" defaultValue="1" required />

        <label>Practice</label>
        <select name="practice">
          <option value="AWD">AWD</option>
          <option value="DSR">DSR</option>
        </select>

        <label>Irrigation per ha (m³)</label>
        <input name="irrigation_m3" type="number" defaultValue="3000" required />

        <label>Baseline CH₄ (kg/ha)</label>
        <input name="baseline_ch4_kg" type="number" defaultValue="200" required />

        <label>Spoiled straw diverted (t) — optional</label>
        <input name="straw_t" type="number" placeholder="0" />

        <button className="btn" type="submit">
          Calculate
        </button>
      </form>

      {result && (
        <div className="card mt16">
          <h3>Estimated Seasonal Benefits</h3>
          <div className="kpis mt8">
            <div className="kpi">
              <div className="num">{result.water_saved_m3.toLocaleString()}</div>
              <small>m³ water saved</small>
            </div>
            <div className="kpi">
              <div className="num">{result.methane_avoided_kg.toLocaleString()}</div>
              <small>kg CH₄ avoided</small>
            </div>
            <div className="kpi">
              <div className="num">{result.methane_avoided_tco2e.toFixed(2)}</div>
              <small>tCO₂e avoided</small>
            </div>
            <div className="kpi">
              <div className="num">₹{result.cost_saved_inr.toLocaleString()}</div>
              <small>estimated savings</small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Wizard;

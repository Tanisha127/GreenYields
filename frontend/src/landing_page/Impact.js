import React, { useContext } from "react";
import { ImpactContext } from "../ImpactContext"; 

function Impact() {
  const { impactData } = useContext(ImpactContext);   

  return (
    <main className="container">
      <h2>Program impact</h2>
      <div className="card mt16">
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
        <p className="helper mt16">
          Numbers are updated as farmers use the wizard and partners onboard hectares.
        </p>
      </div>
    </main>
  );
}

export default Impact;

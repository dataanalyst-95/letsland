
const data = {
  "Demand and Supply Forecasting": [
    "Demand Forecasting",
    "Supply Forecasting"
  ],
  "Scenario Analysis": [
    "Demand Scenario Simulation",
    "Supply Scenario Simulation"
  ],
  "Demand Supply Position Map (Load Generation Balance)": [
    "Demand Supply Position Map"
  ],
  "Scheduling Optimization": [
    "Scheduling Optimization"
  ],
  "Procurement Planning/ Optimization / Energy Portfolio Management": [
    "Procurement Planning",
    "Future Procurement Planning"
  ],
  "Trade Optimization": [
    "Trade Optimization"
  ],
  "Energy Accounting/ Scheduling Functionalities": [
    "Energy Accounting"
  ],
  "Loss Reduction Analytics": [
    "Line Losses - 33kV",
    "Transformation Loss - DSS",
    "Loss from Feeder to DT Meters",
    "Loss Calculation (DT to Consumers)",
    "Loss Forecasting"
  ],
  "Outage Analytics": [
    "Parameter Frozen Scenarios",
    "Consumption Estimation and Predictive Billing",
    "Detection and Prevention of Meter Tampering",
    "Load Profiling and Predictive Billing",
    "Meter Data Integrity Report"
  ],
  "Fraud Analytics": [
    "Suspected Fraud of Dedicated Feeders",
    "Dedicated Feeders Consumption vs. Sanctioned Load (Per kW) Analysis",
    "Phase Analysis of 11kV Feeders (HT Meters)",
    "Threshold-Bound Recharge Behavior Rate",
    "Postpaid Consumers Paying After ≥3 Months Gaps"
  ],
  "CRM Analytics": [
    "Weather/Festival-Specific Customer Service Management",
    "Complaint Resolution Time Report",
    "Consumer Pattern Analysis",
    "FCR – First Call Resolution and Customer Representative Performance",
    "Resource Utilization Management"
  ],
  "Real Time-Network Monitoring & Demand Management": [
    "SAIDI/SAIFI Forecasting",
    "Total Consumption vs. Sanctioned Load (Per kW) Analysis",
    "Area/Feeder-Wise SAIDI/SAIFI Satisfaction",
    "Grid Maintenance and Outage Management during Festivals/Weather",
    "Request for Shutdown Based on Impact (Early vs. Late Resolution)",
    "Nature based Proactive Shutdown Request",
    "Shutdown Request Analysis",
    "Revenue and Consumption Impact"
  ]
};

const container = document.getElementById("useCaseContainer");

Object.entries(data).forEach(([useCase, kpis]) => {
  const box = document.createElement("div");
  box.className = "use-case";

  const title = document.createElement("h3");
  title.textContent = useCase;

  const list = document.createElement("ul");
  list.className = "kpi-list";

  kpis.forEach(kpi => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = "https://analytics.apdcl.org/links/resources/report?uri=%2Freports%2Freports%2F8735acce-31da-4ae8-95ac-b8a5601ec981";  // Placeholder
    link.textContent = kpi;
    item.appendChild(link);
    list.appendChild(item);
  });

  box.appendChild(title);
  box.appendChild(list);

  box.addEventListener("click", () => {
    list.style.display = (list.style.display === "block") ? "none" : "block";
  });

  container.appendChild(box);
});

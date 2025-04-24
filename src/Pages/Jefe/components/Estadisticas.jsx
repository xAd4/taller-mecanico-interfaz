export const Estadisticas = () => {
  const stats = [
    {
      title: "Órdenes Activas",
      value: 54,
      icon: "clipboard-check",
      trend: "up",
    },
    { title: "Clientes Registrados", value: 102, icon: "people", trend: "up" },
    {
      title: "Vehículos en Sistema",
      value: 106,
      icon: "car-front",
      trend: "steady",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="card-icon">
            <i className="bi bi-up"></i>
          </div>
          <div className="card-content">
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
          <div className="trend up">
            <i className="bi bi-arrow-up"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

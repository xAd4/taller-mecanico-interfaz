// EstadisticasMecanico.jsx
export const EstadisticasMecanico = () => {
  const stats = [
    {
      title: "Tareas Totales",
      value: 15,
      icon: "clipboard-data",
      trend: "steady",
    },
    {
      title: "Pendientes",
      value: 3,
      icon: "clock-history",
      trend: "down",
    },
    {
      title: "En Progreso",
      value: 5,
      icon: "tools",
      trend: "up",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="card-icon">
            <i className={`bi bi-${stat.icon}`}></i>
          </div>
          <div className="card-content">
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
          <div className={`trend ${stat.trend}`}>
            <i
              className={`bi bi-arrow-${stat.trend === "up" ? "up" : "right"}`}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

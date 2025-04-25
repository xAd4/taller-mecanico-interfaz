export const EstadisticasMecanico = () => {
  const stats = [
    {
      title: "Pendientes",
      value: 15,
      icon: "clipboard-data",
      trend: "steady",
    },
    {
      title: "En proceso",
      value: 5,
      icon: "tools",
      trend: "up",
    },
    {
      title: "Pendiente por pagar",
      value: 5,
      icon: "tools",
      trend: "up",
    },
    {
      title: "Completados",
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

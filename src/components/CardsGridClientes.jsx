import ClientCard from "./ClientCard";

const CardsGridClientes = ({ title, items, cols = 3 }) => {
  const colClass = `row-cols-1 row-cols-md-${Math.max(1, Math.floor(cols / 2))} row-cols-lg-${cols}`;

  if (!items || items.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Nenhum cliente encontrado.
      </div>
    );
  }

  return (
    <section className="mb-4">
      {title && (
        <>
          <h2>{title}</h2>
          <hr />
        </>
      )}
      <div className={`row ${colClass} g-3`}>
        {items.map((cliente) => (
          <ClientCard
            key={cliente.id}
            nome={cliente.nome}
            email={cliente.email}
            telefone={cliente.telefone}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsGridClientes;

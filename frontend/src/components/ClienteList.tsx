import type { Cliente } from '../types/cliente';

type ClienteListProps = {
  clientes: Cliente[];
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: number) => void;
};

export function ClienteList({ clientes, onEdit, onDelete }: ClienteListProps) {
  return (
    <section className="panel">
      <div className="panel-header list-header">
        <div>
          <p className="eyebrow">Lista</p>
          <h2>Clientes cadastrados</h2>
        </div>
        <span>{clientes.length} registros</span>
      </div>

      <div className="panel-body">
        {clientes.length === 0 ? (
          <div className="empty-state">Nenhum cliente cadastrado ainda.</div>
        ) : (
          <div className="list">
            {clientes.map((cliente) => (
              <article className="cliente-card" key={cliente.id}>
                <div>
                  <strong>{cliente.nome}</strong>
                  <p className="cliente-meta">Telefone: {cliente.telefone}</p>
                </div>

                <div className="card-actions">
                  <button className="button button-secondary" type="button" onClick={() => onEdit(cliente)}>
                    Editar
                  </button>
                  <button className="button button-primary" type="button" onClick={() => onDelete(cliente.id)}>
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
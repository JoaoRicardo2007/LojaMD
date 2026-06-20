import type { FormEvent } from 'react';
import type { ClienteInput } from '../types/cliente';

type ClienteFormProps = {
  values: ClienteInput;
  isEditing: boolean;
  isSubmitting: boolean;
  onChange: (field: keyof ClienteInput, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

export function ClienteForm({
  values,
  isEditing,
  isSubmitting,
  onChange,
  onSubmit,
  onCancel
}: ClienteFormProps) {
  return (
    <form className="panel" onSubmit={onSubmit}>
      <div className="panel-header">
        <p className="eyebrow">Cadastro</p>
        <h2>{isEditing ? 'Editar cliente' : 'Novo cliente'}</h2>
      </div>

      <div className="panel-body stack">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={values.nome}
            onChange={(event) => onChange('nome', event.target.value)}
            placeholder="Digite o nome"
          />
        </div>

        <div className="field">
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="text"
            value={values.telefone}
            onChange={(event) => onChange('telefone', event.target.value)}
            placeholder="Digite o telefone"
          />
        </div>

        <div className="actions">
          <button className="button button-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : isEditing ? 'Atualizar' : 'Salvar'}
          </button>

          {isEditing ? (
            <button className="button button-secondary" type="button" onClick={onCancel}>
              Cancelar edição
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
}
import { useEffect, useState, type FormEvent } from 'react';
import { ClienteForm } from '../components/ClienteForm';
import { ClienteList } from '../components/ClienteList';
import { atualizarCliente, criarCliente, excluirCliente, listarClientes } from '../services/clientesService';
import type { Cliente, ClienteInput } from '../types/cliente';

const emptyForm: ClienteInput = {
  nome: '',
  telefone: ''
};

export function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [form, setForm] = useState<ClienteInput>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const carregarClientes = async () => {
      try {
        const data = await listarClientes();
        setClientes(data);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : 'Falha ao carregar clientes.');
      } finally {
        setIsLoading(false);
      }
    };

    void carregarClientes();
  }, []);

  const handleChange = (field: keyof ClienteInput, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSaving(true);
    setMessage('');

    try {
      if (editingId === null) {
        const criado = await criarCliente(form);
        setClientes((current) => [...current, criado]);
        setMessage('Cliente criado com sucesso.');
      } else {
        const atualizado = await atualizarCliente(editingId, form);
        setClientes((current) =>
          current.map((cliente) => (cliente.id === editingId ? atualizado : cliente))
        );
        setMessage('Cliente atualizado com sucesso.');
      }

      resetForm();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Erro ao salvar cliente.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (cliente: Cliente) => {
    setEditingId(cliente.id);
    setForm({
      nome: cliente.nome,
      telefone: cliente.telefone
    });
    setMessage('Editando cliente selecionado.');
  };

  const handleDelete = async (id: number) => {
    const shouldDelete = window.confirm('Tem certeza que deseja excluir este cliente?');

    if (!shouldDelete) {
      return;
    }

    try {
      await excluirCliente(id);
      setClientes((current) => current.filter((cliente) => cliente.id !== id));
      setMessage('Cliente excluído com sucesso.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Erro ao excluir cliente.');
    }
  };

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">LojaMD</p>
        <h1 className="title">Front inicial para Clientes</h1>
        <p className="subtitle">
          Base em React + TypeScript para conversar com sua API ASP.NET Core. A tela já vem separada
          em página, componente e serviço, para você crescer sem bagunçar a estrutura.
        </p>
      </header>

      <div className="grid-layout">
        <ClienteForm
          values={form}
          isEditing={editingId !== null}
          isSubmitting={isSaving}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={resetForm}
        />

        <div className="stack">
          <section className="panel">
            <div className="panel-header">
              <p className="eyebrow">Status</p>
              <h2>Integração</h2>
            </div>
            <div className="panel-body">
              <p className="status">
                {isLoading ? 'Carregando clientes...' : message || 'Pronto para usar a API.'}
              </p>
            </div>
          </section>

          <ClienteList clientes={clientes} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
    </main>
  );
}
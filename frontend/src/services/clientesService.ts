import { request } from './api';
import type { Cliente, ClienteInput } from '../types/cliente';

const resourcePath = '/api/clientes';

export function listarClientes() {
  return request<Cliente[]>(resourcePath);
}

export function criarCliente(cliente: ClienteInput) {
  return request<Cliente>(resourcePath, {
    method: 'POST',
    body: JSON.stringify(cliente)
  });
}

export function atualizarCliente(id: number, cliente: ClienteInput) {
  return request<Cliente>(`${resourcePath}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(cliente)
  });
}

export function excluirCliente(id: number) {
  return request<void>(`${resourcePath}/${id}`, {
    method: 'DELETE'
  });
}
const JSON_HEADERS = {
  'Content-Type': 'application/json'
};

export async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...JSON_HEADERS,
      ...init.headers
    }
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || `Erro HTTP ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  const text = await response.text();
  return text ? (JSON.parse(text) as T) : (undefined as T);
}
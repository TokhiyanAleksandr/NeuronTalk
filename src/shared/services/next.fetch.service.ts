import {API_URL, X_FRONTEND_KEY} from "@/shared/constants/app";
import {notFound} from "next/navigation";
class NextFetchService {
  private static isURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  private static getURL(input: string): string {
    return NextFetchService.isURL(input) ? input : `${API_URL}${input}`;
  }

  static async get<T>(
      input: string,
      init?: RequestInit
  ): Promise<T> {
    const headers = new Headers(init?.headers);
    headers.set('X-FRONTEND-KEY', X_FRONTEND_KEY);

    const res = await fetch(NextFetchService.getURL(input), {
      ...init,
      cache: 'no-store',
      method: 'GET',
      headers,
    });
    if (!res.ok) {
      if (res.status === 404) {
        // Временно закомментируйте это:
        // notFound();

        // Вместо этого выбросите ошибку с URL, чтобы увидеть её на экране:
        throw new Error(`Бэкенд вернул 404 по адресу: ${NextFetchService.getURL(input)}`);
      }

      throw new Error('Request failed');
    }

    return res.json();
  }

  static async post<T>(
      input: string,
      body?: unknown,
      init?: RequestInit
  ): Promise<T> {
    const headers = new Headers(init?.headers);
    headers.set('X-FRONTEND-KEY', X_FRONTEND_KEY);
    headers.set('Content-Type', 'application/json');

    const res = await fetch(NextFetchService.getURL(input), {
      ...init,
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    return res.json();
  }

  static async put(
    input: string,
    init?: RequestInit | undefined
  ): Promise<Response> {
    return fetch(NextFetchService.getURL(input), { ...init, method: 'PUT' });
  }

  static async delete(
    input: string,
    init?: RequestInit | undefined
  ): Promise<Response> {
    return fetch(NextFetchService.getURL(input), { ...init, method: 'DELETE' });
  }
}

export default NextFetchService;

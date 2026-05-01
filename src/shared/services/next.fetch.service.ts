import {API_URL} from "@/shared/constants/app";
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
    const res = await fetch(NextFetchService.getURL(input), {
      ...init,
      cache: 'no-store',
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    return res.json();
  }

  static async post(
    input: string,
    init?: RequestInit | undefined
  ): Promise<Response> {
    return fetch(NextFetchService.getURL(input), { ...init, method: 'POST' });
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

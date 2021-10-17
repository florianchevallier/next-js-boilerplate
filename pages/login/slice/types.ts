/* --- STATE --- */
export interface LoginState {
  getRandomData: {
    loading: boolean;
    success: boolean;
    data?: IRandomData;
  };
}

export interface IRandomData {
  success: Success;
  contents: Contents;
  baseurl: string;
  copyright: Copyright;
}

export interface Contents {
  quotes: Quote[];
}

export interface Quote {
  quote: string;
  length: string;
  author: string;
  tags: string[];
  category: string;
  language: string;
  date: Date;
  permalink: string;
  id: string;
  background: string;
  title: string;
}

export interface Copyright {
  year: number;
  url: string;
}

export interface Success {
  total: number;
}

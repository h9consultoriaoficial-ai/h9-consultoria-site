export interface Lead {
  id?: string;
  nome: string;
  email: string;
  whatsapp?: string;
  origem?: string;
  criado_em?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  published: boolean;
}

export interface ClienteProduto {
  id: string;
  cliente_id: string;
  tipo: "analise" | "app" | "treinamento";
  nome: string;
  descricao?: string;
  url?: string;
  mes_referencia?: string;
  status: "ativo" | "pendente" | "expirado";
  criado_em: string;
}

export interface Profile {
  id: string;
  nome: string;
  email: string;
  whatsapp?: string;
  empresa?: string;
  ativo: boolean;
  criado_em: string;
}

export interface ContatoForm {
  nome: string;
  email: string;
  whatsapp: string;
  assunto: string;
  mensagem: string;
}

-- H9 Consultoria Estratégica — Schema Supabase
-- Execute este arquivo no SQL Editor do Supabase

-- Perfis de clientes
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  empresa TEXT,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: cliente só vê seu próprio perfil
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_own" ON profiles
  FOR ALL USING (auth.uid() = id);

-- Produtos comprados pelo cliente
CREATE TABLE IF NOT EXISTS cliente_produtos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cliente_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL CHECK (tipo IN ('analise','app','treinamento')),
  nome TEXT NOT NULL,
  descricao TEXT,
  url TEXT,
  mes_referencia TEXT,
  status TEXT DEFAULT 'ativo' CHECK (status IN ('ativo','pendente','expirado')),
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: cliente só vê seus produtos
ALTER TABLE cliente_produtos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "produtos_own" ON cliente_produtos
  FOR SELECT USING (
    cliente_id = (SELECT id FROM profiles WHERE id = auth.uid())
  );

-- Leads do ebook
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  origem TEXT DEFAULT 'ebook',
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Formulário de contato
CREATE TABLE IF NOT EXISTS contatos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  assunto TEXT,
  mensagem TEXT,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Posts do blog (opcional — pode usar arquivos .md)
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  resumo TEXT,
  conteudo TEXT,
  categoria TEXT,
  publicado BOOLEAN DEFAULT false,
  publicado_em TIMESTAMPTZ,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

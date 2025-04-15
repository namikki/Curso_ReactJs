// services/clientService.js
import supabase from './supabase';

const clientService = {
  async getClients(page = 1, limit = 12) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
      .from('clientes')
      .select('*', { count: 'exact' })
      .range(from, to)
      .order('nome', { ascending: true });

    if (error) {
      console.error('Erro ao buscar clientes:', error);
      throw error;
    }

    return {
      clients: data,
      total: count,
      totalPages: Math.ceil(count / limit)
    };
  },

  async getClientById(id) {
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Erro ao buscar cliente:', error);
      throw error;
    }

    return data;
  },

  async createClient(client) {
    const { data, error } = await supabase
      .from('clientes')
      .insert([client])
      .select();

    if (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }

    return data[0];
  },

  async updateClient(id, client) {
    const { data, error } = await supabase
      .from('clientes')
      .update(client)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Erro ao atualizar cliente:', error);
      throw error;
    }

    return data[0];
  },

  async deleteClient(id) {
    const { error } = await supabase
      .from('clientes')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erro ao deletar cliente:', error);
      throw error;
    }

    return true;
  }
};

export default clientService;

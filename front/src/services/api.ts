//api.ts

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5017/api'
});

export const tarefaService = {
    listar: () => api.get('/tarefa/listar'),
    cadastrar: (tarefa: any) => api.post('/tarefa/cadastrar', tarefa),
    alterar: (id: number) => api.patch(`/tarefa/alterar/${id}`),
    listarConcluidas: () => api.get('/tarefa/concluidas'),
    listarNaoConcluidas: () => api.get('/tarefa/naoconcluidas')
};

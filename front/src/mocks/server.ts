//server.ts

import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const server = setupServer(
    http.get('/api/tarefas', () => {
        try {
            return HttpResponse.json([
                { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição da Tarefa 1', status: 'Pendente' },
                { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição da Tarefa 2', status: 'Concluída' },
            ])
        } catch (error) {
            return HttpResponse.json({ error: 'Erro ao buscar tarefas' }, { status: 500 })
        }
    }),
    http.put('/api/tarefas/:id', ({ params }) => {
        const { id } = params;
        try {
            return HttpResponse.json(
                { id, titulo: `Tarefa ${id}`, descricao: `Descrição da Tarefa ${id}`, status: 'Concluída' }
            )
        } catch (error) {
            return HttpResponse.json({ error: 'Erro ao atualizar tarefa' }, { status: 500 })
        }
    }),
    http.delete('/api/tarefas/:id', ({ params }) => {
        const { id } = params;
        try {
            return HttpResponse.json({ message: `Tarefa ${id} deletada com sucesso` })
        } catch (error) {
            return HttpResponse.json({ error: 'Erro ao deletar tarefa' }, { status: 500 })
        }
    })
)
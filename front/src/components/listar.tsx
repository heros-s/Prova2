//listar.tsx

import React, { useEffect, useState } from 'react';
import { tarefaService } from '../services/api';

interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    status: string;
}

export default function ListarTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        const carregarTarefas = async () => {
            try {
                const response = await tarefaService.listar();
                setTarefas(response.data as Tarefa[]);
            } catch (error) {
                console.error("Erro ao carregar tarefas:", error);
            }
        };
        carregarTarefas();
    }, []);

    const handleAlterar = async (id: number) => {
        try {
            await tarefaService.alterar(id);
            const response = await tarefaService.listar();
            setTarefas(response.data as Tarefa[]);
        } catch (error) {
            console.error("Erro ao alterar tarefa:", error);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {tarefas.map(tarefa => (
                    <tr key={tarefa.id}>
                        <td>{tarefa.titulo}</td>
                        <td>{tarefa.descricao}</td>
                        <td>{tarefa.status}</td>
                        <td>
                            <button onClick={() => handleAlterar(tarefa.id)}>
                                Alterar Status
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
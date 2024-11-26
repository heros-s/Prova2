//cadastrar.tsx

import React, { useState, useEffect } from 'react';
import { tarefaService } from '../services/api';
import axios from 'axios';

export default function CadastrarTarefa() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categorias, setCategorias] = useState<Array<{id: number, nome: string}>>([]);

    useEffect(() => {
        const carregarCategorias = async () => {
            try {
                const response = await axios.get('http://localhost:5017/api/categoria/listar');
                setCategorias(response.data as Array<{id: number, nome: string}>);
            } catch (error) {
                console.error("Erro ao carregar categorias:", error);
            }
        };
        carregarCategorias();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await tarefaService.cadastrar({
                titulo,
                descricao,
                categoriaId: parseInt(categoriaId),
                status: "Não iniciada"
            });
            setTitulo('');
            setDescricao('');
            setCategoriaId('');
        } catch (error) {
            console.error("Erro ao cadastrar tarefa:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)} 
                placeholder="Título"
                required
            />
            <textarea 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)} 
                placeholder="Descrição"
                required
            />
            <select 
                value={categoriaId} 
                onChange={(e) => setCategoriaId(e.target.value)}
                required
            >
                <option value="" disabled>Selecione uma categoria</option>
                {categorias.map((cat: { id: number, nome: string }) => (
                    <option key={cat.id} value={cat.id}>{cat.nome}</option>
                ))}
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

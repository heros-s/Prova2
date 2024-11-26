public class Tarefa
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public string Status { get; set; } = "Não iniciada"; // "Não iniciada", "Em andamento", "Concluída"
    public int CategoriaId { get; set; }
    public Categoria Categoria { get; set; }
}

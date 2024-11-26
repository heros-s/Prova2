using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Tarefas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TarefaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("cadastrar")]
        public IActionResult CadastrarTarefa([FromBody] Tarefa tarefa)
        {
            if (tarefa == null || string.IsNullOrWhiteSpace(tarefa.Titulo))
            {
                return BadRequest("Tarefa inválida.");
            }

            tarefa.Status = "Não iniciada";
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return CreatedAtAction(nameof(CadastrarTarefa), new { id = tarefa.Id }, tarefa);
        }

        [HttpGet("listar")]
        public IActionResult ListarTarefas()
        {
            var tarefas = _context.Tarefas.ToList();
            return Ok(tarefas);
        }

        [HttpPatch("alterar/{id}")]
        public IActionResult AlterarStatus(int id)
        {
            var tarefa = _context.Tarefas.Find(id);
            if (tarefa == null) return NotFound("Tarefa não encontrada.");

            switch (tarefa.Status)
            {
                case "Não iniciada":
                    tarefa.Status = "Em andamento";
                    break;
                case "Em andamento":
                    tarefa.Status = "Concluída";
                    break;
                default:
                    return BadRequest("Status da tarefa inválido.");
            }

            _context.SaveChanges();
            return Ok(tarefa);
        }

        [HttpGet("naoconcluidas")]
        public IActionResult ListarNaoConcluidas()
        {
            var tarefas = _context.Tarefas
                .Where(t => t.Status == "Não iniciada" || t.Status == "Em andamento")
                .ToList();
            return Ok(tarefas);
        }

        [HttpGet("concluidas")]
        public IActionResult ListarConcluidas()
        {
            var tarefas = _context.Tarefas
                .Where(t => t.Status == "Concluída")
                .ToList();
            return Ok(tarefas);
        }
    }
}

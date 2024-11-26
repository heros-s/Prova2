using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Tarefas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CategoriaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("cadastrar")]
        public IActionResult CadastrarCategoria([FromBody] Categoria categoria)
        {
            if (categoria == null || string.IsNullOrWhiteSpace(categoria.Nome))
            {
                return BadRequest("Categoria inválida.");
            }

            _context.Categorias.Add(categoria);
            _context.SaveChanges();
            return CreatedAtAction(nameof(CadastrarCategoria), new { id = categoria.Id }, categoria);
        }

        [HttpGet("listar")]
        public IActionResult ListarCategorias()
        {
            var categorias = _context.Categorias.ToList();
            return Ok(categorias);
        }
    }
}
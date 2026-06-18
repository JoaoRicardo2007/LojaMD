using Microsoft.AspNetCore.Mvc;
using ProjetoMD.Data;
using ProjetoMD.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjetoMD.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return Ok(cliente);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetCliente()
        {
            return await _context.Clientes.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }
            return Ok(cliente);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Cliente>> PutCliente(int id, Cliente cliente)
        {
            var clienteExistente = await _context.Clientes.FindAsync(id);

            if(clienteExistente == null)
            {
                return NotFound();
            }
            
            clienteExistente.Nome = cliente.Nome;
            clienteExistente.Telefone = cliente.Telefone;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

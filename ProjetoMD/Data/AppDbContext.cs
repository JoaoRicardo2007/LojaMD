using Microsoft.EntityFrameworkCore;
using ProjetoMD.Models;

namespace ProjetoMD.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Cliente> Clientes { get; set; }
    }
}

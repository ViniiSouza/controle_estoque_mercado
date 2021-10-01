using Infra.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra
{
    
    public class MercadoManiaDbContext : DbContext
    {
        public string connectionString = @"Server=DESKTOP-OF89FLJ\SQLEXPRESS;Database=MercadoMania;Trusted_Connection=True;";
        public MercadoManiaDbContext() : base() {}
        public virtual DbSet<Categorias> Categorias { get; set; }
        public virtual DbSet<Produtos> Produtos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

    }
}

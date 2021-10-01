using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Infra.Entidades
{
    public class Categorias
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }

    }
}

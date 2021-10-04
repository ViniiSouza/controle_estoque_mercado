using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMercadoMania
{
    public class BaseResult
    {
        public string Mensagem { get; set; }
        public string Erro { get; set; }
        public bool Sucesso { get; set; }
    }
}

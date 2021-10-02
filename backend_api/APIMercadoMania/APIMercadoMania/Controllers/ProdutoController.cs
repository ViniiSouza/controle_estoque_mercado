using Aplicacao;
using Infra.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIMercadoMania.Controllers
{
    [ApiController]
    [Route("{controller}")]
    public class ProdutoController : ControllerBase
    {
        private ProdutoService _produtoService = new ProdutoService();
        [HttpGet]
        public List<Produtos> Get()
        {
            return _produtoService.Get().ToList();
        }
        [HttpGet("{id}")]
        public Produtos GetProduto(int id)
        {
            return _produtoService.GetById(id);
        }
        [HttpPost]
        public string Post([FromBody]Produtos produto)
        {
            try
            {
                _produtoService.Post(produto);
                return "Post executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
        }
        [HttpPut]
        public string Put(Produtos produto)
        {
            try
            {
                _produtoService.Put(produto);
                return "Put executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {
                _produtoService.Delete(_produtoService.GetById(id));
                return "Delete executado";
            }
            catch (Exception ex)
            {
                return "Erro encontrado: " + ex.Message;
            }
            
        }
    }
}

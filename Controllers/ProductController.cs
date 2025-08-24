using Microsoft.AspNetCore.Mvc;
using ServerForReact.Model;
using ServerForReact.Repositories.Interfaces;

namespace ServerForReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController(IProductRepository productRepository) : ControllerBase
    {
        [HttpPost]
        public void Add(Product product)
        {
            productRepository.Add(product);
        }
        [HttpDelete]
        public void Remove(int id)
        {
            productRepository.Remove(id);
        }
        [HttpPut]
        public void Update(Product editableproduct)
        {
            productRepository.Update(editableproduct);
        }
        [HttpGet("{id}")]
        public Product GetById(int id)
        {
            var product = productRepository.GetById(id);
            return product;
        }
        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return productRepository.GetAll();
        }
        [HttpGet("{skip}/{take}")] 
        public IEnumerable<Product> GetRange(int skip, int take)
        {
            return productRepository.GetRange(skip, take);
        }
    }
}

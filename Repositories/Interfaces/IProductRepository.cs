using ServerForReact.Model;

namespace ServerForReact.Repositories.Interfaces
{
    public interface IProductRepository
    {
        public void Add(Product product);
        public void Remove(int id);
        public void Update(Product editableproduct);
        public Product GetById(int id);
        public IEnumerable<Product> GetAll();
        public IEnumerable<Product> GetRange(int skip, int take);
    }
}
